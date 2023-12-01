# webpack-plugin-copy-after-build
Just one more plugin to copy files after webpack build.

### Usage
Copy the file and place it wherever you want, for example in the `plugins` folder.

Import it in the `webpack.config.js`:
```Javascript
const CopyAfterBuildPlugin = require('./plugins/webpack-plugin-copy-after-build');
```
Put files you want to copy as array in plugin initialization section:

```Javascript
...
  plugins: [
    new CopyAfterBuildPlugin([
      { src: './dist/bundle.js', dest: './public/js/bundle.js'},
      { src: './dist/bundle.js.map', dest: './public/js/bundle.js.map'}
    ])
  ]
...  
```
Enjoy!
