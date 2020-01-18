# Using CSS transitions
> transition 是 [transition-property](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property)，
[transition-duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration)，
[transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) 
和 [transition-delay](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay) 
的一个[简写属性](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)。

CSS transitions provide a way to control animation speed when `changing CSS properties`  
With CSS transitions enabled, changes occur at **time intervals** that follow an `acceleration curve`, all of which can be customized  

#### Animations that involve transitioning between two states are often called `implicit transitions`
> as the states in between the start and final states are implicitly defined by the browser.
![](https://developer.mozilla.org/files/4529/TransitionsPrinciple.png)

CSS transitions let you decide:
1. which properties to animate (by listing them explicitly), 
2. when the animation will start (by setting a delay), 
3. how long the transition will last (by setting a duration), 
4. and how the transition will run (by defining a timing function, e.g. linearly or quick at the beginning, slow at the end).

## Which CSS properties can be transitioned?
[list of animatable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) is limited to a finite set.
> The auto value is often a very complex case. The specification recommends not animating from and to `auto`  
Gecko严, webkit松

## Defining transitions
用transition简写 easier to avoid out of sync parameters  
transition: start to finish; [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation): loop  

1. transition-property: CSS properties name/names to be applied  
2. transition-duration: 1个或多个，对应property, 多退少从头
3. transition-timing-function: Specifies a function to define how `intermediate` values for properties are computed  
[timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function): graph of the corresponding function, as defined by four points defining a cubic bezier  
[Easing functions Cheat Sheet](https://easings.net/)  
4. transition-delay: how long to wait

### shortcuts:
```css
div {
    transition: <property> <duration> <timing-function> <delay>;
}
```


