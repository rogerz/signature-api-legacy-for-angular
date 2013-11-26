module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      component: {
        files: [
          'component.json',
          'lib/*',
          'Gruntfile.js'
        ],
        tasks: ['componentbuild']
      },
      karma: {
        files: [
          'build/**/*',
          'test/**/*'
        ],
        tasks: ['karma']
      }
    },
    componentbuild: {
      options: {
        verbose: true,
        dev: true,
        sourceUrls: true
      },
      component: {
        src: '.'
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('build', [
    'componentbuild'
  ]);

  grunt.registerTask('test', [
    'karma'
  ]);

  grunt.registerTask('default', [
    'build',
    'test'
  ]);
};
