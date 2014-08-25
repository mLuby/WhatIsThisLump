module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['client/**/*.js','server/**/*.js'],
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['spec/**/*.js']
      }
    },

    watch: {
      scripts: {
        files: ['client/**/*', 'server/**/*'],
        tasks: ['jshint'],
      },
    },

  });

  // Don't worry about this one - it just works. You'll see when you run `grunt`.
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('default', [
    'build',
    'watch'
  ]);

  grunt.registerTask('build', [
    'jshint'
  ]);

};
