function creationFlocons() {
    const taille = Math.floor(Math.random() * 5)+ 5;
    let position = Math.floor(Math.random() * window.innerWidth);
    let duree = Math.floor(Math.random() * 5) + 5;
    const flocon = document.createElement('div');
    flocon.classList.add('boule');
    document.body.appendChild(flocon);
    flocon.style.width = `${taille}px`;
    flocon.style.height = `${taille}px`;
    flocon.style.left = `${position}px`;
    flocon.style.animationDuration = `${duree}s`
}

setInterval(creationFlocons,500);