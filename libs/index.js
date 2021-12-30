
import { isString, isObjectElement } from './utils/util';
import { saveAs } from 'file-saver';
import { getXlsTpl, exportDataXls } from './xls';

module.exports = function ({el = null, fileName = '表格', type = 'xls', datas = []}) {

    // 直接导出后台接口数据
    if (datas.length) {
        exportDataXls({
            fileName,
            datas
        })
        return
    }

    if (!el) {
        throw new Error('table 来源不能为空');
    }
    const doc = document;
    let table = null

    if (isString(el)) {
        table = doc.getElementById(el);
    }

    if (isObjectElement(el)) {
        table = el
    }

    // let tableData = table.outerHTML.replace(/<(\w+) (.+?)>/g, (m, p1) => `<${p1}>`).replace('<table>', '<table border>')

    let tableData = table.outerHTML.replace('<table>', '<table border>')

    let charset = doc.characterSet;

    let uri = {
        xls: 'application/vnd.ms-excel',
    };

    let typeMap = {
        xls: (table, charset, type) => getXlsTpl(table, charset, type)
    };

    let typeFunc = typeMap[type];

    if (typeof typeFunc === 'function') {
        let data = typeFunc(tableData, charset, type);
        saveAs(new Blob([data], {
            type: uri[type]
        }), fileName + '.' + type);
    } else {
        // throw new Error('the supported types are: json, txt, csv, xml, doc, xls, image, pdf');
        throw new Error('目前仅支持导出xls文件');
    }
};