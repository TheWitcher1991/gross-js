/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define([
    './core'
], function (Gross) {

    'use strict';

    if (typeof module === 'Object' && module.exports) {
        module.exports = Gross;
        module.exports.g = Gross;
    }

    return Gross;

});