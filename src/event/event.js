/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define([
    '../core'
], function (Gross) {

    'use strict';

    Gross.extend(Gross.fn, {

        // Event selection

        /**
         * The event that the person sets
         * @param {String} event The event
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */ 
        handler: function (event, handler) {
            this.__each__(i => i.addEventListener(event, handler, false));
        },

        /**
         * Removing an event that a person sets
         * @param {String} event The event
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        off: function (event, handler) {
            this.__each__(i => i.removeEventListener(event, handler, false));
        },

        // Mouse events

        /**
         * Event when left-clicking on an item
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        click: function (handler) {
            this.__each__(i => i.addEventListener('click', handler, false));
        },

        /**
         * An event when they clicked on an element with the right mouse button.
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        contextmenu: function (handler) {
            this.__each__(i => i.addEventListener('contextmenu', handler, false));
        },

        // Events on the controls

        /**
         * Event when user submitted form <form>
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        submit: function (handler) {
            this.__each__(i => i.addEventListener('submit', handler, false));
        },

        /**
         * Change the values of form elements. 
         * Occurs after the loss of focus by an element, i.e. after the event
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        change: function (handler) {
            this.__each__(i => i.addEventListener('submit', handler, false));
        },

        /**
         * Loss of focus by the current element, i.e. transition to another element. 
         * Occurs when you click the mouse outside the element or press the tab key 
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        blur: function (handler) {
            this.__each__(i => i.addEventListener('blur', handler, false));
        },

        /**
         * Reset form data (click on the button <input type = "reset">)
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        reset: function (handler) {
            this.__each__(i => i.addEventListener('reset', handler, false));
        },

        /**
         * An event when the user focuses on an element, for example, clicks on <input>
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        focus: function (handler) {
            this.__each__(i => i.addEventListener('focus', handler, false));
        },

        // Keyboard Events

        /**
         * When the user presses a key
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        keydown: function (handler) {
            this.__each__(i => i.addEventListener('keydown', handler, false));
        },

        /**
         * When the user releases a key
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        keyup: function (handler) {
            this.__each__(i => i.addEventListener('keyup', handler, false));
        },

        /**
         * Create trigger
         * @param {String} handler Event handler
         *
         * @return {Function}
         */
        trigger: function (handler) {
            this.__each__(i => {
                let event = document.createEvent('HTMLEvents');
                event.initEvent(handler, true, false);
                i.dispatchEvent(event);
            });
        },


        // CSS events

        /**
         * When the CSS animation is complete
         * @param {String} handler Event handler
         * 
         * @return {Function}
         */
        transitionend: function (handler) {
            this.__each__(i => i.addEventListener('transitionend', handler, false));
        }

    });

    return Gross;

});