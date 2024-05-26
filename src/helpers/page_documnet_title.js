import i18n from "../i18n"

export default function getPageDocumentTitle(pathname, search) {
    const t = i18n.t;
    switch (pathname) {
        case "/":
            return t("Dashboard");
        default:
            return t("Dashboard");
    }
}
