document.getElementById("secondary-nav").addEventListener("click", collapse);

function collapse() {
    if (document.getElementById("collapsable-nav").style.visibility === "visible") {
        document.getElementById("collapsable-nav").style.visibility = "hidden";
        document.getElementById("secondary-nav").innerHTML = "&#x25B2;"
    }
    else {
        document.getElementById("collapsable-nav").style.visibility = "visible";
        document.getElementById("secondary-nav").innerHTML = "&#x25BC;"
    }
}