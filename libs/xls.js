import { replaceImgUrl } from './utils/util'
import ExportJsonExcel from "js-export-excel";


export const getXlsTpl = (table, charset, type) => {
    const tpl = `<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:WorksheetOptions><x:Print><x:ValidPrinterInfo /></x:Print></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml></head><style>table{vnd.ms-excel.numberformat:@;}</style>${replaceImgUrl(table)}</html>`;
    return tpl
}


export const exportDataXls = ({fileName = '表格', datas = []}) => {

    let options = {
        fileName,
        datas
    }

    const toExcel = new ExportJsonExcel(options); //new
    toExcel.saveExcel();
}