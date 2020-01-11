### two types of custom elements:  
- Autonomous custom elements are standalone   
they don't inherit from standard HTML elements. You use these on a page by literally writing them out as an HTML element. For example <popup-info>, or document.createElement("popup-info").  
- Customized built-in elements   
inherit from basic HTML elements. To create one of these, you have to specify which element they extend (as implied in the examples above), and they are used by writing out the basic element but specifying the name of the custom element in the is attribute (or property).  
For example `<p is="word-count">`, or `document.createElement("p", { is: "word-count" })`
  
### Demos
#### 1. [Autonomous custom elements](UsingCustomElementDemo/Autonomous%20custom%20elements.html)

#### 2. [Internal vs. external styles](UsingCustomElementDemo/Autonomous%20custom%20elements.html)
  > Many modern browsers implement an optimization for <style> tags either cloned from a common node or that have identical text, to allow them to share a single backing stylesheet. With this optimization the performance of external and internal styles should be similar.
#### 3. [Customized built-in elements](UsingCustomElementDemo/Autonomous%20custom%20elements.html)
```js
  class ExpandingList extends HTMLUListElement
  customElements.define('expanding-list', ExpandingList, { extends: "ul" });
```
```html
<ul is="expanding-list">
  ...
</ul>
```
#### 4. [Using the lifecycle callbacks](UsingCustomElementDemo/Autonomous%20custom%20elements.html)
  * connectedCallback: appended into document-connected element, moved
  > Note: connectedCallback may be called once your element is no longer connected, use Node.isConnected to make sure
  * disconnectedCallback: disconnected from the document's DOM.
  * adoptedCallback: moved to a new document.
  * attributeChangedCallback: observedAttributes决定监听哪些属性
