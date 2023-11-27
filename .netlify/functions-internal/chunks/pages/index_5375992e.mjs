import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_ef7b3d63.mjs';
import { a as $$Image, $ as $$Layout } from './_slug__a4a7fe6b.mjs';
import 'clsx';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
/* empty css                            */import '../astro-assets-services_7b34beee.mjs';

const teste = {"src":"/_astro/teste.786dc75b.jpg","width":336,"height":280,"format":"jpg"};

const eja = {"src":"/_astro/logoEJA.1d8ec814.png","width":95,"height":100,"format":"png"};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let res = await fetch("https://33giga.com.br/wp-json/wp/v2/posts");
  let posts = await res.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Image", $$Image, { "src": teste, "alt": "anuncio" })}
	${renderComponent($$result2, "Image", $$Image, { "src": eja, "alt": "anuncio" })}
	${maybeRenderHead()}<main> 
		${posts.map((p) => renderTemplate`<article class="bebas">
					<a${addAttribute(p.slug, "href")}>
						 ${p.title.rendered}
					</a>
				</article>`)}
	</main>
` })}`;
}, "C:/Trabalho/estudo/dinos/inter/src/pages/index.astro", void 0);

const $$file = "C:/Trabalho/estudo/dinos/inter/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
