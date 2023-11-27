import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_4a5b65f5.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_ef7b3d63.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_1347e2c3.mjs');
const _page1  = () => import('./chunks/index_bf4a85dd.mjs');
const _page2  = () => import('./chunks/word_dab2b537.mjs');
const _page3  = () => import('./chunks/_tag__6f438a02.mjs');
const _page4  = () => import('./chunks/_slug__a0663617.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/posts/word.md", _page2],["src/pages/tags/[tag].astro", _page3],["src/pages/[slug].astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
