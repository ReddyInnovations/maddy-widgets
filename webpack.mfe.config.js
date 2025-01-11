/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
    mfePlugin: new ModuleFederationPlugin({
        name: 'maddy_widget',
        library: { type: 'global', name: 'maddy_widget' },
        filename: 'remoteEntry.js',
        exposes: {
            './Header': './src/components/Header',
            './Footer': './src/components/Footer',
            './WhatsAppWidget': './src/components/WhatsAppWidget',
            './Profile': './src/components/Profile',
            './CardSection': './src/components/Card/CardSection',
            './Card': './src/components/Card/Card',
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
