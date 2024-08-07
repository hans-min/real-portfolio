const STATICFORM_API_KEY = "ae05d516-c6c3-44fa-9b1e-634e11974611";
const prerender = false;
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    formData.append("accessKey", STATICFORM_API_KEY);
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });
    const response = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: data
    }).then((res) => res.json());
    return response;
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  prerender: prerender
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DQgqEaR6.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.CI1xzd6f.js","_app/immutable/chunks/scheduler.CCC3QiUK.js","_app/immutable/chunks/index.C8sq0L4w.js","_app/immutable/chunks/runtime.DB8UAlX_.js","_app/immutable/chunks/index.C0NedUpj.js"];
const stylesheets = ["_app/immutable/assets/2.LJK52Msh.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-C3lvoO9K.js.map
