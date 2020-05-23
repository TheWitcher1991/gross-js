/* eslint-disable no-undef */
/* eslint-env node, mocha */ 
define([
    '../core'
], function (Gross) {

    'use strict';

    Gross.extend(Gross.fn, {

        /**
         * Function that loads after loading the DOM
         * @param {Function} callback A self-invoking function
         * 
         * @return {Function}
         */ 
        ready: function (callback) {
            this.__ready__(callback);
        }

    });

    return Gross;

});