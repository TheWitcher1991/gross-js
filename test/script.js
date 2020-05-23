/* eslint-disable no-undef */
'use strict';

// We wait until the page loads and execute the code inside
g(function () {

    // By clicking on an element we execute an event
    g('#button').handler('click', () => {
            alert(3);
    });

    // Add class to element
    g('.gross').addClass('TestAddClass');

    // Add attribute to element. Looks a little silly)
    g('.gross').attr('style', 'background:blue;color:#fff;text-align:center');

});