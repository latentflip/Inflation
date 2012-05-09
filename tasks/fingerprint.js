module.exports = function(grunt) {
  var path = require('path'),
      crypto = require('crypto'),
      fs = require('fs');

  grunt.registerMultiTask('fingerprint', 'Fingerprint Files', function() {
    
    grunt.file.expandFiles(this.data.files).forEach(function(filepath) {
      var hash = crypto.createHash('md5').update(grunt.file.read(filepath)).digest("hex");

      var outpath = path.dirname(filepath);
      var filename = path.basename(filepath);

      filename = filename.replace('.', '-'+hash+'.')

      fs.renameSync(filepath, path.join(outpath, filename));
    });
  });

};
