const fs = require("fs");
const path = require("path");
const rootFolder = "./";
const urlPrefix = "https://gugegev5.github.io/backup_info/";
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
        ${catalogJson}
        {% if site.github.is_project_page %}
        <p>This project is maintained by <a href="{{ site.github.owner_url }}">{{ site.github.owner_name }}</a></p>
        {% endif %}
        <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
      </footer>
    </div>
    <script src="{{ "/assets/js/scale.fix.js" | relative_url }}"></script>
    {% if site.google_analytics %}
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', '{{ site.google_analytics }}', 'auto');
      ga('send', 'pageview');
    </script>
    {% endif %}
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
