const fs = require('fs');

const CopyAfterBuild = function(options) {
  this.options = options;
}
CopyAfterBuild.prototype.apply = function(compiler) {
  const options = this.options;
  compiler.plugin('after-emit', (compilation, callback) => {
    for (let i in options) {
      console.log('CopyAfterBuild: copying ', options[i].src, 'to', options[i].dest);
      fs.createReadStream(options[i].src).pipe(fs.createWriteStream(options[i].dest));
    }
    callback();
  });
}

module.exports = CopyAfterBuild;
