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
## methods
#### export2excel

```javascript
const options = {
    el: 'export-table',
    type: 'xls',
    fileName: ''
}
export2excel(options)
```

#### options
| 参数 | 类型 | 是否必填 | 说明|
|:---:|:---:|:---:| :---: |
| el | string 或 element| Y | table的id 或 table的htmltableelement |
| type | string | N | 导出的文件类型，默认xls，目前仅支持xls |
| fileName | string | N | 导出的excel名称 |
| datas | array | N | API接口返回的数据的导出 |

datas 结构:
```javascript
[{
    sheetData: [ // API 接口返回的数据
        { one: "一行一列", two: "一行二列" },
        { one: "二行一列", two: "二行二列" },
    ],
    sheetName: "sheet1",  // 当前单表的名称
    sheetFilter: ["two", "one"], // 需要显示的字段
    sheetHeader: ["第一列", "第二列"],  // excel 标题
    columnWidths: [20, 20], // 自定义excel列宽
}]
```
datas内一个Object为一个excel表格，可以一次导出多张表格。
## Demo
```javascript
// 安装
pnpm i table-export-file
// 引入
const export2excel = require('table-export-file')

// 1、导出单页表格数据

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


// 2、导出API接口数据
const ret = await storeService()
export2excel({
    fileName: 'test', // 文件名
    datas: [{
        sheetData: ret,
        sheetName: 'sheet',
        sheetHeader: ['店铺名称', '店铺SN'],
        sheetFilter: ['store_name', 'store_sn'],
        columnWidths: [100, 100]
    }]
})

```

### ToDo
- [ ] 增加pdf、csv、doc等多种文件导出
- [ ] 增加Typescript
