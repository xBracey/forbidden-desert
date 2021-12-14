function getConfig(env) {
  const loaderConfig = {
    parseOnLoad: false,
    tlmSiblingOfDojo: true,
    has: {},
    isDebug: false,
    async: false,
    useDeferredInstrumentation: true,
    production: env.production,
    packages: [
      { name: "app", location: env.dojoRoot + "/app", main: "app" },
      {
        name: "dojo",
        location: env.dojoRoot + "/dojo",
        lib: ".",
      },
      {
        name: "ebg/core/gamegui",
      },
    ],
  };

  return loaderConfig;
}

if (typeof module !== "undefined" && module) {
  module.exports = getConfig;
} else {
  getConfig({ dojoRoot: "/" });
}
