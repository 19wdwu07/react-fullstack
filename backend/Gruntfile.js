module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'index.js'],
      options: {
        esversion: 6,
        sub: true,
        globals: {
          jQuery: true

        }
      }
    },
    watch: {
      files: ['index.js','Gruntfile.js'],
      tasks: ['jshint']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');



  grunt.registerTask('default', ['watch']);


};
