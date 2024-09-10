

const hourDiv = document.querySelector(".hour");
const minuteDiv = document.querySelector(".min");
const secondDiv = document.querySelector(".second");


function aiguilMove() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = (minutes / 60) * 360;
    const secondAngle = (seconds / 60) * 360;

    hourDiv.style.transform = `rotate(${hourAngle}deg)`;
    minuteDiv.style.transform = `rotate(${minuteAngle}deg)`;
    secondDiv.style.transform = `rotate(${secondAngle}deg)`;

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    const updateHours = `${hours}:${minutes}:${seconds}`
    document.querySelector('.heure').textContent = `${hours}:${minutes}:${seconds}`;

}
setInterval(aiguilMove, 1000);

const numerique = document.querySelector('.numerique');
const analogique = document.querySelector('.analogique');


function changeToNumerique() {
    console.log(analogique)
    analogique.style.display = 'none';
    numerique.style.display = 'flex';
}

function changeToAnalogique() {
    analogique.style.display = 'flex'
    numerique.style.display = 'none'
}