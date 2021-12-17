
import { isString, isObjectElement } from './utils/util';
import { saveAs } from 'file-saver';
import { getXlsTpl } from './xls';

module.exports = function (tableEl, filename, type) {

    if (!tableEl) {
        throw new Error('table 来源不能为空');
    }

    if (!type) {
        type = 'xls'
    }

    const doc = document;
    let table = null

    if (isString(tableEl)) {
        table = doc.getElementById(tableEl);
    }

    if (isObjectElement(tableEl)) {
        table = tableEl
    }

    let tableData = table.outerHTML.replace(/<(\w+) (.+?)>/g, (m, p1) => `<${p1}>`).replace('<table>', '<table border>')

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
        }), filename + '.' + type);
    } else {
        // throw new Error('the supported types are: json, txt, csv, xml, doc, xls, image, pdf');
        throw new Error('目前仅支持导出xls文件');
    }
};