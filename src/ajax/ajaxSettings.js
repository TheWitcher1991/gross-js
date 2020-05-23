/* eslint-disable no-undef, no-prototype-builtins  */
/* eslint-env node, mocha */
define([
    '../core'
], function (RES) {

    // eslint-disable-next-line no-unused-vars
    RES.extend(RES.prototype, {

        ajaxDefaultSettings: {
            url: '/',
            async: true,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            username: null,
            password: null,
            headers: {}
        },

        ContentTypeAjax: {
            text: 'text/plain',
            html: 'text/html',
            xml: 'application/xml, text/xml',
            json: 'application/json, text/javascript'
        },

        converters: {
            '* text': String,
            'text html': true,
            'text json': JSON.parse,
            'text xml': ''
        },

        xhrSettings: {
            xhr: () => new window.XMLHttpRequest(),
            xhrSuccessStatus: {
                0: 20
            }
        }

    });

    return RES;

});