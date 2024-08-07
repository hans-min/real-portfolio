import { c as create_ssr_component, a as subscribe, v as validate_component, b as escape, d as add_attribute } from './ssr-aKTuZdL5.js';
import { $ as $format } from './runtime-CTbceabp.js';
import './index-nlzFTdOZ.js';

const css$3 = {
  code: "textarea.svelte-1h29drl{min-height:100px;min-width:200px;width:100%;margin-bottom:20px}",
  map: `{"version":3,"file":"ContactForm.svelte","sources":["ContactForm.svelte"],"sourcesContent":["<script>\\r\\n  import { _ } from \\"svelte-i18n\\";\\r\\n<\/script>\\r\\n\\r\\n<form method=\\"post\\">\\r\\n  <div class=\\"row\\">\\r\\n    <label for=\\"name\\" class=\\"col\\">\\r\\n      <span>{$_(\\"contact.name\\")}</span>\\r\\n      <input type=\\"text\\" id=\\"name\\" name=\\"name\\" aria-label=\\"name\\" placeholder=\\"Name\\" />\\r\\n    </label>\\r\\n\\r\\n    <label for=\\"email\\" class=\\"col\\">\\r\\n      <span>{$_(\\"contact.email\\")}</span>\\r\\n      <input\\r\\n        type=\\"email\\"\\r\\n        id=\\"email\\"\\r\\n        name=\\"email\\"\\r\\n        aria-label=\\"email\\"\\r\\n        placeholder=\\"Email\\"\\r\\n        required\\r\\n      />\\r\\n    </label>\\r\\n\\r\\n    <!-- If we receive data in this field submission will be ignored -->\\r\\n    <input type=\\"text\\" name=\\"honeypot\\" style=\\"display: none;\\">\\r\\n\\r\\n    <label for=\\"reason\\" class=\\"col\\">\\r\\n      <span>{$_(\\"contact.reason\\")}</span>\\r\\n      <select id=\\"reason\\" name=\\"reason\\" aria-label=\\"reason\\">\\r\\n        <option disabled selected value=\\"\\">Contact reason</option>\\r\\n        <option value=\\"hi\\">Say hi!</option>\\r\\n        <option value=\\"collaboration\\">Collaboration request</option>\\r\\n        <option value=\\"speak\\">Speaking opportunity</option>\\r\\n      </select>\\r\\n    </label>\\r\\n  </div>\\r\\n\\r\\n  <label for=\\"message\\">\\r\\n    <span>Message</span>\\r\\n    <textarea\\r\\n      id=\\"message\\"\\r\\n      name=\\"message\\"\\r\\n      aria-label=\\"message\\"\\r\\n      placeholder=\\"Hey! I'd love to talk about...\\"\\r\\n      required\\r\\n    />\\r\\n  </label>\\r\\n\\r\\n  <button type=\\"submit\\">{$_(\\"contact.send\\")}</button>\\r\\n  </form>\\r\\n\\r\\n<style>\\r\\n  textarea {\\r\\n    min-height: 100px;\\r\\n    min-width: 200px;\\r\\n    width: 100%;\\r\\n    margin-bottom: 20px;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoDE,uBAAS,CACP,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IACjB"}`
};
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css$3);
  $$unsubscribe__();
  return `<form method="post"><div class="row"><label for="name" class="col"><span>${escape($_("contact.name"))}</span> <input type="text" id="name" name="name" aria-label="name" placeholder="Name"></label> <label for="email" class="col"><span>${escape($_("contact.email"))}</span> <input type="email" id="email" name="email" aria-label="email" placeholder="Email" required></label>  <input type="text" name="honeypot" style="display: none;"> <label for="reason" class="col"><span>${escape($_("contact.reason"))}</span> <select id="reason" name="reason" aria-label="reason"><option disabled selected value="" data-svelte-h="svelte-mr29hx">Contact reason</option><option value="hi" data-svelte-h="svelte-8dhiwg">Say hi!</option><option value="collaboration" data-svelte-h="svelte-19cqhdj">Collaboration request</option><option value="speak" data-svelte-h="svelte-1ek1nep">Speaking opportunity</option></select></label></div> <label for="message" data-svelte-h="svelte-edvzug"><span>Message</span> <textarea id="message" name="message" aria-label="message" placeholder="Hey! I'd love to talk about..." required class="svelte-1h29drl"></textarea></label> <button type="submit">${escape($_("contact.send"))}</button> </form>`;
});
const css$2 = {
  code: ".hero.svelte-1e2ffzq{display:flex;flex-direction:column}.frontSplash.svelte-1e2ffzq{padding:4em;margin:auto}.nameTitle.svelte-1e2ffzq{padding:0;margin:0;font-size:4em}h2.svelte-1e2ffzq{margin:0}",
  map: `{"version":3,"file":"Landing.svelte","sources":["Landing.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { _ } from \\"svelte-i18n\\";\\n<\/script>\\r\\n\\r\\n<div class=\\"hero is-full-screen\\">\\r\\n  <div class=\\"frontSplash\\">\\r\\n    <h2>{$_('landing.hi')}</h2>\\r\\n    <h1 class=\\"nameTitle\\">Minh Hanh</h1>\\r\\n    <h3>{$_('landing.jobTitle')}</h3>\\r\\n    <div>\\r\\n      <a href=\\"https://www.linkedin.com/in/hanjismin/\\">\\r\\n        <img\\r\\n          src=\\"https://icongr.am/devicon/linkedin-original.svg?size=24\\"\\r\\n          alt=\\"linkedIn\\"\\r\\n        />\\r\\n      </a>\\r\\n      &nbsp;\\r\\n      <a href=\\"https://github.com/hans-min\\">\\r\\n        <img src=\\"https://icongr.am/devicon/github-original.svg?size=24\\" alt=\\"github\\" />\\r\\n      </a>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .hero {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n  .frontSplash {\\r\\n    padding: 4em;\\r\\n    margin: auto;\\r\\n  }\\r\\n  .nameTitle {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-size: 4em;\\r\\n  }\\r\\n\\r\\n  h2 {\\r\\n    margin: 0;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwBE,oBAAM,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CACA,2BAAa,CACX,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,IACV,CACA,yBAAW,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,GACb,CAEA,iBAAG,CACD,MAAM,CAAE,CACV"}`
};
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css$2);
  $$unsubscribe__();
  return `<div class="hero is-full-screen svelte-1e2ffzq"><div class="frontSplash svelte-1e2ffzq"><h2 class="svelte-1e2ffzq">${escape($_("landing.hi"))}</h2> <h1 class="nameTitle svelte-1e2ffzq" data-svelte-h="svelte-12nu5vx">Minh Hanh</h1> <h3>${escape($_("landing.jobTitle"))}</h3> <div data-svelte-h="svelte-89vvb7"><a href="https://www.linkedin.com/in/hanjismin/"><img src="https://icongr.am/devicon/linkedin-original.svg?size=24" alt="linkedIn"></a>
       
      <a href="https://github.com/hans-min"><img src="https://icongr.am/devicon/github-original.svg?size=24" alt="github"></a></div></div> </div>`;
});
const crashedWorld = "/real-portfolio/_app/immutable/assets/crashedWorld.BQcYs8UH.png";
const myOty = "/real-portfolio/_app/immutable/assets/myoty.WgPLGbru.webp";
const poule = "/real-portfolio/_app/immutable/assets/poule.BtvgapJG.png";
const squiddy = "/real-portfolio/_app/immutable/assets/squiddy.DlEU-V_i.png";
const css$1 = {
  code: ".addMargin.svelte-k9xncl{margin-bottom:4em}.workplace.svelte-k9xncl{font-size:0.9em}.subTitle.svelte-k9xncl{font-size:1.3em;font-weight:bold}.thumbnail.svelte-k9xncl{width:15em;border-radius:0.5em}@media(max-width: 600px){.thumbnail.svelte-k9xncl{width:100%}}",
  map: '{"version":3,"file":"ProjectCard.svelte","sources":["ProjectCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let projectName;\\nexport let link = null;\\nexport let workplace;\\nexport let imgSrc;\\nexport let altText;\\nexport let descLocaleName;\\nimport { _ } from \\"svelte-i18n\\";\\n<\/script>\\r\\n\\r\\n<div class=\\"row fadeIn addMargin\\">\\r\\n  <div class=\\"col\\">\\r\\n    <a class=\\"subTitle\\" href={link} target=\\"_blank\\">{projectName}</a>\\r\\n    <p class=\\"workplace\\">{workplace}</p>\\r\\n    <p class=\\"projectDescription\\">\\r\\n      {$_(`projectsDescription.${descLocaleName}`)}\\r\\n    </p>\\r\\n  </div>\\r\\n  <a class=\\"col is-center\\" href={link} target=\\"_blank\\">\\r\\n    <img class=\\"thumbnail\\" src={imgSrc} alt={altText} />\\r\\n  </a>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .addMargin {\\r\\n    margin-bottom: 4em;\\r\\n  }\\r\\n  .workplace {\\r\\n    font-size: 0.9em;\\r\\n  }\\r\\n\\r\\n  .subTitle {\\r\\n    font-size: 1.3em;\\r\\n    font-weight: bold;\\r\\n  }\\r\\n\\r\\n  .thumbnail {\\r\\n    width: 15em;\\r\\n    border-radius: 0.5em;\\r\\n  }\\r\\n\\r\\n  @media (max-width: 600px) {\\r\\n    .thumbnail {\\r\\n      width: 100%;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAuBE,wBAAW,CACT,aAAa,CAAE,GACjB,CACA,wBAAW,CACT,SAAS,CAAE,KACb,CAEA,uBAAU,CACR,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IACf,CAEA,wBAAW,CACT,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,KACjB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,wBAAW,CACT,KAAK,CAAE,IACT,CACF"}'
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { projectName } = $$props;
  let { link = null } = $$props;
  let { workplace } = $$props;
  let { imgSrc } = $$props;
  let { altText } = $$props;
  let { descLocaleName } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.workplace === void 0 && $$bindings.workplace && workplace !== void 0)
    $$bindings.workplace(workplace);
  if ($$props.imgSrc === void 0 && $$bindings.imgSrc && imgSrc !== void 0)
    $$bindings.imgSrc(imgSrc);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0)
    $$bindings.altText(altText);
  if ($$props.descLocaleName === void 0 && $$bindings.descLocaleName && descLocaleName !== void 0)
    $$bindings.descLocaleName(descLocaleName);
  $$result.css.add(css$1);
  $$unsubscribe__();
  return `<div class="row fadeIn addMargin svelte-k9xncl"><div class="col"><a class="subTitle svelte-k9xncl"${add_attribute("href", link, 0)} target="_blank">${escape(projectName)}</a> <p class="workplace svelte-k9xncl">${escape(workplace)}</p> <p class="projectDescription">${escape($_(`projectsDescription.${descLocaleName}`))}</p></div> <a class="col is-center"${add_attribute("href", link, 0)} target="_blank"><img class="thumbnail svelte-k9xncl"${add_attribute("src", imgSrc, 0)}${add_attribute("alt", altText, 0)}></a> </div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Squiddy",
      workplace: "Akensys",
      descLocaleName: "squiddy",
      imgSrc: squiddy,
      altText: "Squiddy App",
      link: "http://squiddy.fr/"
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Crashed World",
      workplace: "CNAM ENJMIN",
      descLocaleName: "crashedWorld",
      imgSrc: crashedWorld,
      altText: "Crashed World Game",
      link: "https://hans-min.itch.io/crashed-world"
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "MyOty",
      workplace: "Akensys",
      descLocaleName: "myoty",
      imgSrc: myOty,
      altText: "MyOty App",
      link: "https://play.google.com/store/apps/details?id=net.akensys.myotyv2&hl=en&gl=US"
    },
    {},
    {}
  )} ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Ca roule ma poule",
      workplace: "INSA Lyon",
      descLocaleName: "poule",
      imgSrc: poule,
      altText: "movable chicken coop"
    },
    {},
    {}
  )}</div>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sectionName } = $$props;
  if ($$props.sectionName === void 0 && $$bindings.sectionName && sectionName !== void 0)
    $$bindings.sectionName(sectionName);
  return `<section${add_attribute("id", sectionName, 0)}><h2 class="is-center">${escape(sectionName)}</h2> ${slots.default ? slots.default({}) : ``}</section>`;
});
const css = {
  code: "li.svelte-1o9htb{margin:10px}ul.svelte-1o9htb{list-style-type:none;padding:0;margin:0}h3.svelte-1o9htb{margin:0 10px}",
  map: `{"version":3,"file":"Skills.svelte","sources":["Skills.svelte"],"sourcesContent":["  <script>\\r\\n  import { _ } from 'svelte-i18n';\\r\\n\\r\\n  <\/script>\\r\\n  <div class=\\"fadeIn\\">\\r\\n    <h3>{$_('languages')}</h3>\\r\\n    <ul class=\\"row\\">\\r\\n      <li class=\\"button primary\\">Swift</li>\\r\\n      <li class=\\"button primary\\">Dart</li>\\r\\n      <li class=\\"button primary\\">Python</li>\\r\\n      <li class=\\"button primary\\">Javascript</li>\\r\\n      <li class=\\"button primary\\">HTML/CSS</li>\\r\\n    </ul>\\r\\n    <h3>{$_('framework')}</h3>\\r\\n    <ul class=\\"row\\">\\r\\n      <li class=\\"button primary\\">Godot</li>\\r\\n      <li class=\\"button primary\\">Blender</li>\\r\\n      <li class=\\"button primary\\">Swift</li>\\r\\n      <li class=\\"button primary\\">Flutter</li>\\r\\n      <li class=\\"button primary\\">Robot Framework</li>\\r\\n      <li class=\\"button primary\\">Git</li>\\r\\n      <li class=\\"button primary\\">Svelte</li>\\r\\n    </ul>\\r\\n  </div>\\r\\n\\r\\n<style>\\r\\n  li {\\r\\n    margin: 10px;\\r\\n  }\\r\\n\\r\\n  ul {\\r\\n    list-style-type: none;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  h3 {\\r\\n    margin: 0 10px;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0BE,gBAAG,CACD,MAAM,CAAE,IACV,CAEA,gBAAG,CACD,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACV,CAEA,gBAAG,CACD,MAAM,CAAE,CAAC,CAAC,IACZ"}`
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  $$result.css.add(css);
  $$unsubscribe__();
  return `<div class="fadeIn"><h3 class="svelte-1o9htb">${escape($_("languages"))}</h3> <ul class="row svelte-1o9htb" data-svelte-h="svelte-z4wp9x"><li class="button primary svelte-1o9htb">Swift</li> <li class="button primary svelte-1o9htb">Dart</li> <li class="button primary svelte-1o9htb">Python</li> <li class="button primary svelte-1o9htb">Javascript</li> <li class="button primary svelte-1o9htb">HTML/CSS</li></ul> <h3 class="svelte-1o9htb">${escape($_("framework"))}</h3> <ul class="row svelte-1o9htb" data-svelte-h="svelte-etonuq"><li class="button primary svelte-1o9htb">Godot</li> <li class="button primary svelte-1o9htb">Blender</li> <li class="button primary svelte-1o9htb">Swift</li> <li class="button primary svelte-1o9htb">Flutter</li> <li class="button primary svelte-1o9htb">Robot Framework</li> <li class="button primary svelte-1o9htb">Git</li> <li class="button primary svelte-1o9htb">Svelte</li></ul> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe__();
  return `${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})} ${validate_component(Section, "Section").$$render($$result, { sectionName: $_("sections.about") }, {}, {
    default: () => {
      return `<p class="fadeIn">${escape($_("about"))}</p>`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, { sectionName: $_("sections.skills") }, {}, {
    default: () => {
      return `${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, { sectionName: $_("sections.projects") }, {}, {
    default: () => {
      return `${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Section, "Section").$$render($$result, { sectionName: $_("sections.contact") }, {}, {
    default: () => {
      return `${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})} ${form ? `<p data-svelte-h="svelte-19qd5kt">Form submitted successfully!</p>` : ``}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DQgqEaR6.js.map
