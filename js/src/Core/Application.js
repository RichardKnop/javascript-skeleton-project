"use strict";

define(["jquery"], function () {

    return function () {

        this.run = function () {
            $("body").append("<h1>Hello World</h1>");
        };

    };

});