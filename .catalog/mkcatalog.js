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

fs.writeFile(".catalog/catalog.json", JSON.stringify(getCatalog()), err => {
  if (err) throw err;
  console.log("catalog生成成功");
});
