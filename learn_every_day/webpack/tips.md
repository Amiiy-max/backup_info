1. `dist` for `distribution`
2.  [webpack](https://webpack.js.org/guides/getting-started/) will not alter any code other than import and export statements. If you are using other ES2015 features, make sure to use a transpiler such as Babel or Bublé via webpack's loader system.
3. Custom parameters can be passed to webpack by adding two dashes between the npm run build command and your parameters, e.g. `npm run build -- --colors`.
