const fs = require("fs");
const path = require("path");
const rootFolder = "./";
//const urlPrefix = "https://gugegev5.github.io/backup_info/";
const urlPrefix = "";
const ignorePaths = [
  ".catalog",
  ".github",
  ".git",
  "package.json",
  ".gitignore",
  "_config.yml"
];

function isIgnore(p) {
  return ignorePaths.some(path => p.search(path) != -1);
}

function getDirObj(name) {
  return {
    name,
    type: "directory",
    children: []
  };
}

function getFileObj(name, url) {
  return {
    name,
    type: "file",
    url
  };
}

function getCatalogJson(folder, parentNode) {
  const f = fs.readdirSync(folder, { withFileTypes: true });
  f.forEach(item => {
    const fullname = path.join(folder, item.name);
    if (item.isDirectory() && !isIgnore(fullname)) {
      const dirObj = getDirObj(item.name);
      parentNode.children.push(dirObj);
      getCatalogJson(fullname, dirObj);
    } else if (item.isFile() && !isIgnore(fullname)) {
      if (item.name == "README.md") {
        const parentUrl = path.join(urlPrefix, folder);
        parentNode.url = parentUrl;
      } else {
        let fileName;
        if (path.extname(item.name) == ".md") {
          fileName = `${item.name.substring(
            0,
            item.name.lastIndexOf(".md")
          )}.html`;
        } else {
          fileName = item.name;
        }
        const url = path.join(urlPrefix, folder, fileName);

        const fileObj = getFileObj(item.name, url);
        parentNode.children.push(fileObj);
      }
    }
  });
}

function getCatalog() {
  const folder = rootFolder;
  const catalogJson = {
    name: "top",
    children: []
  };

  getCatalogJson(folder, catalogJson);
  return catalogJson.children;
}
const catalogJson = JSON.stringify(getCatalog());
const templateHtml = `
<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body {
          background-color: #c2ddff;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23c0e4f8' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23bdebf1' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23baf2ea' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23b7f8e2' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23b3ffdb' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23c5fcd6' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23d5f9d1' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23e4f6cc' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f2f3c7' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23fff0c2' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          background-size: cover;
      }

      /* index.css */


      .to__header .to__addUser {
        margin: 0 auto;
        width: 90%;
        font-size: 20px;
      }
      .to__header .to__flow {
        margin: 0 auto;
        padding: 15px 0;
        width: 90%;
        display: block;
      }
      .to__header .to__flow .to__flow__item {
        position: relative;
        width: 30%;
        color: #999;
        display: inline-block;
      }
      .to__header .to__flow .to__flow__item .to__round {
        margin-right: 12px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border: 1px solid #999;
        border-radius: 50%;
        display: inline-block;
      }
      .to__header .to__flow .to__flow__item .to__active {
        color: #fff;
        background-color: #175ad8;
        border: 1px solid #175ad8;
      }
      .to__header .to__flow .to__flow__item .to__flow__name {
        display: inline-block;
        cursor: pointer;
      }
      .to__header .to__flow .to__flow__item::after {
        margin: auto 0;
        content: ">";
        position: absolute;
        right: 33%;
        top: 0;
        bottom: 0;
        height: 20px;
        line-height: 20px;
        font-size: 26px;
      }
      .to__header .to__flow .to__flow__item:last-child::after {
        content: "";
      }
      .to__block {
        text-align: center;
      }
      .to__block .to__left,
      .to__block .to__right {
        display: inline-block;
        vertical-align: text-top;
      }
      .to__block .to__left .to__item,
      .to__block .to__right .to__item {
        margin-left: -100px;
        padding-left: 140px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #eee;
      }
      .to__block .to__left .to__title,
      .to__block .to__right .to__title {
        line-height: 30px;
        text-align: left;
      }
      .to__block .to__left .to__title .to__remark,
      .to__block .to__right .to__title .to__remark {
        color: #999;
        display: inline-block;
      }
      .to__block .to__left .to__content,
      .to__block .to__right .to__content {
        width: 100%;
        height: 300px;
        text-align: left;
        border: 1px solid #ccc;
        box-sizing: border-box;
        overflow-y: auto;
      }
      .to__block .to__left .to__content .to__search,
      .to__block .to__right .to__content .to__search {
        position: relative;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
      }
      .to__block .to__left .to__content .to__search input,
      .to__block .to__right .to__content .to__search input {
        padding-left: 20px;
        padding-right: 100px;
        width: 100%;
        border: none;
        box-sizing: border-box;
      }
      .to__block .to__left .to__content .to__search .to__icon__search,
      .to__block .to__right .to__content .to__search .to__icon__search {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 30px;
        border-left: 1px solid #ccc;
      }
      .to__block .to__left .to__content .to__search .to__icon__search svg,
      .to__block .to__right .to__content .to__search .to__icon__search svg {
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .to__block .to__left {
        position: relative;
        width:100%;
      }
      .to__block .to__left > div .to__subItem {
        padding-left: 20px;
        display: none;
      }
      .to__block .to__left > div .to__show {
        display: block;
      }
      .to__block .to__left .to__arrow {
        margin: auto 0;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        color: #999;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        transform: translateX(120%);
      }
      .to__block .to__left .to__arrow span:last-child {
        margin-left: -16px;
      }
      .to__block .to__left .to__item {
        position: relative;
      }
      .to__block .to__left .to__item .to__dropdownList {
        position: relative;
      }
      .to__block .to__left .to__item .to__dropdownList i {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 6px;
        width: 12px;
        height: 12px;
        display: inline-block;
        margin: auto 0;
        cursor: pointer;
        transform: rotate(-90deg);
      }
      .to__block .to__left .to__item .to__dropdownList i svg {
        position: absolute;
        z-index: 2;
      }
      .to__block .to__left .to__item .to__dropdownList .to__roate {
        transform: rotate(0);
      }
      .to__block .to__left .to__item input[type="checkbox"] {
        position: relative;
        margin-right: 6px;
        -webkit-appearance: none;
        vertical-align: middle;
        margin-top: 0;
        background: #fff;
        border: #ccc solid 1px;
        min-height: 12px;
        min-width: 12px;
      }
      .to__block .to__left .to__item input[type="checkbox"]:checked {
        background: #3190e8;
      }
      .to__block .to__left .to__item input[type=checkbox]:checked::after {
        content: '';
        top: 2px;
        left: 1px;
        position: absolute;
        background: transparent;
        border: #fff solid 2px;
        border-top: none;
        border-right: none;
        height: 2px;
        width: 6px;
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      .to__block .to__left .to__item .to__name {
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
      }
      .to__block .to__right {
        position: relative;
      }
      .to__block .to__right .to__item {
        position: relative;
      }
      .to__block .to__right .to__item .to__close {
        margin: auto 0;
        position: absolute;
        right: 12px;
        top: 0;
        bottom: 0;
        cursor: pointer;
      }
      .to__block .to__right .to__item .to__close i {
        font-size: 20px;
        transform: rotate(45deg);
        font-style: normal;
        display: inline-block;
      }
      .to__footer {
        margin-top: 15px;
        text-align: center;
      }
      .to__footer .to__btn__group {
        display: inline-block;
      }
      .to__footer .to__btn__group .to__btn {
        margin: 0 25px;
        padding: 8px 0;
        width: 80px;
        border: 1px solid #999;
        display: inline-block;
      }
      .to__footer .to__btn__group .to__btn__primary {
        color: #fff;
        background-color: #175ad8;
      }

    </style>
{% seo %}
    <link rel="stylesheet" href="{{ "/assets/css/style.css?v=" | append: site.github.build_revision | relative_url }}">
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="wrapper">
      <header>
        <h1><a href="{{ "/" | absolute_url }}">{{ site.title | default: site.github.repository_name }}</a></h1>
        
        {% if site.logo %}
          <img src="{{site.logo | relative_url}}" alt="Logo" />
        {% endif %}

        <p>{{ site.description | default: site.github.project_tagline }}</p>

        {% if site.github.is_project_page %}
        <p class="view"><a href="{{ site.github.repository_url }}">View the Project on GitHub <small>{{ site.github.repository_nwo }}</small></a></p>
        {% endif %}

        {% if site.github.is_user_page %}
        <p class="view"><a href="{{ site.github.owner_url }}">View My GitHub Profile</a></p>
        {% endif %}

        {% if site.show_downloads %}
        <ul class="downloads">
          <li><a href="{{ site.github.zip_url }}">Download <strong>ZIP File</strong></a></li>
          <li><a href="{{ site.github.tar_url }}">Download <strong>TAR Ball</strong></a></li>
          <li><a href="{{ site.github.repository_url }}">View On <strong>GitHub</strong></a></li>
        </ul>
        {% endif %}
      </header>
      <section>

      {{ content }}

      </section>
      <footer>
        <div class="to__block">
          <div class="to__left">
            <div class="to__content" id="leftCont"></div>
          </div>
        </div>
        {% if site.github.is_project_page %}
        <p>This project is maintained by <a href="{{ site.github.owner_url }}">{{ site.github.owner_name }}</a></p>
        {% endif %}
        <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
      </footer>
    </div>
    <script src="{{ "/assets/js/scale.fix.js" | relative_url }}"></script>
    <script>
      window.treeData = ${catalogJson}

      var checkedList = [] // 选中列表
      // 节点单击事件
      function domClick(e) {
        // 选中子元素所有input框
        var subItem = e.parentNode.nextElementSibling
        var inputList = subItem.querySelectorAll(".to__item")
        for (var i = 0; i < inputList.length; i++) {
          var item = inputList[i]
          item.querySelector("input").checked = !e.querySelector("input").checked
          var subName = item.querySelector(".to__name").innerHTML
        }

        // 选中当前input框
        e.querySelector("input").checked = !e.querySelector("input").checked
        select(e)
      }

      // 冒泡事件
      function checkboxClick(e) {
        e.checked = !e.checked
      }

      function dropClick(dom) {
        // 切换样式状态
        if (dom.className.indexOf("to__roate") > -1) {
          dom.className = ""
        }
        else {
          dom.className = "to__roate"
        }

        // 显示隐藏内容
        var domShow = dom.parentNode.parentNode.nextElementSibling
        if (domShow.className.indexOf("to__show") > -1) {
          domShow.className = "to__subItem"
        }
        else {
          domShow.className = "to__subItem to__show"
        }
      }

      window.onload = function () {

        var endHtml = 0
        var html = ""
        var level = 1

        var data = window.treeData;
        // 遍历树形结构
        function getData(data, dom) {
          if (Object.prototype.toString.call(data) === '[object Array]') {
            for (var i = 0; i < data.length; i++) {

              // 添加标题
              var item = document.createElement("div")
              var arrow = '<span class="to__dropdownList" ><i onclick="dropClick(this)"><svg t="1550632829702" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1783" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"><defs><style type="text/css"></style></defs><path d="M959.52557 254.29773 511.674589 702.334953 63.824631 254.29773Z" p-id="1784"></path></svg></i></span>'

              // 设置显示级别
              if (data[i].type == "file") {
                arrow = ""
                item.innerHTML = '<div class="to__item level-' + level + '"><a href='+data[i].url+'>'+data[i].name+'</a></div>'
              } else {
                item.innerHTML = '<div class="to__item level-' + level + '">' + arrow + '<span onclick="domClick(this)"><input type="checkbox" name="cName" value="' + data[i].name + '" onclick="checkboxClick(this)" /><div class="to__name">' + data[i].name + '</div></span></div>'
              }

              dom.appendChild(item)

              // 添加子元素
              var subItem = document.createElement("div")
              subItem.className = "to__subItem"
              item.appendChild(subItem)

              if (data[i].children && data[i].children.length > 0) {
                level++
                getData(data[i].children, subItem)
              }
              else {
                if (i == data.length - 1) {
                  level--
                }
              }
            }
          }
        }

        // 赋值
        var baseDom = document.createElement("div")
        getData(data, baseDom)
        document.getElementById("leftCont").innerHTML = baseDom.innerHTML

      }
    </script>
  </body>
</html>

`

fs.writeFile("_layouts/default.html", templateHtml, err => {
  if (err) throw err;
  console.log("_layouts/default.html生成成功");
});
fs.writeFile(".catalog/catalog.json", catalogJson, err => {
  if (err) throw err;
  console.log("catalog.json更新成功");
});
