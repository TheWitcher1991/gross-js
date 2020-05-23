/* eslint-disable no-mixed-spaces-and-tabs, no-console, no-undef */
/* eslint-env node, mocha */

/**----------------------------------------------
 * @version 1.1.2
 * @license MIT
 * @see {https:\\github.com\TheWitcher1991\gross-js}
 -----------------------------------------------*/

'use strict';

(function (global,factory) {

    'use strict';

    if (typeof module === 'object' && typeof module.exports === 'object') {

        module.exports = global.document ?
		    factory(global, true) :
		    function(w) {
			    if (!w.document) {
				    throw new Error('Gross-js requires a window with a document');
			    }
			    return factory(w);
		    };
    } else {
        factory(global);
    }

})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {

    'use strict';

    define([
        './core',
        './exports',
        './core/init',
        './core/ready',
        './event/event',
        './DOM/DOM',
        './ajax/ajaxSettings',
        './ajax/ajax',
        './private/private'
    ], function (Gross) {

        const $ = selector => new Gross(selector);

        try {

            window.Gross = $;
            window.g === undefined && (window.g = $);

        } catch (e) {
            console.error(e);
        }

        return Gross;

    });

});