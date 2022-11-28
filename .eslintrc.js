module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'object-curly-newline' : 'off',
        'comma-dangle': 'off',
        'max-len': 'off',
        'no-alert': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prefer-arrow-callback': 'off',
        'jest/no-deprecated-functions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    extends: ['airbnb-base', 'plugin:react-hooks/recommended'],
    plugins: ['babel', 'import', 'react', 'react-hooks'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
};
