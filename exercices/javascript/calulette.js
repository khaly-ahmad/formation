
function add_to_display(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let result = eval(document.getElementById("display").value)
    document.getElementById("display").value = result
}

function clear_display() {
    document.getElementById("display").value = "";
}