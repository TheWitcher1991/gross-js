/* eslint-disable no-undef */
'use strict';

// We wait until the page loads and execute the code inside
g(function () {

    // By clicking on an element we execute an event
    g('#id').handler('click', () => {
            alert(3);
    });

    // Add class to element
    g('.class').addClass('TestAddClass');

    // Add attribute to element.
    g('.class').attr('style', 'background:blue;color:#fff;text-align:center');

});