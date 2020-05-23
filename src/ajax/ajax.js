/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define([
    '../core'
], function (Gross) {

    'use strict';

    let callback;

    Gross.extend(Gross.fn, {

        /**
         *
         * @param {Object}options
         * @private
         *
         * @return
         */
        __send__: function (options) {
            options = options || {};

            if (!this.__isset__(options.url)) options.url = this.ajaxDefaultSettings.url;
            if (!this.__isset__(options.async)) options.async = this.ajaxDefaultSettings.async;
            if (!this.__isset__(options.contentType)) options.contentType = this.ajaxDefaultSettings.contentType;
            if (!this.__isset__(options.username)) options.username = this.ajaxDefaultSettings.username;
            if (!this.__isset__(options.password)) options.password = this.ajaxDefaultSettings.password;
            if (!this.__isset__(options.headers)) options.headers = this.ajaxDefaultSettings.headers;

            if (this.__isset__(options.headers)) options.headers = options.headers || {};

            // eslint-disable-next-line no-unused-vars
            let isSuccess = status >= 200 && status < 300 || status === 304;

            let xhr = this.xhrSettings.xhr();

            if (this.__isset__(options.type)) {
                xhr.open(
                    options.type,
                    options.url,
                    options.async,
                    options.username,
                    options.password
                );

                xhr.setRequestHeader('Content-type', options.contentType);

                xhr.send(null);

                if (options.mimeType && xhr.overrideMimeType)
                    xhr.overrideMimeType(options.mimeType);

                for (let i of options.headers) {
                    xhr.setRequestHeader(i, options.headers[i]);
                }

                callback = function (type) {

                    callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;

                    if (type === 'abort')
                        xhr.abort();
                    else if (type === 'error')
                        alert('erraj');
                    else {

                        xhrSettings.xhrSuccessStatus[xhr.status] || (xhr.status && xhr.statusText &&

                            ((xhr.responseType || 'text') === 'text' ? { text: xhr.responseText } :
                                { binary: xhr.response }) &&

                            xhr.getAllResponseHeaders());
                    }

                };

            }

            xhr.onload = callback();
            xhr.onabort = xhr.onerror = xhr.ontimeout = callback('error');

            callback = callback('abort');

            try {

                xhr.send(null);

            } catch (e) {

                if (this.__isset__(callback)) throw e;

            }
        },

        __abort__:  function () {
            if (this.__isset__(callback)) callback();
        }

    });

    return Gross;

});