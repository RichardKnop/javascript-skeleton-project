"use strict";

requirejs.config({
    baseUrl: "js/src",
    paths: {
        bower   : "./../../bower_components",
        jquery  : "./../../bower_components/jquery/jquery.min"
    }
});

requirejs(["main"]);