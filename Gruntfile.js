
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './app/assets/sass',
                    src: ['*.scss'],
                    dest: './app/assets/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            css: {
                files: 'app/assets/sass/*.scss',
                tasks: ['sass']
            }
        },
        ts: {
            // This will run tsc once.  The result of the globs will be passed to tsc with the
            // --outDir switch as 'out/ObjectStyle'.
            // see https://github.com/gruntjs/grunt-docs/blob/master/Configuring-tasks.md#files-object-format
            files: [{
                expand: true,
                cwd: './app/component',
                src: ['*.ts'],
                dest: './app/component',
                ext: '.js'
            }],
            options: {
                fast: 'never'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['sass','watch','ts']);
    grunt.registerTask('ts', ['ts']);

};