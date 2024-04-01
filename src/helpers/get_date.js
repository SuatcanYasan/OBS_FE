import i18n from "../i18n.js";
const t = i18n.t;
export const startDate = () => {
    const today = new Date();
    const _date = new Date(today.setDate(today.getDate() - 30));
    const year = _date.getFullYear();
    const month = _date.getMonth();
    const day = _date.getDate();
    return `${day}/${month + 1}/${year}`;
}

export const endDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${day}/${month + 1}/${year}`;
}

export const calculateTimeDifference = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const timeDifference = endDate.getTime() - startDate.getTime();
    // take hour minutes and seconds difference
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);
    return `${hoursDifference-1} ${t("Hour")} ${minutesDifference} ${t("Minute")}`;

}
