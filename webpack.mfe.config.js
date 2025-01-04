/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
    mfePlugin: new ModuleFederationPlugin({
        name: 'maddy-widget',
        filename: 'remoteEntry.js',
        exposes: {
            './Header': './src/components/Header',
            './Footer': './src/components/Footer',
            './WhatsAppWidget': './src/components/WhatsAppWidget',
        },
        remotes: {},
        shared: {
            ...deps,
            react: { singleton: true, requiredVersion: deps.react },
            'react-dom': {
                singleton: true,
                requiredVersion: deps['react-dom'],
            },
            'styled-components': {
                singleton: true,
                requiredVersion: deps['styled-components'],
            },
        },
    }),
};
