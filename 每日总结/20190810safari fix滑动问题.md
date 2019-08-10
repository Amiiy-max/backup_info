[深入研究-webkit-overflow-scrolling:touch及ios滚动](https://www.cnblogs.com/xiahj/p/8036419.html)

```
<div id='confirm_order'>
  <Header title="确认订单"/>
  <div className="content">
    <div className="content_forbid_fix_scroll">
      body content
    </div>
  </div>
  
  <div id="bottomBoxWrap">
    <div className='bottom_box'>
      bottom fix button
    </div>
  </div>
</div>





#confirm_order {
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .content {
    margin-bottom: 54px;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .content_forbid_fix_scroll {
      min-height: 100.1%;
    }
  }
}

#bottomBoxWrap{
    position: fixed;
    bottom: 0px ;
    left: 0px;
    width:100%;
    .bottom_box{
      padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
      padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
    }
}
```
