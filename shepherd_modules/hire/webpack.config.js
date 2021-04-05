const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "hire"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hire",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './shepherd_modules/hire/src/app/app.component.ts',
        './Module': './shepherd_modules/hire/src/app/pages/pages.module.ts'
      },
      shared: {
        "@angular/core": {singleton: true, strictVersion: true},
        "@angular/common": {singleton: true, strictVersion: true},
        "@angular/router": {singleton: true, strictVersion: true}
      }
    }),
  ],
};
