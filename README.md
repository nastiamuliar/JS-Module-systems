# JS modules

Module is nothing more than a chunk of JavaScript code written in a file. The variables, functions in a module are not available for use unless the module file exports them.

The two main module systems are

**https://javascript.plainenglish.io/javascript-module-system-in-plain-english-2842ef5c76**

## [ES2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
https://exploringjs.com/es6/ch_modules.html#sec_overview-modules

Has direct support for asynchronous loading

Export: 
* named
  ```
  export const sqrt = Math.sqrt;
  export function square(x) {
      return x * x;
  }
  ```
* default
  ```
    export default function () {}
  ```

Import:
* named
  ```
  import { square, diag } from 'lib';
  import * as lib from 'lib';
  ```
  
 * default
  ```
  import myFunc from 'myFunc';
  ```

* Modules have strict mode enabled by default.
* HTML-style comment syntax is not supported in modules, although it works in classic scripts.
* Modules have a lexical top-level scope. This means that for example, running var foo = 42; within a module does not create a global variable named foo, accessible through window.foo in a browser, although that would be the case in a classic script.
* Similarly, the this within modules does not refer to the global this, and instead is undefined. (Use globalThis if you need access to the global this.)
* The new static import and export syntax is only available within modules — it doesn’t work in classic scripts.
* Top-level await is available in modules, but not in classic scripts. Relatedly, await cannot be used as a variable name anywhere in a module, although variables in classic scripts can be named await outside of async functions.

On the web, you can tell browsers to treat a <script> element as a module by setting the type attribute to module. Browsers that understand type="module" ignore scripts. Only modern browsers support modules with a nomodule attribute. Modules are evaluated only once, while classic scripts are evaluated however many times you add them to the DOM.
  
Another difference relates to the async attribute, which causes the script to download without blocking the HTML parser (like defer) except it also executes the script as soon as possible, with no guaranteed order, and without waiting for HTML parsing to finish. The async attribute does not work for inline classic scripts, but it does work for inline <script type="module">.
  
Some restrictions apply to module specifiers in browsers. So-called “bare” module specifiers are currently not supported. 
  
  ```
  // Not supported (yet):
  import {shout} from 'jquery';
  import {shout} from 'lib.mjs';
  import {shout} from 'modules/lib.mjs';
  
  // Supported:
  import {shout} from './lib.mjs';
  import {shout} from '../lib.mjs';
  import {shout} from '/modules/lib.mjs';
  import {shout} from 'https://simple.example/modules/lib.mjs';
 ```
  
Module scripts are deferred by default. As such, there is no need to add defer to your <script type="module"> tags! Not only does the download for the main module happen in parallel with HTML parsing, the same goes for all the dependency modules!

So far we’ve only used static import. With static import, your entire module graph needs to be downloaded and executed before your main code can run.
Unlike static import, dynamic import() can be used from within regular scripts. It’s an easy way to incrementally start using modules in your existing code base.
  
Another new module-related feature is import.meta, which gives you metadata about the current module. The exact metadata you get is not specified as part of ECMAScript; it depends on the host environment.
  
## [Common JS](http://www.commonjs.org/)
  
  Support support only synchronous loading

 Export: 
* named
  ```
  var sqrt = Math.sqrt;
  function square(x) {
      return x * x;
  }
  
  module.exports = {
    sqrt: sqrt,
    square: square,
  };
  ```
* default
  
  Import:
  * named
  ```
  var square = require('lib').square;
  var diag = require('lib').diag;
  ```

## AMD

