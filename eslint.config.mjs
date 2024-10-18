import config from "eslint-config-standard";


export default [
  ...[
    {
      "extends": ["next/core-web-vitals", "prettier"]
    }
  ].concat(config),
];