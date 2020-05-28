module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    // process js with `babel-jest`
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper: {
    // So that you can use @/ as root path when importing from src/
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
