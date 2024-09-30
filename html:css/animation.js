window.addEventListener('scroll',()=>{
    const scroll= window.scrollY;
    const cube = document.querySelector('.cube');
    cube.style.transform=`rotateX(${scroll}deg) rotateY(${scroll}deg)`
})