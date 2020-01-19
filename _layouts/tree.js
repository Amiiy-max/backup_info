var checkedList = [] // 选中列表


	// 节点单击事件
	function domClick(e){
		// 选中子元素所有input框
		var subItem = e.parentNode.nextElementSibling
		var inputList = subItem.querySelectorAll(".to__item")
		for(var i = 0; i < inputList.length; i++){
			var item = inputList[i]
			item.querySelector("input").checked = !e.querySelector("input").checked
			var subName = item.querySelector(".to__name").innerHTML
		}
		
		// 选中当前input框
		e.querySelector("input").checked = !e.querySelector("input").checked
		select(e)
	}

	// 冒泡事件
	function checkboxClick(e){
		e.checked = !e.checked
	}

	function dropClick(dom){
		// 切换样式状态
		if(dom.className.indexOf("to__roate") > -1){
			dom.className = ""
		}
		else{
			dom.className = "to__roate"
		}
		
		// 显示隐藏内容
		var domShow = dom.parentNode.parentNode.nextElementSibling
		if(domShow.className.indexOf("to__show") > -1){
			domShow.className = "to__subItem"
		}
		else{
			domShow.className = "to__subItem to__show"
		}
	}

	window.onload = function(){
		
		var endHtml = 0
		var html = ""
		var level = 1

		var data = window.data;
		// 遍历树形结构
		function getData(data, dom){
			if(Object.prototype.toString.call(data) === '[object Array]'){
				for(var i = 0; i < data.length; i++){

					// 添加标题
					var item = document.createElement("div")
					var arrow = '<span class="to__dropdownList" ><i onclick="dropClick(this)"><svg t="1550632829702" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1783" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><defs><style type="text/css"></style></defs><path d="M959.52557 254.29773 511.674589 702.334953 63.824631 254.29773Z" p-id="1784"></path></svg></i></span>'

					// 设置显示级别
					if(data[i].type == "file"){
						arrow = ""
						item.innerHTML = `<div class="to__item level-${level}"><a href=${data[i].url}>${data[i].name}</a></div>`
					} else {
						item.innerHTML = '<div class="to__item level-' + level + '">' + arrow + '<span onclick="domClick(this)"><input type="checkbox" name="cName" value="' +data[i].name+ '" onclick="checkboxClick(this)" /><div class="to__name">' +data[i].name+ '</div></span></div>'
					}
					
					dom.appendChild(item)
					
					// 添加子元素
					var subItem = document.createElement("div")
					subItem.className = "to__subItem"
					item.appendChild(subItem)

					if(data[i].children && data[i].children.length > 0){
						level++
						getData(data[i].children,subItem)
					}
					else{
						if(i == data.length - 1){
							level--
						}
					}
				}
			}
		}

		// 赋值
		var baseDom = document.createElement("div")
		getData(data,baseDom)
		document.getElementById("leftCont").innerHTML =  baseDom.innerHTML
		
	}
