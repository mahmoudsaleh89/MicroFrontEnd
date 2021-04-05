const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "planning"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "planning",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './shepherd_modules/planning/src/app/app.component.ts',
        './Module': './shepherd_modules/planning/src/app/pages/pages.module.ts'
      },
      shared: {
        "@angular/core": {singleton: true, strictVersion: true},
        "@angular/common": {singleton: true, strictVersion: true},
        "@angular/router": {singleton: true, strictVersion: true}
      }
    }),
  ],
};
