const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "my365"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "my365",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './shepherd_modules/my365/src/app/app.component.ts',
        './Module': './shepherd_modules/my365/src/app/pages/pages.module.ts'
      },
      shared: {
        "@angular/core": {singleton: true, strictVersion: true},
        "@angular/common": {singleton: true, strictVersion: true},
        "@angular/router": {singleton: true, strictVersion: true}
      }
    }),
  ],
};
