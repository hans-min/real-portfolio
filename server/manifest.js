const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "real-portfolio/_app",
	assets: new Set([".nojekyll","logo.svg","sitemap.xml"]),
	mimeTypes: {".svg":"image/svg+xml",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BhoMhb-u.js","app":"_app/immutable/entry/app.7p5TR53e.js","imports":["_app/immutable/entry/start.BhoMhb-u.js","_app/immutable/chunks/entry.Dcw3SerC.js","_app/immutable/chunks/scheduler.CCC3QiUK.js","_app/immutable/chunks/index.C0NedUpj.js","_app/immutable/chunks/paths.QIvkIBX8.js","_app/immutable/entry/app.7p5TR53e.js","_app/immutable/chunks/scheduler.CCC3QiUK.js","_app/immutable/chunks/index.C8sq0L4w.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DLwdMcUR.js')),
			__memo(() => import('./chunks/1-D_80qmHX.js')),
			__memo(() => import('./chunks/2-C3lvoO9K.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/real-portfolio/legalNotice","/real-portfolio/privacyPolicy"]);

const base = "/real-portfolio";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
