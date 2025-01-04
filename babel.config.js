module.exports = {
    presets: [
        '@babel/preset-env',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],        
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            'babel-plugin-styled-components',
            {
                ssr: true,
                displayName: true,
                preprocess: false,
            },
        ],
        ...(process.env.NODE_ENV !== 'production' ? ['react-refresh/babel'] : []),
    ],
    env: {
        test: {
            plugins: [
                '@babel/plugin-transform-modules-commonjs',
                '@babel/plugin-transform-runtime',
            ],
        },
    },
};
