/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define([
    './index'
], function () {

    'use strict';

    let version = '1.1.2',

    /**
     * Is a class constructor
     *
     * @class Gross
     *
     * @param {String} selector Takes a document object
     * 
     * TODO: DEVELOP THE DAMNING STATIC METHODS AND MAKE THE OBJECT FULL - 1.2.2
     * TODO: STATIC METHODS NOT WORKING!!!
     * 
     * @return {Function} 
     */
    Gross = function (selector) {
        if (this instanceof Gross) {
            return this.__init__(selector);
        }
    };

    Gross.fn = Gross.prototype = {

        // The current version of Gross being used
        gross: version,

        constructor: Gross,

        // The default length of a Gross object is 0
        length: 0,

        __each__: function (callback) {
            Array.prototype.forEach.call(this.selector, callback);
        }
    };

    /**
     * Connects two objects into one
     * @param {Class | Object} out The Object
     * 
     * @return {Object}
     */
    Gross.extend = Gross.fn.extend = function (out) {
        out = out || {};

        for (let i = 1; i < arguments.length; i++) {
            let obj = arguments[i];

            if (!obj)
                continue;

            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object'){
                        if(obj[key] instanceof Array)
                            out[key] = obj[key].slice(0);
                        else
                            out[key] = this.extend(out[key], obj[key]);
                    }
                    else
                        out[key] = obj[key];
                }
            }
        }

        return out;
    };

    /**
     * Perform an asynchronous HTTP (Ajax) request
     * @type {Gross.ajax | Object} options A set of key/value pairs that
     *                                     configure the Ajax request.
     *                                     All settings are optional
     */
    Gross.ajax = Gross.prototype.ajax = function (options) {
        this.__send__(options);
    };

    /**
     * @param {Class | Object} baseClass
     * @param {Class | Object}  mixins
     * @type {Gross.mix}
     */
    Gross.mix = Gross.prototype.mix = function (baseClass, ...mixins) {
        mixins.forEach(mixin => {
            Object.getOwnPropertyNames(mixin).concat(Object.getOwnPropertySymbols(mixin))
                .forEach(key => {
                    if (key in baseClass.prototype) {
                        return;
                    }

                    const sourceDescriptor = Object.getOwnPropertyDescriptor(mixin, key);
                    sourceDescriptor.enumerable = false;

                    Object.defineProperty(baseClass.prototype, key, sourceDescriptor);
                });
        });
    };

    /**
     * @param {Object} obj
     * @type {Gross.mix}
     */
    Gross.type = Gross.prototype.mix = function (obj) {
        Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
    };

    /**
     * @param {JSON | Object | String} str
     * @type {function(*=): any}
     */
    Gross.parseJSON = Gross.prototype.parseJSON = function (str) {
        return JSON.parse(str);
    };

    /**
     * @param {HTMLCollection | String} str
     * @type {function(*): HTMLCollection}
     */
    Gross.parseHTML = Gross.prototype.parseHTML = function (str) {
        let tmp = document.implementation.createHTMLDocument();
        tmp.body.innerHTML = str;
        return tmp.body.children;
    };

    /**
     * @param {Array} arr
     * @param {Function} callback
     * @type {Gross.map}
     */
    Gross.map = Gross.prototype.map = function (arr, callback) {
        arr.map(callback);
    };

    /**
     * @param {Array} array
     * @param {Function} callback
     * @type {Gross.map}
     */
    Gross.each= Gross.prototype.each = function (array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i);
        }
    };

    /**
     * @param {Array} array
     * @param {*} item
     * @type {Gross.inArray}
     */
    Gross.inArray = Gross.prototype.inArray = function (array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item)
                return i;
        }

        return -1;
    };

    /**
     * @param {Array} array
     * @type {Gross.isArray}
     */
    Gross.isArray = Gross.prototype.isArray = function (array) {
        let isArray = Array.isArray || function (array) {
            return Object.prototype.toString.call(array) === '[object Array]';
        };

        isArray(array);
    };

    /**
     * @param fn
     * @param context
     * @type {Gross.proxy}
     */
    Gross.proxy = Gross.prototype.proxy = function (fn, context) {
        fn.apply(context, arguments);
    };

    /**
     * @param {String} str
     * @type {function(*): void|*|string}
     */
    Gross.trim = Gross.prototype.trim = function (str) {
        return str.replace(/^\s+|\s+$/g, '');
    };

    /**
     *
     * @type {function(*): number}
     */
    Gross.now = Gross.prototype.now = function () {
        return new Date().getTime();
    };

    /**
     * @param {*} el
     * @param {*} child
     * @type {function(*, *=): *|boolean|jQuery|(function(*=): boolean)|(function(*=): boolean)}
     */
    Gross.contains = Gross.prototype.contains = function (el, child) {
        return el !== child && el.contains(child);
    };

    /**
     * @param {String} url
     * @param {Function} fn
     * @type {Gross.getJSON}
     */
    Gross.getJSON = Gross.prototype.getJSON = function (url, fn) {
        let request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    // Success!
                    let data = JSON.parse(this.responseText);
                    fn(data);
                } else {
                    // Error :(
                }
            }
        };

        request.send();
        request = null;
    };

    // module.exports.$ = RES;

    return Gross;

});