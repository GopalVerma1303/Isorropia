// module.exports.getDay = this.getDay;
// module.exports.getDate = this.getDate;
exports.getDate = function() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
}
exports.getDay = function() {
    let today = new Date();
    let options = {
        weekday: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day; 
}
console.log(module.exports)