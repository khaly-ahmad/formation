const input = document.getElementById("input");
const build = document.getElementById('build');
const copy = document.getElementById('copy');
const chars = "poiuytrezaqsdfghjklmnbvcxw0123456789/.@#$*€%&";


build.addEventListener('click', () => {
    let password = '';
    for (let i = 0; i < 32; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    input.value = password
    console.log(build.value)
})

copy.addEventListener('click',()=>{
    input.select();
    document.execCommand('copy');
    alert("mot de passe copié avec succès dans le presse-papier")
})