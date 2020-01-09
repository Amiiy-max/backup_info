### two types of custom elements:  
- Autonomous custom elements are standalone   
they don't inherit from standard HTML elements. You use these on a page by literally writing them out as an HTML element. For example <popup-info>, or document.createElement("popup-info").  
- Customized built-in elements   
inherit from basic HTML elements. To create one of these, you have to specify which element they extend (as implied in the examples above), and they are used by writing out the basic element but specifying the name of the custom element in the is attribute (or property).  
For example `<p is="word-count">`, or `document.createElement("p", { is: "word-count" })`
