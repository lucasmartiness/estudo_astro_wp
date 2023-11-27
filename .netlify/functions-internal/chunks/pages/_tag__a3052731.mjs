import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../astro_ef7b3d63.mjs';
import 'clsx';
import { $ as $$Layout } from './_slug__a4a7fe6b.mjs';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                            */import '../astro-assets-services_7b34beee.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return [
    { params: { tag: "estudo" } },
    { params: { tag: "teste" } },
    { params: { tag: "batata" } }
  ];
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main>
		 ${tag}
	</main>
` })}`;
}, "C:/Trabalho/estudo/dinos/inter/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Trabalho/estudo/dinos/inter/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, $$url as url };
