
export const getXlsTpl = (table, charset, type) => {
    const tpl = `<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:WorksheetOptions><x:Print><x:ValidPrinterInfo /></x:Print></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml></head><style>table{vnd.ms-excel.numberformat:@;}</style>${table}</html>`;
    return tpl
}