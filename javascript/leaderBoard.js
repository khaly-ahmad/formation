const squad = [];
const bodyBoard = document.querySelector('tbody');
const nameInput = document.getElementById('name');
const matchInput = document.getElementById('match');
const pointInput = document.getElementById('point');
function addPlayer(nom, match, point) {
    if (isNaN(match) || isNaN(point)|| match===''||point==='') {
        alert("verifier la saisie");
    } else {
        const player = { name: nom, match: match, point: point };
        squad.push(player);
        sortSquad();
        displaySquad();
        localStorage.setItem('squad', JSON.stringify(squad));
    }
}
function sortSquad() { squad.sort((a, b) => b.point - a.point); }
function displaySquad() {
    bodyBoard.innerHTML = '';
    let conteur = 1;
    squad.forEach((player,index) => {
        const tr = document.createElement('tr')
        tr.innerHTML =
            `<td>${conteur}</td>
                <td>${player.name}</td>
                <td>${player.match}</td>
                <td>${player.point}</td>`
        bodyBoard.appendChild(tr);
        tr.addEventListener('dblclick',()=>{
            squad.splice(index,1);
            displaySquad();
        })
         conteur++;});
}
function addButton() {
    addPlayer(nameInput.value, matchInput.value, pointInput.value);
}
document.addEventListener('DOMContentLoaded',(event)=>{
    const storedSquad=localStorage.getItem('squad');
    if(storedSquad){
        squad=JSON.parse(storedSquad);
        displaySquad();
    }
});