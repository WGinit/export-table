export const getText = function (el) {
    var s = el.textContent || el.innerText;
    return s == null ? "" : s.replace(/^\s*(.*?)\s+$/, "$1");
};

export const replaceImgUrl = (el) => {
    let regex3 = new RegExp(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi);
    let imgArr = [], srcArr = []
    el.replace(regex3, function (match, capture) {
        if (!imgArr.includes(match)) {
            imgArr.push(match)
            srcArr.push(capture)
        }
    });
    regex3 = null;
    imgArr.forEach((item, index) => {
        el = el.replace(new RegExp(item, "g"), srcArr[index])
    })
    return el;
}

export const template = function (table) {
    // return s.replace(/{{(\w+)}}/g, function (m, p) {
    //     return c[p];
    // });
    let xml = ''
    for (var i = 0, row; row = table.rows[i]; i++) {
        xml += '<row id="' + i + '">';
        for (var j = 0, col; col = row.cells[j]; j++) {
            xml += '<column>' + getImgUrl(col) + '</column>';
        }
        xml += '</row>';
    }
    xml += '</table>';
};

export const isString = function (str) {
    return typeof str === 'string'
}


export const isObjectElement = function (object) {
    return object && typeof (object) === 'object' && Object.prototype.toString.call(object).toLowerCase() == "[object htmltableelement]";
}