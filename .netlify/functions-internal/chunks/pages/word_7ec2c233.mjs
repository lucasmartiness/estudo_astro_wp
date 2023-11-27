import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_ef7b3d63.mjs';
import 'clsx';
import 'html-escaper';

const html = "<h1 id=\"oiiii\">oiiii</h1>";

				const frontmatter = {"titulo":"Olá"};
				const file = "C:/Trabalho/estudo/dinos/inter/src/pages/posts/word.md";
				const url = "/posts/word";
				function rawContent() {
					return "# oiiii";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"oiiii","text":"oiiii"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
