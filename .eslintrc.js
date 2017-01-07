module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:destructuring/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "destructuring"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "max-lines": [
      "warn",
      { max: 250 }
    ],
    "arrow-body-style": 1,
    "arrow-spacing": 1,
    "camelcase": 1,
    "import/max-dependencies": ["warn", {"max": 10}],
    "keyword-spacing": 1,
    "max-len": ["error", 80, 2],
    "newline-per-chained-call": 1,
    "no-negated-condition": 1,
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
    "no-underscore-dangle": 1,
    "no-whitespace-before-property": 1,
    "no-var": 1,
    "object-shorthand": 1,
    "padded-blocks": ["warn", "never"],
    "prefer-const": 1,
    "prefer-template": 1,
    "quote-props": ["warn", "as-needed"],
    "space-before-blocks": 1,
    "space-infix-ops": 1,
    "space-in-parens": ["warn", "never"],
    "template-curly-spacing": 1,
    "no-tabs": 2,
    // React
    "react/prefer-es6-class": 1,
    "react/prefer-stateless-function": 1,
    "react/prop-types": 1,
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src"
        ]
      }
    }
  }
};
