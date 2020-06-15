export const getFormattedDateString = (dateString) => {
    return new Date(dateString).toDateString().substr(4);
}