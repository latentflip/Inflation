module.exports = function(grunt) {
  var path = require('path');

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('mycoffee', 'Compile CoffeeScript files', function() {
    var dest = this.file.dest;
    var srcRelTo = this.data.srcRelTo;
    grunt.file.expandFiles(this.file.src).forEach(function(filepath) {
      
      var coffeeDir = path.dirname(filepath);
      var coffeeDir = coffeeDir.replace(srcRelTo, '');

      grunt.helper('mycoffee', filepath, path.join(dest, coffeeDir));
    });

    if (grunt.task.current.errorCount) {
      return false;
    }
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('mycoffee', function(src, destPath) {
    var coffee = require('coffee-script'),
        js = '';

    var dest = path.join(destPath, 
                         path.basename(src, '.coffee') + '.js');

    try {
      js = coffee.compile(grunt.file.read(src), { bare: true });
      console.log(dest);
      grunt.file.write(dest, js);
    } catch (e) {
      grunt.log.error("Unable to compile your coffee", e);
    }
  });

};
