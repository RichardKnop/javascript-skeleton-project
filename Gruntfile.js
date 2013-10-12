"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), // We can reference stuff from config this way src: 'src/<%= pkg.name %>.js'
        exec: {
            bower: {
                command: "./node_modules/bower/bin/bower install"
            },
            lint: {
                command: "node lint.js"
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    keepalive: true
                }
            }
        },
        qunit: {
            unit: 'test.html',
            functional: 'functionalTest.html'
        },
        compass: {
            dist: {
                options: {
                    sassDir: "./css/sass",
                    cssDir: "./css/stylesheets",
                    environment: "production"
                }
            }
        },
        requirejs: {
            app: {
                options: {
                    findNestedDependencies: true,
                    preserveLicenseComments: false,
                    baseUrl: "js/src",
                    paths: {
                        bower   : "./../../bower_components",
                        jquery  : "./../../bower_components/jquery/jquery.min"
                    },
                    include: [
                        "bower/requirejs/require",
                        "bower/requirejs-domready/domReady",
                        "bootstrap"
                    ],
                    name: "main",
                    optimize: "uglify2",
                    out: "production.js"
                }
            }
        },
        inline: {
            dist: {
                src: ["production.html"],
                dest: ["_site/index.html"]
            }
        },
        copy: {
            images: {
                src: "images/*",
                dest: "_site/"
            }
        },
        clean: {
            generated: [
                "production.js"
            ]
        }
    });

    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-inline");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("install", ["exec:bower"]);

    grunt.registerTask("css", [ "compass"]);

    grunt.registerTask("lint", ["exec:lint"]);

    grunt.registerTask("test:unit", "qunit:unit");
    grunt.registerTask("test:func", "qunit:functional");
    grunt.registerTask("test", "qunit");

    grunt.registerTask("createSiteDir", function() {
        grunt.file.mkdir("_site");
    });

    grunt.registerTask("build", [
        "install", "test",
        "createSiteDir", "requirejs", "inline", "copy:images",
        "clean:generated"
    ]);

};