#!/usr/bin/env node
/**
 * Bulk-fix Palia search intent in i18n source files (phrases, pages-i18n, ui-strings).
 * Does NOT rename page id keys like `radar:` — only copy strings.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const I18N = path.join(ROOT, 'scripts', 'i18n-data');

const FILES = ['phrases.mjs', 'pages-i18n.mjs', 'ui-strings-part1.mjs', 'ui-strings-part2.mjs'];

const REPLACEMENTS = [
	[/radar hack/gi, 'wallhack'],
	[/2D radar/gi, 'wallhack'],
	[/players and Scavs/gi, 'ores, fish, and insects'],
	[/loot and extracts/gi, 'ores and fish nodes'],
	[/squad fight/gi, 'farming session'],
	[/firefight/gi, 'fishing session'],
	[/BR y scav-run/gi, 'Kilima y Bahari Bay'],
	[/BR et scav-run/gi, 'Kilima et Bahari Bay'],
	[/BR und scav-run/gi, 'Kilima und Bahari Bay'],
	[/BR e scav-run/gi, 'Kilima e Bahari Bay'],
	[/BR i scav-run/gi, 'Kilima i Bahari Bay'],
	[/BR en scav-run/gi, 'Kilima en Bahari Bay'],
	[/BR ve scav-run/gi, 'Kilima ve Bahari Bay'],
	[/BR и scav-run/gi, 'Kilima и Bahari Bay'],
	[/BR і scav-run/gi, 'Kilima і Bahari Bay'],
	[/BR a scav-run/gi, 'Kilima a Bahari Bay'],
	[/BR și scav-run/gi, 'Kilima și Bahari Bay'],
	[/BR och scav-run/gi, 'Kilima och Bahari Bay'],
	[/BR和scav-run/gi, 'Kilima和Bahari Bay'],
	[/BRとscav-run/gi, 'KilimaとBahari Bay'],
	[/BR 및 scav-run/gi, 'Kilima 및 Bahari Bay'],
	[/BR और scav-run/gi, 'Kilima और Bahari Bay'],
	[/BR dan scav-run/gi, 'Kilima dan Bahari Bay'],
	[/BR และ scav-run/gi, 'Kilima และ Bahari Bay'],
	[/BR và scav-run/gi, 'Kilima và Bahari Bay'],
	[/escuadrones enemigos/gi, 'recursos raros'],
	[/escouades ennemies/gi, 'ressources rares'],
	[/feindliche Squads/gi, 'seltene Ressourcen'],
	[/esquadrões inimigos/gi, 'recursos raros'],
	[/squadre nemiche/gi, 'risorse rare'],
	[/vijandelijke squads/gi, 'zeldzame resources'],
	[/wrogich squadów/gi, 'rzadkie surowce'],
	[/вражеских отрядов/gi, 'редких ресурсов'],
	[/düşman squad/gi, 'nadir kaynaklar'],
	[/فرق العدو/gi, 'موارد نادرة'],
	[/敵スクワッド/gi, 'レア資源'],
	[/적 분대/gi, '희귀 자원'],
	[/敌方小队/gi, '稀有资源'],
	[/दुश्मन squad/gi, 'दुर्लभ संसाधन'],
	[/squad musuh/gi, 'sumber daya langka'],
	[/squad ศัตรู/gi, 'ทรัพยากรหายาก'],
	[/squad địch/gi, 'tài nguyên hiếm'],
	[/ворожих загонів/gi, 'рідкісних ресурсів'],
	[/nepřátelských squadů/gi, 'vzácných surovin'],
	[/squad-urilor inamice/gi, 'resurse rare'],
	[/fiendesquads/gi, 'sällsynta resurser'],
	[/2D radar cues for flanks and rotations/gi, 'wallhack overlays and teleport bookmarks for farming routes'],
	[/radar controls/gi, 'wallhack and teleport controls'],
	[/loot markers/gi, 'resource markers'],
	[/loot pins/gi, 'resource pins'],
	[/, radar,/g, ', wallhack,'],
	[/, radar /g, ', wallhack '],
	[/ radar /g, ' wallhack '],
	[/ESP, radar/gi, 'ESP, wallhack'],
	[/ESP wallhack, radar/gi, 'ESP wallhack, wallhack'],
];

async function main() {
	for (const file of FILES) {
		const filePath = path.join(I18N, file);
		let text = await readFile(filePath, 'utf8');
		const before = text;
		for (const [from, to] of REPLACEMENTS) {
			text = text.replace(from, to);
		}
		if (file === 'phrases.mjs') {
			text = text.replace(/\tradwallhack: 'wallhack hack'/g, "\tteleport: 'teleport hack'");
			text = text.replace(/KW\.wallhack hack/g, 'KW.teleport');
		}
		if (file === 'pages-i18n.mjs') {
			text = text.replace(
				/radar: \{ suffix: '2D Threat Overlay', focus: '[^']+', altKeyword: '[^']+' \}/,
				"radar: { suffix: 'Wallhack & Teleport', focus: 'wallhack overlays and teleport bookmarks for Kilima and Bahari Bay', altKeyword: 'wallhack teleport overlay' }",
			);
			text = text.replace(
				/radar: \{ en: 'Radar Hack'/g,
				"radar: { en: 'Wallhack & Teleport'",
			);
			text = text.replace(/radar: 'Radar hack'/g, "radar: 'Wallhack & Teleport'");
			text = text.replace(/radar: 'Radar Hack'/g, "radar: 'Wallhack & Teleport'");
			text = text.replace(/radar: 'Radar 2D de amenazas'/g, "radar: 'Wallhack y teleporte'");
			text = text.replace(/radar: 'Radar 2D des menaces'/g, "radar: 'Wallhack et téléport'");
			text = text.replace(/radar: '2D Bedrohungsradar'/g, "radar: 'Wallhack & Teleport'");
			text = text.replace(/radar: 'Radar 2D de ameaças'/g, "radar: 'Wallhack e teleporte'");
			text = text.replace(/radar: 'Radar 2D minacce'/g, "radar: 'Wallhack e teleport'");
			text = text.replace(/radar: '2D радар угроз'/g, "radar: 'Wallhack и телепорт'");
		}
		if (text !== before) {
			await writeFile(filePath, text, 'utf8');
			console.log(`✓ Updated ${file}`);
		} else {
			console.log(`- No changes in ${file}`);
		}
	}
	console.log('Done.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
