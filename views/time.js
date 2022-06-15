exports.getTime = function () {
    var today = new Date();
    var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    return time;
}