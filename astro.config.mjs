// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the pscode syntax definition
const pscodeLang = JSON.parse(
	fs.readFileSync(join(__dirname, 'lang/syntaxes/pscode.tmLanguage.json'), 'utf-8')
);

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel(),
	integrations: [
		starlight({
			title: 'Common Pseudocode',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/adarshrkumar/CommonPS' },
				{ icon: 'vscode', label: 'Extension', href: 'https://github.com/adarshrkumar/pscode-syntax-highlighter' },
			],
			expressiveCode: {
				shiki: {
					langs: [
						{
							...pscodeLang,
							name: 'pscode',
							aliases: ['pseudocode', 'ps', 'pseudo', 'commonps'],
						},
					],
				},
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Getting Started', slug: 'getting-started' },
					],
				},
				{
					label: 'Basic Syntax',
					autogenerate: { directory: 'basics' },
				},
				{
					label: 'Control Flow',
					autogenerate: { directory: 'control-flow' },
				},
				{
					label: 'Data Structures',
					autogenerate: { directory: 'data-structures' },
				},
				{
					label: 'Functions',
					autogenerate: { directory: 'functions' },
				},
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
			],
		}),
	],
});
