//This should be elsewhere, but loads in our manifest, and converts the file list to a list of files.
var frontendConfig = require('./frontend.json')
var concatFiles = frontendConfig.coffee.map(function(f) { return "tmp/"+f+".js"});

module.exports = function(grunt) { 
  grunt.loadTasks('./tasks'); //load my local tasks
  grunt.loadNpmTasks('grunt-clean'); //load an npm task

  grunt.initConfig({
    //Empty the 'tmp' directory on each run'
    clean: {
      folder: 'tmp'
    },
    //Compile coffeescript into tmp, maintaining directory structure, but stripping /coffee from the start
    mycoffee: {
      all: {
        srcRelTo: 'coffee',
        src: ['coffee/**/*.coffee'],
        dest: 'tmp',
      }
    },
    //Precompile eco templates into tmp, maintaining directory structure, but stripping /coffee from the start
    ecojst: {
      all: {
        srcRelTo: 'coffee',
        src: ['coffee/**/*.jst.eco'],
        dest: 'tmp'
      }
    },
    //Copy javascript files into tmp, maintaining directory structure, but stripping /coffee from the start
    copy: {
      all: {
        srcRelTo: 'coffee',
        src: ['coffee/**/*.js'],
        dest: 'tmp'
      }
    },
    //Using our manifest file config, concat the list of files into one
    concat: {
      frontend: {
        src: concatFiles,
        dest: frontendConfig.dest,
        separator: ';'
      }
    },
    //Using our manifest file config, minify, the manifest file
    min: {
      release: {
        src: [frontendConfig.dest],
        dest: frontendConfig.destMin
      }
    },
    //Fingerprint the minified file
    fingerprint: {
      release: {
        files: [frontendConfig.destMin]
      }
    },
    //Recompile debuggable file on change
    watch: {
      coffee: {
        files: ['coffee/**/*.coffee', 'frontend.json'],
        tasks: 'debug'
      },
    }
  });

  // Create a debuggable file
  grunt.registerTask('debug', 'mycoffee copy ecojst concat');
  // Create a releaseable file
  grunt.registerTask('release', 'debug min fingerprint');

  // Make the default `grunt` command run debug.
  grunt.registerTask('default', 'debug');
};
