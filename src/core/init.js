/* eslint-disable no-undef */
/* eslint-env node, mocha */
define([
    '../core'
], function (Gross) {

    'use strict';

    Gross.extend(Gross.fn, {

        /**
         * Initialize a RES object
         * @param {String | Function | Node} selector Takes a document object
         * 
         * @return {Object}
         */ 
        __init__: function (selector) {
            // $(''), $(null), $(undefined), $(false)
            if (!selector) 
                return this;

            // $('class'), $('id'), $('tag')
            if (typeof selector === 'string') {
                this.selector = document.querySelectorAll(selector);
            // $(DOMElement)
            } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this;
            // $(function)
            } else if (typeof selector === 'function') {
                return this.__ready__ !== undefined ? this.__ready__(selector) : selector(Gross);
            }        
        }

    });

    return Gross;
    
});