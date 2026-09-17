#!/usr/bin/env node
/**
 * Validate built JSON-LD via schema.org (proxy for Rich Results eligibility).
 * After deploy, also run: https://search.google.com/test/rich-results
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const CASES = [
	{
		label: 'Homepage',
		file: 'index.html',
		expect: { faqPage: false, product: false },
	},
	{
		label: 'Cheats (Product)',
		file: 'cheats/index.html',
		expect: { faqPage: false, product: true, productId: 'https://paliacheats.org/cheats/#product' },
	},
	{
		label: 'Indexed FAQ',
		file: 'faq/delivery/index.html',
		expect: { faqPage: true, faqCount: 1 },
	},
	{
		label: 'Noindex FAQ',
		file: 'faq/about/index.html',
		expect: { faqPage: false },
	},
	{
		label: 'Review',
		file: 'reviews/mike-p/index.html',
		expect: { review: true, itemReviewed: 'https://paliacheats.org/cheats/#product' },
	},
];

function extractGraphs(html) {
	return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) =>
		JSON.parse(m[1]),
	);
}

function analyze(html) {
	const graphs = extractGraphs(html);
	const nodes = graphs.flatMap((g) => g['@graph'] ?? [g]);
	return {
		blocks: graphs.length,
		faqPage: nodes.some((n) => n['@type'] === 'FAQPage'),
		faqCount: nodes.find((n) => n['@type'] === 'FAQPage')?.mainEntity?.length ?? 0,
		product: nodes.some((n) => n['@type'] === 'Product'),
		productId: nodes.find((n) => n['@type'] === 'Product')?.['@id'],
		review: nodes.some((n) => n['@type'] === 'Review'),
		itemReviewed: nodes.find((n) => n['@type'] === 'Review')?.itemReviewed?.['@id'],
	};
}

async function validateSchemaOrg(graph) {
	const res = await fetch('https://validator.schema.org/validate', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(graph),
	});
	if (!res.ok) return { ok: false, status: res.status, errors: [`HTTP ${res.status}`] };
	const raw = await res.text();
	const jsonText = raw.replace(/^\)\]\}'\n?/, '');
	let data;
	try {
		data = JSON.parse(jsonText);
	} catch {
		return { ok: false, errors: [`Invalid JSON from validator: ${jsonText.slice(0, 120)}`] };
	}
	const errors = (data.errors ?? []).map((e) => e.message ?? JSON.stringify(e));
	return { ok: errors.length === 0, errors };
}

let failed = 0;

console.log('Rich-results preflight (local dist JSON-LD)\n');

for (const case_ of CASES) {
	const html = readFileSync(path.join(DIST, case_.file), 'utf8');
	const got = analyze(html);
	const exp = case_.expect;
	let ok = true;
	const notes = [];

	if (exp.faqPage !== undefined && got.faqPage !== exp.faqPage) {
		ok = false;
		notes.push(`FAQPage expected ${exp.faqPage}, got ${got.faqPage}`);
	}
	if (exp.faqCount !== undefined && got.faqCount !== exp.faqCount) {
		ok = false;
		notes.push(`FAQ count expected ${exp.faqCount}, got ${got.faqCount}`);
	}
	if (exp.product !== undefined && got.product !== exp.product) {
		ok = false;
		notes.push(`Product expected ${exp.product}, got ${got.product}`);
	}
	if (exp.productId && got.productId !== exp.productId) {
		ok = false;
		notes.push(`Product @id expected ${exp.productId}, got ${got.productId}`);
	}
	if (exp.review !== undefined && got.review !== exp.review) {
		ok = false;
		notes.push(`Review expected ${exp.review}, got ${got.review}`);
	}
	if (exp.itemReviewed && got.itemReviewed !== exp.itemReviewed) {
		ok = false;
		notes.push(`itemReviewed expected ${exp.itemReviewed}, got ${got.itemReviewed}`);
	}

	console.log(`${ok ? '✓' : '✗'} ${case_.label} (${case_.file})`);
	if (!ok) {
		failed += 1;
		for (const n of notes) console.log(`    ${n}`);
	} else {
		console.log(`    blocks=${got.blocks} FAQPage=${got.faqPage} Product=${got.product} Review=${got.review}`);
	}

	// schema.org validation on primary graph block
	const graphs = extractGraphs(html);
	if (graphs[0]) {
		const v = await validateSchemaOrg(graphs[0]);
		if (v.ok) console.log('    schema.org: valid');
		else {
			failed += 1;
			console.log(`    schema.org: ${v.errors.slice(0, 3).join('; ')}`);
		}
	}
}

const snippetDir = path.join(DIST, 'rich-results-snippets');
mkdirSync(snippetDir, { recursive: true });

for (const case_ of CASES) {
	const html = readFileSync(path.join(DIST, case_.file), 'utf8');
	const graphs = extractGraphs(html);
	if (graphs.length === 0) continue;
	const slug = case_.file.replace(/\/index\.html$/, '').replace(/\//g, '-') || 'home';
	const snippet = `<!DOCTYPE html><html><head>${graphs
		.map((g) => `<script type="application/ld+json">${JSON.stringify(g)}</script>`)
		.join('')}</head><body></body></html>`;
	writeFileSync(path.join(snippetDir, `${slug}.html`), snippet);
}

console.log('\nRich Results Test — after deploy (URL tab):');
for (const case_ of CASES.filter((c) => !c.file.includes('kilima'))) {
	const url = `https://paliacheats.org/${case_.file.replace('index.html', '')}`;
	console.log(`  https://search.google.com/test/rich-results?url=${encodeURIComponent(url)}`);
}

console.log('\nRich Results Test — now (CODE tab): open https://search.google.com/test/rich-results');
console.log('  Paste HTML from dist/rich-results-snippets/*.html (one file per page).');

if (failed) process.exit(1);
console.log('\nAll local rich-results preflight checks passed.');
