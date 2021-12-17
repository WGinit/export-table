# table 表格数据导出excel

方便将table表格数据导出为Excel，所见即所得。

![](https://github.com/WGinit/Assets/blob/master/images/memo/121719554753_01.png)



### 本地运行

```javascript
git clone https://github.com/WGinit/export-table.git
cd export-table
pnpm i

// 本地运行
yarn dev

// 打包
yarn build

```
### 方法
```javascript

// tableEl: 可以是table的id，也可以是table的htmltableelement， fileName为导出的excel文件名
export2excel(tableEl, fileName)

```

### Demo
```javascript
// 安装
pnpm i table-export-file
// 引入
const export2excel = require('table-export-file')

`<table id="export">
    <thead>...</thead>
    <tbody>...<tbody>
</table>`

// 导出
export2excel('export', 'test')
或者
const el = document.getElementById('export')
export2excel(el, 'test')   // 这种适合对table数据二次自定义后再导出

```

### ToDo
- [ ] 增加pdf、csv、doc等多种文件导出
- [ ] 增加Typescript
