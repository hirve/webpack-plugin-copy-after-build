# webpack-plugin-copy-after-build
Just one more plugin to copy files after webpack build.

### Usage
Just copy the file and place it wherever you want, for example in the same folder with webpack.config.js

Import it:
```Javascript
const CopyAfterBuild = require('./webpack-plugin-copy-after-build');
```
Put files you want to copy as array in plugin initialization section:

```Javascript
...
  plugins: [
    new CopyAfterBuild([
      { src: './dist/bundle.js', dest: './public/js/bundle.js'},
      { src: './dist/bundle.js.map', dest: './public/js/bundle.js.map'}
    ])
  ]
...  
```
Enjoy!
