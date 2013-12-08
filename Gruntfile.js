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
      example: {
        src: '.',
        dest: 'example'
      },
      test: {
        src: '.',
        dest: 'test'
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'componentbuild:test',
    'karma'
  ]);

  grunt.registerTask('default', [
    'test'
  ]);
};
