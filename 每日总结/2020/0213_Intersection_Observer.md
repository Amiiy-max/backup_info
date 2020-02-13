
[mdn Intersection_Observer_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)  
[IntersectionObserver’s Coming into View](https://developers.google.com/web/updates/2016/04/intersectionobserver#what_is_intersectionobserver_not_about).   
[阮一峰 IntersectionObserver API 使用教程](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html).  

## React下使用Intersection Observer
注意重新observe
```js
class NewsList extends React.Component {
    bottomRef = React.createRef();

    shouldReobserve = false;
    
    renderLoading(noMore: boolean) {
        if (noMore) {
            this.shouldReobserve = true;
        }
        if (!noMore && this.shouldReobserve && this.bottomRef.current) {
            this.shouldReobserve = false;
            this.observer.disconnect();
            this.observer.observe(this.bottomRef.current);
        }
        return !noMore && <div ref={this.bottomRef} className={css.nextLoading} />;
    }
    
    render() {
      return <>{this.renderLoading(this.props.noMore)}</>
    }
}
```
