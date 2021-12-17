export const getText = function (el) {
    var s = el.textContent || el.innerText;
    return s == null ? "" : s.replace(/^\s*(.*?)\s+$/, "$1");
};

export const template = function (s, c) {
    return s.replace(/{{(\w+)}}/g, function (m, p) {
        return c[p];
    });
};

export const isString = function (str) {
    return typeof str === 'string'
}


export const isObjectElement = function (object) {
    return object && typeof (object) === 'object' && Object.prototype.toString.call(object).toLowerCase() == "[object htmltableelement]";
}