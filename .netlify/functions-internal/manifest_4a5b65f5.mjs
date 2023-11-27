import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_ef7b3d63.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html{font-family:system-ui,sans-serif;background-size:224px}@font-face{font-family:Bebas;src:url(/fonts/BebasNeue-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}body,html{font-family:Bebas,serif}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts/word","type":"page","pattern":"^\\/posts\\/word\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"word","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/word.md","pathname":"/posts/word","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html{font-family:system-ui,sans-serif;background-size:224px}@font-face{font-family:Bebas;src:url(/fonts/BebasNeue-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}body,html{font-family:Bebas,serif}\n"}],"routeData":{"route":"/tags/[tag]","type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html{font-family:system-ui,sans-serif;background-size:224px}@font-face{font-family:Bebas;src:url(/fonts/BebasNeue-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}body,html{font-family:Bebas,serif}\n"}],"routeData":{"route":"/[slug]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"componentMetadata":[["C:/Trabalho/estudo/dinos/inter/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Trabalho/estudo/dinos/inter/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Trabalho/estudo/dinos/inter/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/tags/[tag].astro":"chunks/pages/_tag__a3052731.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_433ce1b4.mjs","/src/pages/index.astro":"chunks/pages/index_5375992e.mjs","/src/pages/posts/word.md":"chunks/pages/word_7ec2c233.mjs","\u0000@astrojs-manifest":"manifest_4a5b65f5.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_1347e2c3.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_bf4a85dd.mjs","\u0000@astro-page:src/pages/posts/word@_@md":"chunks/word_dab2b537.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__6f438a02.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"chunks/_slug__a0663617.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/teste.786dc75b.jpg","/_astro/logoEJA.1d8ec814.png","/favicon.svg","/fonts/BebasNeue-Regular.ttf"]});

export { manifest };
