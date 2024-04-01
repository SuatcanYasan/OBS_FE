import {formatDate} from "../helpers/formatDate";

export const OnExporting = (e) => {
    e.component.beginUpdate()
    const columns = e.component.getVisibleColumns();
    columns.forEach((column) => {
        e.component.columnOption(column.dataField, "customizeText", function(e){
            return e.valueText;
        });
    })
}
export const OnExported = (e) => {
    const columns = e.component.getVisibleColumns();
    columns.forEach((column) => {
        if (column.format?.name == "formatDate" || column.format?.name == "currencyFractionFormat") {
            e.component.columnOption(column.dataField, "customizeText", function(e){
                return formatDate(e.value);
        });
    }})
    e.component.endUpdate();
}