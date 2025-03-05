const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "shell",

  remotes: {
    mfeExtrato: "http://localhost:4201/remoteEntry.js",
    mfePagamentos: "http://localhost:4202/remoteEntry.js",
    mfeCredito: "http://localhost:4203/remoteEntry.js",
  },
});
