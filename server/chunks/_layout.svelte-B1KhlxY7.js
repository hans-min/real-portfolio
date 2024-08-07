import { c as create_ssr_component, v as validate_component, a as subscribe, e as each, b as escape, d as add_attribute } from './ssr-aKTuZdL5.js';
import { a as addMessages, i as init, g as getLocaleFromNavigator, $ as $format, b as $locale, c as $locales } from './runtime-CTbceabp.js';
import { b as base } from './paths-fSTDu4pU.js';
import './index-nlzFTdOZ.js';

const css$3 = {
  code: "label.svelte-jxzaql{margin-top:8px}select.svelte-jxzaql{min-width:50px}",
  map: '{"version":3,"file":"LocaleSelector.svelte","sources":["LocaleSelector.svelte"],"sourcesContent":["<script>\\r\\n  import { locale, locales } from \\"svelte-i18n\\";\\r\\n<\/script>\\r\\n\\r\\n<label for=\\"language\\">\\r\\n  <select bind:value={$locale} id=\\"language\\" name=\\"language\\" aria-label=\\"language\\">\\r\\n    {#each $locales as locale}\\r\\n      <option value={locale}>{locale}</option>\\r\\n    {/each}\\r\\n  </select>\\r\\n</label>\\r\\n\\r\\n<style>\\r\\n  label {\\r\\n    margin-top: 8px;\\r\\n  }\\r\\n  select {\\r\\n    min-width: 50px;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAaE,mBAAM,CACJ,UAAU,CAAE,GACd,CACA,oBAAO,CACL,SAAS,CAAE,IACb"}'
};
const LocaleSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_locale;
  let $locales$1, $$unsubscribe_locales;
  $$unsubscribe_locale = subscribe($locale, (value) => value);
  $$unsubscribe_locales = subscribe($locales, (value) => $locales$1 = value);
  $$result.css.add(css$3);
  $$unsubscribe_locale();
  $$unsubscribe_locales();
  return `<label for="language" class="svelte-jxzaql"><select id="language" name="language" aria-label="language" class="svelte-jxzaql">${each($locales$1, (locale) => {
    return `<option${add_attribute("value", locale, 0)}>${escape(locale)}</option>`;
  })}</select> </label>`;
});
const css$2 = {
  code: "header.sticky.svelte-1340v2b{position:-webkit-sticky;position:sticky;z-index:1101;top:0}header.glass.svelte-1340v2b{backdrop-filter:blur(20px)}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { _ } from \\"svelte-i18n\\";\\nimport { base } from \\"$app/paths\\";\\nimport LocaleSelector from \\"$lib/components/LocaleSelector.svelte\\";\\nexport let items = [\\"about\\", \\"skills\\", \\"projects\\", \\"contact\\"];\\nlet activeItem = items[0];\\nfunction setActiveItem(name) {\\n  activeItem = name;\\n}\\n<\/script>\\r\\n\\r\\n<header class=\\"sticky glass\\">\\r\\n  <nav class=\\"nav\\">\\r\\n    <div class=\\"nav-center\\">\\r\\n      <div class=\\"tabs\\">    \\r\\n        {#each items as item}\\r\\n          <a\\r\\n            href=\\"{base}#{$_(`sections.${item}`)}\\"\\r\\n            class={item === activeItem ? \\"active\\" : \\"\\"}\\r\\n            on:click={() => setActiveItem(item)}\\r\\n          >\\r\\n            {$_(`sections.${item}`)}\\r\\n          </a>\\r\\n        {/each}\\r\\n      </div>\\r\\n    </div>\\r\\n    <div class=\\"nav-right\\">\\r\\n        <LocaleSelector/>\\r\\n    </div>\\r\\n  </nav>\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n  header.sticky {\\r\\n    position: -webkit-sticky;\\r\\n    position: sticky;\\r\\n    z-index: 1101;\\r\\n    top: 0;\\r\\n  }\\r\\n\\r\\n  header.glass {\\r\\n    backdrop-filter: blur(20px);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgCE,MAAM,sBAAQ,CACZ,QAAQ,CAAE,cAAc,CACxB,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,CACP,CAEA,MAAM,qBAAO,CACX,eAAe,CAAE,KAAK,IAAI,CAC5B"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { items = ["about", "skills", "projects", "contact"] } = $$props;
  let activeItem = items[0];
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css$2);
  $$unsubscribe__();
  return `<header class="sticky glass svelte-1340v2b"><nav class="nav"><div class="nav-center"><div class="tabs">${each(items, (item) => {
    return `<a href="${escape(base, true) + "#" + escape($_(`sections.${item}`), true)}"${add_attribute("class", item === activeItem ? "active" : "", 0)}>${escape($_(`sections.${item}`))} </a>`;
  })}</div></div> <div class="nav-right">${validate_component(LocaleSelector, "LocaleSelector").$$render($$result, {}, {}, {})}</div></nav> </header>`;
});
const css$1 = {
  code: ".fade-out.svelte-1e1oprs{background:linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.02));-webkit-background-clip:text;background-clip:text;color:transparent}footer.svelte-1e1oprs{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\r\\n  import { base } from \\"$app/paths\\";\\r\\n<\/script>\\r\\n\\r\\n<footer>\\r\\n  <p>Socia<span class=\\"fade-out\\">lly arkward</span></p>\\r\\n  <div>\\r\\n      <a href=\\"https://www.linkedin.com/in/hanjismin/\\">\\r\\n        <img\\r\\n          src=\\"https://icongr.am/devicon/linkedin-original.svg?size=24\\"\\r\\n          alt=\\"linkedIn\\"\\r\\n        />\\r\\n      </a>\\r\\n      &nbsp;\\r\\n      <a href=\\"https://github.com/hans-min\\">\\r\\n        <img src=\\"https://icongr.am/devicon/github-original.svg?size=24\\" alt=\\"github\\" />\\r\\n      </a>\\r\\n    </div>\\r\\n  <a href=\\"{base}/privacyPolicy\\">Privacy Policy</a>\\r\\n  <a href=\\"{base}/legalNotice\\">Legal Notice</a>\\r\\n  <p> © 2024 Nguyen Minh Hanh. All rights reserved.</p>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n.fade-out {\\r\\n    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.02));\\r\\n    -webkit-background-clip: text;\\r\\n    background-clip: text;\\r\\n    color: transparent;\\r\\n  }\\r\\n  footer {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    padding: 12px;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwBA,wBAAU,CACN,UAAU,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAC9E,uBAAuB,CAAE,IAAI,CAC7B,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,WACT,CACA,qBAAO,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IACX"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-1e1oprs" data-svelte-h="svelte-1apfvtl"><p>Socia<span class="fade-out svelte-1e1oprs">lly arkward</span></p> <div><a href="https://www.linkedin.com/in/hanjismin/"><img src="https://icongr.am/devicon/linkedin-original.svg?size=24" alt="linkedIn"></a>
       
      <a href="https://github.com/hans-min"><img src="https://icongr.am/devicon/github-original.svg?size=24" alt="github"></a></div> <a href="${escape(base, true) + "/privacyPolicy"}">Privacy Policy</a> <a href="${escape(base, true) + "/legalNotice"}">Legal Notice</a> <p>© 2024 Nguyen Minh Hanh. All rights reserved.</p> </footer>`;
});
const about$1 = "Hi, I'm Minh Hanh and I love learning and trying new things. I'm currently working as a test automation engineer at EPEX SPOT. I live in Paris, and I was born in Vietnam. I moved to Lyon, France in 2019 to study at the engineering school INSA Lyon. In 2021, I reoriented to CNAM ENJMIN to study game development and joined Akensys as an apprentice mobile developer for 2 years. Then I did my Master at CAWEB, University of Strasbourg and have been working at EPEX SPOT since.";
const landing$1 = {
  hi: "Hi, I'm",
  jobTitle: "Game Developer, Software Engineer, Test Automation Engineer."
};
const sections$1 = {
  about: "About",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact"
};
const languages$1 = "Languages";
const framework$1 = "Framework/Tools";
const projectsDescription$1 = {
  squiddy: "Create a Bluetooth Low Energy library in Swift to control the smart house alarms SQUIDD HOME to facilitate the development of the iOS application Squiddy",
  crashedWorld: "Basically 2.5D Minecraft. I was in charge of the procedural generation of the 3D world.",
  myoty: "Developed MyOty, an mobile application used to detect (map view), read and visualize data from Bluetooth sensors and equipments (Flutter). Also work with the Flutter platform channel to integrate third-party Swift libraries into the app.",
  poule: "Created a 1:5 model of a fully functional, movable smart chicken coop. The coop was equiped with a solar panel, an automatic feeding sytem, a water dispenser, ventilation system and a mobile application for the farmers."
};
const contact$1 = {
  email: "Email",
  name: "Name",
  reason: "Reason",
  send: "Send"
};
const en = {
  about: about$1,
  landing: landing$1,
  sections: sections$1,
  languages: languages$1,
  framework: framework$1,
  projectsDescription: projectsDescription$1,
  contact: contact$1
};
const about = "Salut, je suis Minh Hanh et j'adore apprendre et essayer de nouvelles choses. Je travaille actuellement en tant qu'ingénieur en automatisation des tests chez EPEX SPOT. J'habite à Paris et je suis née au Vietnam. Je suis arrivée à Lyon, France en 2019 pour étudier à l'école d'ingénieurs INSA Lyon. En 2021, je me suis réorientée vers le CNAM ENJMIN pour étudier le développement de jeux et j'ai rejoint Akensys en tant que développeuse mobile en apprentissage pendant 2 ans. Ensuite, j'ai fait mon Master à CAWEB, Université de Strasbourg et je travaille chez EPEX SPOT depuis.";
const landing = {
  jobTitle: "Développeuse de Jeux, Ingénieur Logiciel, Ingénieur en Automatisation des tests.",
  hi: "Salut, je suis"
};
const sections = {
  about: "Propos",
  projects: "Projets",
  skills: "Compétences",
  contact: "Contact"
};
const languages = "Langues";
const framework = "Framework/Outils";
const projectsDescription = {
  squiddy: "Créer une bibliothèque Bluetooth Low Energy en Swift pour contrôler les détecteurs de présence intelligentes SQUIDD HOME afin de faciliter le développement de l'application iOS Squiddy",
  crashedWorld: "En gros, c'est Minecraft en 2.5D. J'étais en charge de la génération procédurale du monde 3D.",
  myoty: "Développement de MyOty, une application mobile utilisée pour détecter (avec vue cartographique), lire et visualiser les données des capteurs et équipements Bluetooth (Flutter). Travaillez également avec le platform channel de Flutter pour intégrer des bibliothèques Swift tierces dans l'application.",
  poule: "Création d'un modèle 1:5 d'un poulailler fonctionnel, intelligent et mobile. Le poulailler était équipé d'un panneau solaire, d'un système d'alimentation et d'un distributeur d'eau automatique, d'un système de ventilation et d'une application mobile pour les agriculteurs."
};
const contact = {
  email: "Émail",
  name: "Nom",
  reason: "Raison",
  send: "Envoyer"
};
const fr = {
  about,
  landing,
  sections,
  languages,
  framework,
  projectsDescription,
  contact
};
addMessages("en", en);
addMessages("fr", fr);
init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator()
});
const css = {
  code: "div.svelte-19c1oe9{flex:1;display:flex;flex-direction:column;margin:1rem}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n  import Header from \\"./Header.svelte\\";\\r\\n  import Footer from \\"./Footer.svelte\\";\\r\\n  import \\"chota\\";\\r\\n  import \\"./styles.css\\";\\r\\n  import { onMount } from \\"svelte\\";\\r\\n  import \\"$lib/locale/i18n\\";\\r\\n\\r\\n\\r\\n  onMount(() => {\\r\\n    document.body.style.opacity = \\"1\\";\\r\\n    // https://www.nucleiotechnologies.com/fade-in-animation-when-scroll-in-your-website/\\r\\n    function reveal() {\\r\\n      var reveals = document.querySelectorAll(\\".fadeIn\\");\\r\\n\\r\\n      for (var i = 0; i < reveals.length; i++) {\\r\\n        var windowHeight = window.innerHeight;\\r\\n        var elementTop = reveals[i].getBoundingClientRect().top;\\r\\n        var elementVisible = 128;\\r\\n\\r\\n        if (elementTop < windowHeight - elementVisible) {\\r\\n          reveals[i].classList.add(\\"onScreen\\");\\r\\n        }\\r\\n      }\\r\\n    }\\r\\n\\r\\n    window.addEventListener(\\"scroll\\", reveal);\\r\\n  });\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<div>\\r\\n  <Header />\\r\\n  <main class=\\"container\\">\\r\\n    <div class=\\"is-center is-horizontal-align\\">\\r\\n      <slot />\\r\\n    </div>\\r\\n  </main>\\r\\n  <Footer />\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  div {\\r\\n    flex: 1;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin: 1rem;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0CE,kBAAI,CACF,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IACV"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-19c1oe9">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="container"><div class="is-center is-horizontal-align svelte-19c1oe9">${slots.default ? slots.default({}) : ``}</div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-B1KhlxY7.js.map
