
/*==================================text-animation===============================*/
const text = (document.getElementById('text-animation'));
const array_text = text.textContent.split(" ");
let index_array = 0;
text.textContent = "";

function arrayFunction() {
    if (index_array < array_text.length) {
        text.textContent += " " + array_text[index_array];
        index_array++
    }
    else {
        clearInterval(boucle)
        console.log(boucle);
    }
}
var boucle = setInterval(arrayFunction, 100)

