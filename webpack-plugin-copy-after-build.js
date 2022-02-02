const fs = require('fs');

class CopyAfterBuildPlugin {
  constructor (options = []) {
    this.options = options;
  }

  apply (compiler) {
    compiler.hooks.afterEmit.tap(
      'CopyAfterBuildPlugin',
      (stats) => {
        for (let file of this.options) {
          console.log('CopyAfterBuildPlugin: copying ', file.src, 'to', file.dest);
          fs.createReadStream(file.src)
            .on('error', console.error)
            .pipe(fs.createWriteStream(file.dest));
        }
      }
    );
  }
}

module.exports = CopyAfterBuildPlugin;
