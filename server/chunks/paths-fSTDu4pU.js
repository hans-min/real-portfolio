let base = "/real-portfolio";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}

export { assets as a, base as b, override as o, reset as r };
//# sourceMappingURL=paths-fSTDu4pU.js.map