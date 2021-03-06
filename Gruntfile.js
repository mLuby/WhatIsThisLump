module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      css: ["client/*.css", "client/*.css.map"]
    },

    jshint: {
      files: ['*.js'],
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
        files: ['app.scss'],
        tasks: ['build'],
      },
    },

    sass: {
      compile: {
        files: {
          'app.css': 'app.scss',
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //requires ruby: $ gem install sass
  grunt.loadNpmTasks('grunt-contrib-sass');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('default', [
    'build',
    'watch'
  ]);

  grunt.registerTask('build', [
    // 'clean',
    // 'jshint',
    'sass'
  ]);

};
