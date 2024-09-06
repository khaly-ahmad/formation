
/*==================================timer=======================================*/
let timer;
let second = 0;
let running = false;

const affichage = document.getElementById('affichage');

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    second = 0;
    affichage.innerHTML = `00:00:00`
}


function updateTime() {
    second++
    let heur = Math.floor(second / 3600);
    let minute = Math.floor((second % 3600) / 60);
    let secs = second % 60;

    affichage.innerHTML = (heur < 10 ? "0" : "") + heur + ":" + (minute < 10 ? "0" : "") + minute + ":" + (secs < 10 ? "0" : "") + secs;
}

