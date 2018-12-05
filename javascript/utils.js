function hide(id) {
    let element = get(id);
    element.style.display = "none";
}

function show(id) {
    let element = get(id);
    element.style.removeProperty("display");
}

function get(id) {
    return document.getElementById(id);
}

function clear(view) {
    while (view.firstChild) {
        view.removeChild(view.firstChild);
    }
}