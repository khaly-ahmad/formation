
function showHours() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    const updateHours = `${hours}:${minutes}:${seconds}`

    document.getElementById("clock").textContent = updateHours;
    document.getElementById("clock").style.fontSize = "60px"
}
setInterval(showHours, 1000);
