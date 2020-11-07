const http = require("http"),
    hostname = "0.0.0.0",
    port = 8080;

function getFormat(e) {
    return e.toLocaleString().length > 1 ? e : "0" + e.toLocaleString()
}

function calcTime(e, t) {
    let n = new Date,
        r = n.getTime() + 6e4 * n.getTimezoneOffset(),
        o = new Date(r + 36e5 * t);
    return e + ": " + getFormat(o.getHours()) + ":" + getFormat(o.getMinutes()) + " " + getFormat(o.getDay()) + "." + getFormat(o.getMonth()) + "; "
}
const server = http.createServer((e, t) => {
    t.statusCode = 200, t.setHeader("Content-Type", "text/plain"), t.end(calcTime("Lublin", "+1")+ "<br>" + calcTime("New York", "-4") + "<br>" +calcTime("Sydney", "+11"))
});
server.listen(8080, hostname, () => {
    console.log("Server running at http://0.0.0.0:8080/")
});
