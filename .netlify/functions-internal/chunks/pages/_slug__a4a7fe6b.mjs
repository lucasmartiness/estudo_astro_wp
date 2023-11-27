import '@astrojs/internal-helpers/path';
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderHead, j as renderSlot, k as renderComponent, F as Fragment, u as unescapeHTML } from '../astro_ef7b3d63.mjs';
import 'clsx';
/* empty css                            */import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_7b34beee.mjs';

const $$Astro$3 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Trabalho/estudo/dinos/inter/node_modules/astro/components/Image.astro", void 0);

const $$Astro$2 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>
	${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}
	<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}>
</picture>`;
}, "C:/Trabalho/estudo/dinos/inter/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[{"protocol":"https"}]};
					new URL("file:///C:/Trabalho/estudo/dinos/inter/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead()}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Trabalho/estudo/dinos/inter/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  let res = await fetch("https://33giga.com.br//wp-json/wp/v2/posts");
  let posts = await res.json();
  return posts.map((p) => ({
    params: { slug: p.slug },
    props: { post: p }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let res = await fetch(`https://33giga.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  let [post] = await res.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="bebas">

        <!-- loading="lazy" -->
            ${post._embedded["wp:featuredmedia"] && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "alt": post.title.rendered, "densities": [1.5, 2], "src": post._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url, "width": post._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.width, "height": post._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.height })}`}
           
		    <h2> ${post.title.rendered} </h2>
             
           ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(post.content.rendered)}` })}
	</main>
` })}`;
}, "C:/Trabalho/estudo/dinos/inter/src/pages/[slug].astro", void 0);

const $$file = "C:/Trabalho/estudo/dinos/inter/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _slug_ as _, $$Image as a, imageConfig as i };
