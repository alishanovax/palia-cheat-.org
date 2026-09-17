#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const bad = [];

function walk(dir, base = '') {
	for (const e of readdirSync(dir)) {
		const p = join(dir, e);
		const rel = `${base}/${e}`;
		if (statSync(p).isDirectory()) walk(p, rel);
		else if (e === 'index.html') {
			const html = readFileSync(p, 'utf8');
			const path = rel.replace(/\\/g, '/').replace('/index.html', '') || '/';
			if (/^\/[a-z]{2}\//.test(path) && path !== '/') continue;
			const robots = (html.match(/name="robots" content="([^"]*)"/) || [])[1] || 'index, follow';
			if (robots.includes('noindex')) continue;
			const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
			const desc = (html.match(/name="description" content="([^"]*)"/) || [])[1] || '';
			const issues = [];
			if (!title) issues.push('no title');
			else if (title.length < 30 || title.length > 60) issues.push(`title ${title.length}`);
			if (!desc) issues.push('no desc');
			else if (desc.length < 140 || desc.length > 160) issues.push(`desc ${desc.length}`);
			const emptyAlt = (html.match(/<img[^>]*alt=""/g) || []).length;
			if (emptyAlt) issues.push(`empty alt x${emptyAlt}`);
			if (issues.length) bad.push({ path, issues, title, descLen: desc.length });
		}
	}
}

walk(DIST);
bad.sort((a, b) => a.path.localeCompare(b.path));
console.log(`Indexable EN pages with issues: ${bad.length}`);
for (const b of bad) {
	console.log(`${b.path} — ${b.issues.join(', ')} | desc ${b.descLen}`);
}
process.exit(bad.length ? 1 : 0);
