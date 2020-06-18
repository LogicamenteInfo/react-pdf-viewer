module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",        
        "airbnb-base",
        "plugin:import/react",
        "plugin:import/recommended"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        }
    },
    "parser": "babel-eslint",
    "rules": {
        "class-methods-use-this": "off",
        "no-underscore-dangle": "off",
        "no-plusplus": "off",
        "no-param-reassign": "off",
        "no-console": "off",
        "no-alert": "off"
    }
};