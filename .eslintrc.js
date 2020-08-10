module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/no-non-null-assertion": "off",
        "prettier/prettier": [
            "error",
            {
                printWidth: 120,
                singleQuote: false,
                tabWidth: 4,
                trailingComma: "es5"
            }
        ]
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "env": {
        "browser": true
    },
    "ignorePatterns": [
        "node_modules",
        "dist"
    ]
};
