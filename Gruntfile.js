module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      dev: {
        files: ["index.html", "**/*.css"]
      },
      options: {
        livereload: true
      }
    },
    connect: {
      server: {
        options: {
          base: '.',
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect:server', 'watch:dev']);

};
