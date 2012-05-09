module.exports = function(grunt) {
  var path = require('path');
  grunt.registerMultiTask('copy', 'Copy files', function() {
    var dest = this.file.dest;
    var srcRelTo = this.data.srcRelTo;

    grunt.file.expandFiles(this.file.src).forEach(function(filepath) {
      var outDir = path.dirname(filepath);
      var outDir = outDir.replace(srcRelTo, '');
      var outFile = path.basename(filepath)
      
      grunt.file.copy(filepath, path.join(dest, outDir, outFile));
    });

    if (grunt.task.current.errorCount) {
      return false;
    }
  });

};
