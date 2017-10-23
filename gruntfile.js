/*
**	gruntfile.js for automating project task.
*	Tasks : Copying, Concatination, Minification, Watch, Less conversion, browser synchronization
*/


"use strict";

//Exporting project level automation configuration
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    "application/JS/**/*.js",
                ],
                dest: "dist/src/js/script.js"
            }
        },
        watch: {
            scripts: {
                files: ['application/JS/**/*.js', 'application/css/*.css'],
                tasks: ['concat','cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
        cssmin: {
            dist: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                files: {
                    'dist/src/css/style.min.css': ['application/css/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.task.registerTask("build", ["watch","cssmin","concat"]);

}
