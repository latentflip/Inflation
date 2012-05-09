
module.exports = function(grunt) {
  var path = require("path");

  grunt.registerMultiTask("ecojst",
    "Compile eco templates to JST file", function() {

    // Expand files to full paths
    var dest = this.file.dest;
    var srcRelTo = this.data.srcRelTo;

    grunt.file.expandFiles(this.file.src).forEach(function(filepath) {
      var outDir = path.dirname(filepath);
      outDir = outDir.replace(srcRelTo, "");

      grunt.helper("ecojst", filepath, dest, outDir);
    });

    if (grunt.task.current.errorCount) {
      return false;
    }
  });

  grunt.registerHelper("ecojst", function(src, destPath, outDir) {
    var eco = require("eco"),
        js = "";

    var dest = path.join(destPath, outDir,
                         path.basename(src, ".jst.eco") + ".js");
    //try {
      js += "(function() {\n";
      js += "  this.JST || (this.JST = {});\n";
      js += '  this.JST["'+outDir.slice(1)+'/'+path.basename(src, ".jst.eco")+'"] = '
      js += eco.precompile(grunt.file.read(src));
      js += "\n}).call(this);";

      grunt.file.write(dest, js);
    //} catch (e) {
    //  grunt.log.error("Unable to compile your template", e);
    //}
  });
};
