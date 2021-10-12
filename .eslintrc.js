module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    // 使用aribnb-base的eslint规则,优先级比rules中低
    // https://github.com/prettier/eslint-config-prettier
    // 将prettier加在最后-Turns off all rules that are unnecessary or might conflict with Prettier.
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'prettier'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true
        }
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.js', '.tsx', '.jsx', 'json']
            }
        },
        'import/extensions': ['.ts', '.js', '.tsx', '.jsx', 'json'],
        'import/newline-after-import': 'off',
        react: {
            version: 'detect'
        }
    },
    // 0 = off, 1 = warn, 2 = error
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        // 最后一行的逗号
        'comma-dangle': ['error', 'never'],
        'no-unused-vars': [
            'off',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
        ],
        'linebreak-style': ['off', 'windows'],
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'off',
            'ignorePackages',
            {
                ts: 'never',
                js: 'never',
                mjs: 'never',
                jsx: 'never'
            }
        ],
        'import/no-unresolved': ['off', { ignore: ['@'] }],
        'import/no-extraneous-dependencies': 'off',
        'max-len': [
            'error',
            100,
            2,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        'class-methods-use-this': ['off'],
        'no-tabs': 'off',
        'no-use-before-define': [
            'off',
            { functions: true, classes: true, variables: true }
        ],
        'no-useless-return': 'off',
        'no-empty': 'off',
        'max-classes-per-file': ['off', 5],
        'no-console': 'off',
        'no-shadow': 'off',
        'no-new': 'warn',
        'no-empty-function': 'off',
        'no-underscore-dangle': 'off',
        'no-undef': 'off',
        camelcase: 'off',
        'no-plusplus': 'off',
        'no-multi-assign': 'off',
        'no-param-reassign': 'off',
        'func-names': 'off'
    }
};
