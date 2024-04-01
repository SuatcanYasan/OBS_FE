import i18n from "../i18n"

export default function getPageDocumentTitle(pathname, search) {
    const t = i18n.t;
    switch (pathname) {
        case "/":
            return t("Dashboard");
        case "/field":
            return t("Field");
        case "/alarm":
            return t("Alarm");
        case "/customers":
            return t("Customers");
        case "/field-management":
            return t("Field Management");
        case "/inverters":
            return t("Inverters");
        case "/transformer":
            return t("Transformer Substation (I/O)");
        case "/customers/tasks":
            return t("Tasks");
        case "/grid-values":
            return t("Grid Values");
        case "/compensation":
            return t("Compensation");
        case "/report":
            return t("Report");
        default:
            return t("Dashboard");
    }
}
