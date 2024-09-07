/*==================================game=======================================*/

let you = document.getElementById('yourchoice');
let computer = ['✊', '✋', '✌️'];
function computerchoice() {
    let random_index = Math.floor(Math.random() * 3);
    document.getElementById("computerchoice").textContent = computer[random_index];
    return random_index;
}

function yourchoice(choix) {
    document.getElementById('yourchoice').textContent = choix
    let random_index = computerchoice();
    if ((computer[random_index] === '✊' && choix === '✌️') || (computer[random_index] === '✋' && choix === '✊') || (computer[random_index] === '✌️' && choix === '✋')) {
        document.getElementById('score').textContent = `vous avez perdu`
    } else if ((computer[random_index] === '✊' && choix === '✋') || (computer[random_index] === '✋' && choix === '✌️') || (computer[random_index] === '✌️' && choix === '✊')) {
        document.getElementById('score').textContent = `vous avez gagné`
    } else if ((computer[random_index] === choix)) {
        document.getElementById('score').textContent = `match nul`
    }
}
