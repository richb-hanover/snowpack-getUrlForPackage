// // Snowpack Configuration File
// // See all supported options: https://www.snowpack.dev/reference/configuration

// /** @type {import("snowpack").SnowpackUserConfig } */
// module.exports = {
//   mount: {
//     /* ... */
//   },
//   plugins: [
//     /* ... */
//   ],
//   packageOptions: {
//     /* ... */
//   },
//   devOptions: {
//     /* ... */
//   },
//   buildOptions: {
//     /* ... */
//   },
// };

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // public: { url: "/", static: true },
    // src: { url: "/dist" },
  },
  plugins: [
    // ["@snowpack/plugin-typescript"],
    // ["@snowpack/plugin-webpack"],
    // ["./inject-version.js", {}],
  ],
  // install: [
  //   /* ... */
  // ],
  installpackageOptions: {
    // installTypes: true,
  },
  packageOptions: {
    source: "remote",
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  // proxy: {
  //   /* ... */
  // },
  alias: {
    /* ... */
  },
};
