export const formatDate = (data) => {
    const options = {timeZone: "UTC", dateStyle: "short", timeStyle: "medium", hour12: false};
    const date = new Date(data);
    return new Intl.DateTimeFormat("tr-TR", options).format(date).replace(",", "");
}