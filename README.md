# mdnJavaScriptModule

A repository for tutorials concerning JavaScript at [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

---------- Parsing ----------

**Parsing** means analyzing and converting a program into an internal format that a runtime environment can actually run, for example _JavaScript_ engine inside browsers.

- The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction.
- Some examples of runtime environments include Chrome, Firefox, Node, etc.
- The JavaScript engine is a program that is responsible for executing JavaScript code. All browsers come with their own version of the JavaScript engine - the most popular being Google's and Node's V8 engine.

---------- <code>async</code> & <code>defer</code> Attribute ----------

Scripts loaded using the <code>async</code> attribute will download the script without blocking the page while the script is being fetched. It is best to use <code>async</code> when the scripts in the page run independently from each other and depend on no other script on the page.

Here is a visual representation of the different script loading methods and what it means for a webpage:
<img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/async-defer.jpg"/>

<code>async</code> should be used when you have a bunch of background scripts to load in, and you just want to get them in place as soon as possible. For example, maybe you have some game data files to load, which will be needed when the game actually begins, but for now you just want to get on with showing the game intro, titles, and lobby, without them being blocked by script loading.

Scripts loaded using the <code>defer</code> attribute will run in the order they appear in the page and execute them as soon as the script and content are downloaded.

Summary

- <code>async</code> and <code>defer</code> both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.

- scripts with an <code>async</code> attribute will execute as soon as the download is complete. This blocks the page and does not guarantee any specific execution order.

- scripts with a <code>defer</code> attribute will load in the order they are in and will only execute once everything has finished loading.

- If your scripts should be run immediately and they don't have any dependencies, then use <code>async</code>.

- If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using defer and put their corresponding script elements in the order you want the browser to execute them.
