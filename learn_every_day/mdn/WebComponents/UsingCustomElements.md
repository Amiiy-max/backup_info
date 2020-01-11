### two types of custom elements:  
- Autonomous custom elements are standalone   
they don't inherit from standard HTML elements. You use these on a page by literally writing them out as an HTML element. For example <popup-info>, or document.createElement("popup-info").  
- Customized built-in elements   
inherit from basic HTML elements. To create one of these, you have to specify which element they extend (as implied in the examples above), and they are used by writing out the basic element but specifying the name of the custom element in the is attribute (or property).  
For example `<p is="word-count">`, or `document.createElement("p", { is: "word-count" })`
  
### Demos

#### 1. [Autonomous custom elements](UsingCustomElementDemo/Autonomous%20custom%20elements.html)

#### 2. [Internal vs. external styles](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/)
  > Many modern browsers implement an optimization for <style> tags either cloned from a common node or that have identical text, to allow them to share a single backing stylesheet. With this optimization the performance of external and internal styles should be similar.
  
#### 3. [Customized built-in elements](UsingCustomElementDemo/Customized%20built-in%20elements.html)
```js
  class ExpandingList extends HTMLUListElement
  customElements.define('expanding-list', ExpandingList, { extends: "ul" });
```
```html
<ul is="expanding-list">
  ...
</ul>
```
  
#### 4. [Using the lifecycle callbacks](UsingCustomElementDemo/Using%20the%20lifecycle%20callbacks.html)
  * connectedCallback: appended into document-connected element, moved
  > Note: connectedCallback may be called once your element is no longer connected, use Node.isConnected to make sure
  * disconnectedCallback: disconnected from the document's DOM.
  * adoptedCallback: moved to a new document.
  * attributeChangedCallback: observedAttributes决定监听哪些属性
  
#### 5. Polyfills vs. classes
Custom Element polyfills may patch native constructors such as HTMLElement and others, and return a different instance from the one just created.  
自定义元素polyfill可以修补本机构造函数，例如HTMLElement和其他构造函数，并返回与刚创建的实例不同的实例。
```js
class CustomElement extends HTMLElement {
  constructor(...args) {
    const self = super(...args);
    // self functionality written in here
    // self.addEventListener(...)
    // return the right context
    return self;
  }
}
```
```js
constructor(...args) { return super(...args); }
```

#### 6. Transpilers vs. classes
Please note that ES2015 classes cannot reliably be transpiled in Babel 6 or TypeScript targeting legacy browsers. You can either use Babel 7 or the [babel-plugin-transform-builtin-classes](https://www.npmjs.com/package/babel-plugin-transform-builtin-classes) for Babel 6, and target ES2015 in TypeScript instead of legacy.

#### 7. Libraries
aim to: increasing the level of abstraction   
[snuggsi ツ](https://github.com/devpunks/snuggsi), [X-Tag](https://x-tag.github.io/), [Slim.js](http://slimjs.com/), [LitElement](https://lit-element.polymer-project.org/), [Smart](https://www.htmlelements.com/), and [Stencil](https://stenciljs.com/).
