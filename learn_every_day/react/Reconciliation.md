## Motivation
[state of the art algorithms](https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf) have a complexity in the order of O(n3)  
React implements a heuristic O(n) algorithm based on two assumptions:  
1. Two elements of different types will produce different trees.
2. The developer can hint at which child elements may be stable across different renders with a key prop.

## [The Diffing Algorithm](https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm)
1. Elements Of Different Types  
tear down old tree

2. DOM Elements Of The Same Type  
updates the changed attributes, recurses on the children  

3. Component Elements Of The Same Type  
state is maintained across renders. React updates the props  
render() method is called and the diff algorithm recurses on the previous result and the new result.  

4. Recursing On Children  
两边同时迭代iterate
>keys的目的：
```html
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

5. Keys  
[Here](https://reactjs.org/redirect-to-codepen/reconciliation/index-used-as-key) is an example of the issues that can be caused by using indexes as keys on CodePen  

6. Tradeoffs  
refining the heuristics  
Keys should be stable, predictable, and unique.  
