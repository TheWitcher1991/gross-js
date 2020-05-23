/* eslint-disable no-undef */
/* eslint-env node, mocha */
define([
    '../core'
], function (Gross) {

    'use strict';

    let readyList = [];

    Gross.extend(Gross.fn, {

        /**
         *
         * @param msg
         * @private
         */
        __error__: msg => {
            throw new Error(msg);
        },

        /**
         *
         * @param obj
         * @return {boolean}
         * @private
         */
        __likeArray__: function (obj) {
            let length = !!obj && 'length' in obj && obj.length,
                type = this.__type__(obj);

            return 'function' !== type && !this.isWindow(obj) && (
                'array' === type || length === 0 ||
                (typeof length == 'number' && length > 0 && (length - 1) in obj)
            );
        },

        /**
         *
         * @param array
         * @param callback
         * @private
         */
        __cycleArray__: (array, callback) => {
            Array.from({length: array.length}, (v, k) => callback(v, k));
        },

        /**
         *
         * @param ns
         * @return {{}}
         * @protected
         */
        __namespace__: function (ns) {
            let levels = ['error', 'warn', 'log', 'info'];

            return levels.reduce((logger, method) => {
                logger[method] = this.__debug__.bind(console, method, ns);
                return logger;
            }, {});
        },

        /**
         *
         * @param method
         * @param args
         * @protected
         */
        __debug__: function (method, ...args) {
            let levels = ['error', 'warn', 'log', 'info'],
                level = 'warn';

            if (this.__inArray__(levels, method) <= this.__inArray__(levels, level))
                // eslint-disable-next-line no-console
                console[method].apply(console, args);
        },

        /**
         *
         * @param obj
         * @param path
         * @return {*}
         * @private
         */
        __get__: (obj, path) => {
            if (typeof obj === 'undefined' || obj === null)
                return;

            path = path.split(/[\.\[\]\"\']{1,2}/);

            for (let i = 0, l = path.length; i < l; i += 1) {
                if (path[i] !== '') {
                    obj = obj[path[i]];
                    if (typeof obj === 'undefined' || obj === null)
                        return;
                }
            }

            return obj;
        },

        /**
         *
         * @param obj
         * @param attr
         * @return {*}
         * @private
         */
        __pluck__: (obj, attr) => obj.map(book => book[attr]),

        /**
         *
         * @param str
         * @return {string}
         * @private
         */
        __capitalize__: str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase(),

        /**
         *
         * @param str
         * @return {void|*|string}
         * @private
         */
        __camelize__: str => str.replace(/-+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : ''),

        /**
         *
         * @param vars
         * @return {boolean|boolean}
         * @private
         */
        __isset__: vars => (typeof vars !== 'undefined') && (vars !== null),

        /**
         *
         * @param array
         * @param item
         * @return {boolean}
         * @private
         */
        __inArray__: (array, item) => array.indexOf(item) !== -1,

        /**
         *
         * @param array
         * @param item
         * @return {*}
         * @private
         */
        __isArray__: (array, item) => array.isArray(item),

        /**
         *
         * @param array
         * @param callback
         * @return {*}
         * @private
         */
        __forEach__: (array, callback) => array.forEach(callback),

        /**
         *
         * @param array
         * @param callback
         * @return {*}
         * @private
         */
        __map__: (array, callback) => array.map(callback),

        __isFunction__: function (obj) {
            return typeof obj === 'function' && typeof obj.nodeType !== 'number';
        },

        /**
         *
         * @param obj
         * @return {string}
         * @private
         */
        __type__: obj => Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase(),

        /**
         *
         * @param handler
         * @private
         */
        __bindReady__ : function (handler) {
            let called = false;

            function ready () {
                if (called)
                    return;

                called = true;
                handler();
            }

            if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', function () {
                    ready();
                }, false);
            } else if (document.attachEvent) {
                if (document.documentElement.doScroll && window == window.top) {
                    // eslint-disable-next-line no-inner-declarations
                    function tryScroll(){
                        if (called)
                            return;

                        if (!document.body)
                            return;

                        try {
                            document.documentElement.doScroll('left');
                            ready();
                        } catch(e) {
                            setTimeout(tryScroll, 0);
                        }

                    }

                    tryScroll();
                }

                document.attachEvent('onreadystatechange', function () {
                    if (document.readyState === 'complete') {
                        ready();
                    }
                });
            }

            if (window.addEventListener) {
                window.addEventListener('load', ready, false);
            } else if (window.attachEvent) {
                window.attachEvent('onload', ready);
            } else {
                window.onload = ready;
            }
        },

        /**
         *
         * @param handler
         * @private
         */
        __ready__: function (handler) {
            if (!readyList.length) {
                this.__bindReady__(function () {
                    for (let i = 0; i < readyList.length; i++) {
                        readyList[i]();
                    }
                });
            }

            readyList.push(handler);
        }

    });

    return Gross;

});