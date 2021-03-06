module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // UGLIFY TASK
    uglify: {
      task1: {
         options: {
            preserveComments: 'some',
            report: 'min'            
         },         
         files: {
             'dist/jquery.slider.min.js': ['src/js/jshashtable-2.1_src.js', 'src/js/jquery.numberformatter-1.2.3.js', 'src/js/tmpl.js', 'src/js/jquery.dependClass-0.1.js', 'src/js/draggable-0.1.js', 'src/js/draggable-0.1.js', 'src/js/jquery.slider.js']
         }
       }
     },
     // MINIFY CSS
    cssmin: {
      options: {
        keepSpecialComments: false        
      },
      compress: {
        files: {          
          'dist/jquery.slider.min.css': ['src/css/jslider.blue.css','src/css/jslider.css','src/css/jslider.plastic.css','src/css/jslider.round.css','src/css/jslider.round.plastic.css']
        }
      }
  }
});

  // LOAD PLUGINS  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-karma');

  // TASK REGISTER
  grunt.registerTask('default', ['cssmin', 'uglify:task1']);
};
