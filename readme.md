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
### methods
#### export2excel

```javascript
// tableEl: 可以是table的id，也可以是table的htmltableelement， fileName为导出的excel文件名
export2excel({
    el: 'export-table',
    type: 'xls',
    fileName: ''
})

```

#### options
| 参数 | 类型 | 是否必填 | 说明|
|:---:|:---:|:---:| :---: |
| el | string 或 element| Y | table的id 或 table的htmltableelement |
| type | string | N | 导出的文件类型，默认xls，目前仅支持xls |
| fileName | string | N | 导出的excel名称 |


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
export2excel({
    el: 'export',
    fileName: 'test'
})
或者
const el = document.getElementById('export')
export2excel({
    el,
    fileName: 'test'
})   // 这种适合对table数据二次自定义后再导出

```

### ToDo
- [ ] 增加pdf、csv、doc等多种文件导出
- [ ] 增加Typescript
