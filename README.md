# JS modules

Module is nothing more than a chunk of JavaScript code written in a file. The variables, functions in a module are not available for use unless the module file exports them.

|             | CommonJS    | AMD       | ES2015**  | 
| ----------- | ----------- |-----------|-----------|
|  define     | ``module.exports = ;`` ``exports.moduleName =``        | ``define(module_id /* optional */, [dependencies] /* optional */, definition function /* function for instantiating the module or object */);``| ``export default `` ``export const `` ``export { name as newName }`` |
| use | ``const name = require();``  ``const { name } = require();``| ``require([], ()⇒{}); `` ``define((require) ⇒ {})``| ``import Name from './'`` `` import { Name } from './'`` `` import { name as newName } from './'`` `` import * as name from './';`` |
| enviroment | server | browser | server, browser |
| supports asynchronous module loading | - | + | + |
| dynamic module loading | - | + | + |
| cyclic dependencies | + (d), - (ex) | - | + |
| import and export statements have dynamic parts | + | - | + |
| parsing process | single stream | algorithm split up into phases* | algorithm split up into phases |
| constructor functions | + | + | + |
| implementations | Node.js | RequireJS | Integrated in the language (eventually supported everywhere, no need for libraries) |
| live bindings | - , imports are copies of exported values | - , imports are copies of exported values | +, imports are live read-only views on exported values |

*AMD addresses these issues by:

* Register the factory function by calling define(), instead of immediately executing it.
* Pass dependencies as an array of string values, do not grab globals.
* Only execute the factory function once all the dependencies have been loaded and executed.
* Pass the dependent modules as arguments to the factory function.

** ES2015 addittional info
* Modules have strict mode enabled by default.
* HTML-style comment syntax is not supported in modules, although it works in classic scripts.
* Modules have a lexical top-level scope. This means that for example, running var foo = 42; within a module does not create a global variable named foo, accessible through window.foo in a browser, although that would be the case in a classic script.
* Similarly, the this within modules does not refer to the global this, and instead is undefined. (Use globalThis if you need access to the global this.)
* The new static import and export syntax is only available within modules — it doesn’t work in classic scripts.
* Top-level await is available in modules, but not in classic scripts. Relatedly, await cannot be used as a variable name anywhere in a module, although variables in classic scripts can be named await outside of async functions.


### Sources
* https://github.com/amdjs/amdjs-api/blob/master/AMD.md
* http://www.commonjs.org/
* https://nodejs.org/docs/latest-v10.x/api/modules.html#modules_modules
* https://auth0.com/blog/javascript-module-systems-showdown/
* https://codeguida.com/post/1303
* https://javascript.plainenglish.io/javascript-module-system-in-plain-english-2842ef5c76
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
* https://exploringjs.com/es6/ch_modules.html#sec_overview-modules
* https://javascript.plainenglish.io/javascript-module-system-in-plain-english-2842ef5c76
  

   
