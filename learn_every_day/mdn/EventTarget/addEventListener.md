# [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
The [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) method `addEventListener()` sets up a function that will be called whenever the specified event is delivered to the target.  
target may be any object that supports events (such as [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)).

```
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
target.addEventListener(type, listener[, useCapture, wantsUntrusted! ]); // Gecko/Mozilla only
```
> *Gecko/Mozilla only*： wantsUntrusted ![](data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbDogI2RiMDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBhcmlhLWhpZGRlbj0idHJ1ZSI+PHBhdGggZD0iTTE2IDIxLjQ4NHYtMi45NjlhLjUwOC41MDggMCAwIDAtLjUtLjUxNmgtM2MtLjI4MSAwLS41LjIzNC0uNS41MTZ2Mi45NjljMCAuMjgxLjIxOS41MTYuNS41MTZoM2MuMjgxIDAgLjUtLjIzNC41LS41MTZ6bS0uMDMxLTUuODQzbC4yODEtNy4xNzJhLjM3OC4zNzggMCAwIDAtLjE1Ni0uMjk3QzE2IDguMDk0IDE1Ljg2IDggMTUuNzE5IDhoLTMuNDM3Yy0uMTQxIDAtLjI4MS4wOTQtLjM3NS4xNzItLjEwOS4wNzgtLjE1Ni4yMzQtLjE1Ni4zMjhsLjI2NiA3LjE0MWMwIC4yMDMuMjM0LjM1OS41MzEuMzU5aDIuODkxYy4yODEgMCAuNTE2LS4xNTYuNTMxLS4zNTl6TTE1Ljc1IDEuMDQ3bDEyIDIyYy4zNDQuNjA5LjMyOCAxLjM1OS0uMDMxIDEuOTY5UzI2LjcwMyAyNiAyNiAyNkgyYy0uNzAzIDAtMS4zNTktLjM3NS0xLjcxOS0uOTg0cy0uMzc1LTEuMzU5LS4wMzEtMS45NjlsMTItMjJhMS45ODggMS45ODggMCAwIDEgMy41IDB6Ii8+PC9zdmc+)

## Parameters
1. type  
A case-sensitive string representing the [event type](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for.
2. listener  
The object which receives a notification (an object that implements the [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) interface) when an event of the specified type occurs.
> [event listener callback](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#The_event_listener_callback)
3. options `(Optional)`:  characteristics about the event listener.  
* capture: boolean  
是否捕获  
* once: boolean  
最多执行一次，true => 执行完就删  
* passive：boolean  
使preventDefault()无效 [Improving scrolling performance with passive listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners)
4. useCapture `(Optional)`: boolean, default false  
options.capture  
> Event bubbling and capturing are two ways of propagating events which occur in an element that is nested within another element, when both elements have registered a handle for that event  

> The event propagation mode determines the order in which elements receive the event. See [DOM Level 3 Events](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) and [JavaScript Event order](http://www.quirksmode.org/js/events_order.html#link4) for a detailed explanation.

> Note: For event listeners attached to the event target, the event is in the target phase, rather than the capturing and bubbling phases. Events in the target phase will trigger all listeners on an element in the order they were registered, regardless of the useCapture parameter.
对于事件目标上的事件监听器来说，事件会处于“目标阶段”，而不是冒泡阶段或者捕获阶段。在目标阶段的事件会触发该元素（即事件目标）上的所有监听器，而不在乎这个监听器到底在注册时useCapture 参数值是true还是false
