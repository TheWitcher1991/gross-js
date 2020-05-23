/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define([
    '../core'
], function (Gross) {

    'use strict';

    Gross.extend(Gross.fn, {

        // Class

        /**
         * Adds a class to an item
         * @param {String} className The name of the class
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        addClass: function (className) {
            this.__each__(el => {
                if (el.classList) {
                    el.classList.add(className);
                } else {
                    let current = el.className, found = false;
                    let all = current.split(' ');

                    for (let i = 0; i < all.length, !found; i++)
                        found = all[i] === className;

                    if (!found) {
                        if (current === '')
                            el.className = className;
                        else
                            el.className += ' ' + className;
                    }
                }
            });
        },

        /**
         * Deletes the desired class
         * @param {String} ClassName The name of the class
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        removeClass: function (ClassName) {
            this.__each__(i => i.classList.remove(ClassName));
        },

        /**
         * Toggles classes on an element
         * @param {String} ClassName The name of the class
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        toggleClass: function (ClassName) {
            this.__each__(i => {
                let classes = Array.from(i.classList);

                if (classes.includes(ClassName))
                    i.classList.remove(ClassName);
                else
                    i.classList.add(ClassName);
            });
        },

        /**
         * Checks for a class on an element
         * @param {String} className The name of the class
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        hashClass: function (className) {
            this.__each__(i => {
                if (i.classList) {
                    i.classList.contains(className);
                } else {
                    new RegExp('(^| )' + className + '( |$)', 'gi').test(i.className);
                }
            });
        },

        // Attribute

        /**
         * Set attribute to element
         * @param {String} attributeName Attribute
         * @param {any} value Attribute value
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        attr: function (attributeName, value) {
            this.__each__(i => i.setAttribute(attributeName, value));
        },

        /**
         * Get attribute to element
         * @param {String} attributeName Attribute
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        getAttr: function (attributeName) {
            this.__each__(i => i.getAttribute(attributeName));
        },

        /**
         * Check for an attribute on an element
         * @param {String} attributeName Attribute
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        hasAttr: function (attributeName) {
            this.__each__(i => i.hasAttribute(attributeName));
        },

        /**
         * Remove attribute to element
         * @param {String} attributeName Attribute
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        removeAttr: function (attributeName) {
            this.__each__(i => i.removeAttribute(attributeName));
        },

        // Different style

        /**
         * Show item
         * TODO: Add Animations
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        show: function () {
            this.__each__(i => i.style.display = 'block');
        },

        /**
         * Hide item
         * TODO: Add Animations
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        hide: function () {
            this.__each__(i => i.style.display = 'none');
        },

        /**
         * Toggle item
         * TODO: Add Animations
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        toggle: function () {
            this.__each__(i => {
                if (i.style.display === 'none')
                    i.style.display = '';
                else
                    i.style.display = 'none';
            });
        },

        /**
         * Set Styles to an Element
         * TODO: Fully work out all the functionality
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        css: function () {
            this.__each__(i => {
                console.log('gross.css not working');
            });
        },

        // Different DOM

        /**
         * Write html to element
         * @param {HTMLElement | ActiveX.IXMLDOMNode | String} content HTML
         *
         * @return {*}
         */
        html: function (content) {
            this.__each__(i => {
                if (!this.__isset__(content)) {
                    return i.innerHTML;
                }

                i.innerHTML = content;
            });
        },

        /**
         * Get Outer HTML
         * @param {HTMLElement | ActiveX.IXMLDOMNode | String} content Content
         *
         * @return {*}
         */
        prop: function (content) {
            this.__each__(i => {
                if (content === 'outerHTML') {
                    return i.outerHTML;
                }
            });
        },

        outerWidth: function () {
            this.__each__(i => {
                let width = i.offsetWidth;
                let style = i.currentStyle || getComputedStyle(i);

                width += parseInt(style.marginLeft) + parseInt(style.marginRight);
                return width;
            });
        },

        outerHeight: function () {
            this.__each__(i => {
                let height = i.offsetHeight;
                let style = i.currentStyle || getComputedStyle(i);

                height += parseInt(style.marginTop) + parseInt(style.marginBottom);
                return height;
            });
        },

        /**
         * Write text to element
         * @param {HTMLElement | ActiveX.IXMLDOMNode | String} content Text
         *
         * @return {*}
         */
        text: function (content) {
            this.__each__(i => {
                if (!this.__isset__(content)) {
                    return i.textContent || i.innerText;
                }

                i.textContent = content;
            });
        },

        /**
         * Get width element
         *
         * @return {Number | String}
         */
        width: function () {
            this.__each__(i => parseFloat(getComputedStyle(i, null).width.replace('px', '')));
        },

        /**
         * Get height element
         *
         * @return {Number | String}
         */
        height: function () {
            this.__each__(i => parseFloat(getComputedStyle(i, null).height.replace('px', '')));
        },

        /**
         *
         * @return {*}
         */
        index: function () {
            this.__each__(i => {
               if (!this.__isset__(i)) {
                   return -1;
               }

                // eslint-disable-next-line no-unused-vars
               let is = 0;

                do {
                    if (i.nodeType === 1)
                        i++;

                    i = i.previousSibling;
                } while (i);

               return i;
            });
        },

        /**
         * Get next element
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        next: function () {
            this.__each__(i => {
                return i.nextElementSibling || function () {
                    do {
                        i = i.nextSibling;
                    } while (i && i.nodeType !== 1);

                    return i;
                };
            });
        },

        /**
         * Get prev element
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        prev: function () {
            this.__each__(i => {
                return i.previousElementSibling || function () {
                    do {
                        i = i.previousSibling;
                    } while ( i && i.nodeType !== 1 );

                    return i;
                };
            });
        },

        /**
         * Get prepend element
         * @param {HTMLElement | ActiveX.IXMLDOMNode | String} element Prepend
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        prepend: function (element) {
            this.__each__(i => i.insertBefore(element, i.firstChild));
        },

        /**
         * Get parent
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        parent: function () {
            this.__each__(i => i.parentElement);
        },

        /**
         * Get children
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        children: function () {
            this.__each__(i => i.children);
        },

        /**
         * Empty
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        empty: function () {
            this.__each__(i => {
                while (i.firstChild) {
                    i.removeChild(i.firstChild);
                }
            });
        },

        /**
         * Clone element
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        clone: function () {
            this.__each__(i => i.cloneNode(true));
        },

        /**
         *
         * @param {HTMLElement | ActiveX.IXMLDOMNode | String} element
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        after: function (element) {
            this.__each__(i => i.insertAdjacentElement('afterend', element));
        },

        /**
         *
         * @param {HTMLElement | ActiveX.IXMLDOMNode | String} element
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        before: function (element) {
            this.__each__(i => i.insertAdjacentElement('beforebegin', element));
        },

        /**
         *
         * @param {HTMLElement | ActiveX.IXMLDOMNode | String} element
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        append: function (element) {
            this.__each__(i => i.appendChild(element));
        },

        /**
         *
         * @param {HTMLElement | ActiveX.IXMLDOMNode | String} filterFn
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        filter: function (filterFn) {
            this.__each__(i => Array.prototype.filter.call(i, filterFn));
        },

        /**
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        siblings: function () {
            this.__each__(i => {
                let siblings = Array.prototype.slice.call(i.parentNode.children);

                for (let is = siblings.length; is--;) {
                    if (siblings[is] === i) {
                        siblings.splice(is, 1);
                        break;
                    }
                }
            });
        },

        /**
         *
         * @param begin
         * @param end
         */
        slice: function (begin, end) {
            this.__each__(i => {
                var f = Array.prototype.slice;
                try {
                    f.call(document.documentElement)
                } catch (h) {
                    Array.prototype.slice = function(g, b) {
                        b = "undefined" !== typeof b ? b : this.length;
                        if ("[object Array]" === Object.prototype.toString.call(this)) return f.call(this, g, b);
                        var e = [];
                        var a = this.length;
                        var c = g || 0;
                        c = 0 <= c ? c : Math.max(0, a + c);
                        var d = "number" == typeof b ? Math.min(b, a) : a;
                        0 > b && (d = a + b);
                        d -= c;
                        if (0 < d)
                            if (e = Array(d), this.charAt)
                                for (a = 0; a < d; a++) e[a] = this.charAt(c + a);
                            else
                                for (a = 0; a < d; a++) e[a] = this[c + a];
                        return e;
                    };
                }
                return i.slice(begin, end);
            });
        },

        /**
         * Find the item in this item
         * {String} findSelect Selector
         * TODO: Fully work out all the functionality
         *
         * @return {HTMLElement | ActiveX.IXMLDOMNode | String}
         */
        find: function (findSelect) {
            this.__each__(i => i.querySelector(findSelect));
        }

    });

    return Gross;

});