window.onresize = function(event) {
    document.location.reload(true);
}

let href = window.location.href.split("/");
let htmlLocation = href[href.length-1];

if (window.innerWidth >= 1290 && htmlLocation !== "index.html") {
    window.location = "index.html";
}

if (window.innerWidth < 1290 && htmlLocation !== "index2.html") {
    window.location = "index2.html";
}