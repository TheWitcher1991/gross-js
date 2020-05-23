# GROSS-JS

>## I warn you! Plugin in development. If you download it and use it, there may be errors in some functions or they will not work

> This is a plugin that speeds up work with some code. He is very similar to jQuery

All documentation is on this site - ...
## Including

Clone the repository in a suitable folder

```
git clone https://github.com/TheWitcher1991/gross-js.git
```

Then download the nodejs packages
And assemble the project

```bash
$ npm install
$ npm run build
```

The desired file in the build folder

> {PATH}/build/gross.js

### Webpack/ES6/ES5

You can use ES6 ES5 connection modules

ES6
```js
import g from 'gross-js';
// or 
import { Gross } from 'gross-js';
```

ES5
```js
const g = require('gross-js');
// or
const { Gross } = require('gross-js');
```

Then using wepback or other collectors to get the source file

### Example
```js
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

   // Search for an item in a container
    g('#id').find('.class');

});
```

### Node

To include Gross-js in Node, first install with npm.

```bash
$ npm i gross-js
```

then

```html
<script src="./node_modules/gross-js/bin/gross-js.js"></script>
```




#### If you don't wish to clone, you can [download the source code](https://github.com/TheWitcher1991/gross-js/archive/master.zip).