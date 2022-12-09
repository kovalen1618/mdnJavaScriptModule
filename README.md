# mdnJavaScriptModule

A repository for tutorials concerning JavaScript at [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

---------- API ----------

**APIs** are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement.

There are 2 main forms of APIs

- **Browser APIs** are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things.
  - The DOM is a Browser API
  - Geolocation API
  - Canvas & WebGL
- **Third-Party APIs** are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web
  - Twitter API
  - Google Maps API

---------- Interpreted vs Compiled ----------

In **interpreted languages** the code is run from top to bottom and the result of the code is immediately returned without any need to transform into another form in order for the program to run the code.

In **compiled languages** the code is transformed (compiled) into another form before they are run by the computer

- For example, in C/C++ the code is compiled into machine code which is then run by the computer

_JavaScript is a lightweight interpreted programming language. The web browser receives the JavaScript code in its original text form and runs the script from that. From a technical standpoint, most modern JavaScript interpreters actually use a technique called just-in-time compiling to improve performance; the JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible. However, JavaScript is still considered an interpreted language, since the compilation is handled at run time, rather than ahead of time._

---------- Client-Side vs Server-Side ----------

**Client-side** code is code that is run on the user's computer - when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser.

**Server-side** code is code that is run on a server, then its results are downloaded and displayed in the browser.

_Vanilla JavaScript is client-side code but it can also be used as a server-side language, for example in the Node.js environment._

---------- Dynamic vs Static ----------

**Dynamic** code refers to both JavaScript and all server-side languages - specifically their ability to update the display of a webpage/app to show different things in different circumstances; i.e. generating new content as required.

**Static** code does not dynamically update a webpage - it just shows the same content all the time.
