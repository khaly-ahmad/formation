
/*const PI = 3.14;
let geometrie = ()=>{
    let operation = prompt("veuillez saisir le type d'operation pour le cercle qui vous convient");
    if (operation==="perimetre"){
        r = prompt("saisir la valeur du rayon");
        perimetre = 2 * PI * r ;
        document.write(perimetre);
    }else if (operation==="surface") {
        r = prompt("saisir la valeur du rayon");
        surface = 2 * PI * r * r;
        document.write(surface);
    } else {
        alert("verifez votre saisi!!");
    }
    
}
geometrie();
    =========================================================
let dividende = prompt("enter the dividende number");
let diviseur = prompt ("enter the divisor number");
let quotient = parseInt(dividende / diviseur);
let rest = dividende - (quotient*diviseur);
document.write("le quotient de la division egal : " + quotient ); 
document.write(" <br> et le reste egal est : " + rest);
    =========================================================
let number = 50;
for (let i = 1; i <= 50; i++) {
    if ( i % 2 == 0) {
        document.write("[" + i + "] est pair" + "<br>");
    }
}
    ==========================================================
let array = [5, 45, 6, 8, 10];
let somme=0;
for (let i = 0; i < 5; i++) {
    somme = somme + array[i];
}
document.write(somme+"<br>");
    ==========================================================
let multiplication=prompt("veuillez saisir un nombre pour voir sa multiplication") ;
for (i = 1 ; i<= 10; i++){
    document.write(multiplication + "*" + i + "=" + i*multiplication + "<br>");
}
    ==========================================================
let phrase = prompt("saisir une phrase au choix");
let compter = 0;
let t = phrase.split('');
let voyelle = [ 'A','E','I','O','U','Y'];
for (i = t.length-1; i >= 0; i--) {
    let cas=phrase[i].toUpperCase();
    if (voyelle.includes(cas)) {
        compter = compter + 1;
    }
    document.write("tableau inverser ["+t[i]+"]<br>")
}
document.write("il y a " + compter + " voyelle");
===============================================================
class Voiture{
    constructor(marque,model,annee){
        this.marque=marque;
        this.model=model;
        this.annee=annee;
    }
    description(){
        document.write(`cette voiture est une ${this.marque} ${this.model} de l'annee ${this.annee}`+"<br>");
    }
    static nombreDeRoues(){
        document.write("a quatre (4) roues");
    }
};
const maVoiture = new Voiture("toyota","carolla",2024);
maVoiture.description();
Voiture.nombreDeRoues();
==============================================================
*/
/*
 class Rectangle {
     constructor(width,height){
         this.width=width;
         this.height=height;
     }
     aire(){
         /*console.log(`l'aire du rectangle est egal a ${this.width * this.height}`);
         return this.width * this.height
     }
     perimetre(){
         return (this.width + this.height)*2
     }
 }
 class Carre extends Rectangle {
     constructor(cote){
        super(cote,cote);
     }
 }
 
 const monRect= new Rectangle(40,50);
 const monCarre= new Carre(50);
 console.log(monRect.aire());
 console.log(`le perimetre du rectangle est egal a ${monRect.perimetre()}`);
 console.log(`l'aire du carré est égale a ${monCarre.aire()}`);*/


/*class Cercle{
    constructor(rayonValue){
        this._rayon=rayonValue;
    }

    set rayonValue(valeur){
        this._rayon=valeur;
    }

    get rayonValue(){
        return this._rayon;
    }
    
    aire(){
        return console.log(`l'aire du cercle est egal a ${this._rayon*2*3.14}`);
    }
}

const monCercle= new Cercle(5);
monCercle.aire();
monCercle.rayonValue= 50;
monCercle.aire();

========================================================
class CompteBancaire{
    #solde
    constructor(initSolde){
        this.#solde=initSolde;
    }
    depot(montant){
        this.#solde += montant;
    }
    retrait(montant){
        this.#solde -= montant;
    }
    showMontant(){
        console.log(`le montant de votre compte bancaire est ${this.#solde} € `)
    }
};

const monCompte = new CompteBancaire(80000);
monCompte.depot(50000);
monCompte.showMontant();
monCompte.retrait(5000);
monCompte.showMontant();
=============================================================

class MathsUtils{
    static power(number){
        console.log(`la puissance du nombre saisi est egal à ${number*number}`)
    }
};

console.log(MathsUtils.power(15));
====================================================
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Friends {
    constructor() {
        this.friends = [];
    }
    addFriend(friend) {
        this.friends.push(friend);
    }
    printFriend(){
        console.log(this.friends);
    }
}
const myFriend= new Friends();
let ami1=new Person("khaly",10);
let ami2=new Person("ahmad",20);
let ami3=new Person("diallo",30);
myFriend.addFriend(ami1);
myFriend.addFriend(ami2);
myFriend.addFriend(ami3);
myFriend.printFriend()
========================================================
class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sePresenter(){
        document.write(`hello my name is ${this.name} i'm ${this.age} year old`)
    }
    static creatAdult(name){
        document.write(`${this.age}`);
    }
}
const moi= new Person("Khaly Ahmad", 20);
moi.sePresenter()

class Student extends Person {
    constructor(school){
        super(name, school)
        this.school=school;
    }
    
    study(){
        document.write(`<br>I'm study at ${this.school}`);
    }
}

const ecole=new Student("GSTM");
ecole.study();
==============================================
const animal={
    parler(){
        console.log(`l'animal fait du bruit`);
    }
}
const chien=Object.create(animal);
chien.parler=function(){
    console.log(`woof`);
}
chien.parler();
=======================================================
class Person {
    constructor(nom,prenom){
        this.nom=nom;
        this.prenom=prenom;
    }

    get nomComplet(){
        return `${this.prenom} ${this.nom}`
    }

    set nomComplet(nomComplet){
        [this.prenom,this.nom]=nomComplet.split(' '); 
    }

}

const personne= new Person("diallo","khaly ahmad");

console.log(personne.nomComplet);
personne.nomComplet="khaly-ahmad diallo";
console.log(personne.nom);
console.log(personne.prenom);
=========================================================================
const menu=document.getElementById("menu");
const newElement=document.createElement("li");
newElement.textContent="blog";
menu.appendChild(newElement);
const aboutElement= menu.children[1];
aboutElement.remove();
contactElement=menu.children[1];
contactElement.textContent="contact us";
const firstchild=menu.firstElementChild;
firstchild.classList.add("highligh")
console.log(firstchild)*/
/*
=========================================================

const content = document.getElementById("content");
const newListItem = document.createElement("p");
newListItem.textContent = "un nouveau paragraphe";
content.insertBefore(newListItem, content.lastElementChild)
const button = document.createElement("button");
button.textContent = "cliquez-moi";
content.append(button);
const paragraph = content.children[2];
paragraph.classList.toggle("Highlight");

const list = document.getElementById("list");
list.removeChild(list.children[2]);
const lastchild = list.lastElementChild;
lastchild.remove();


const profile = document.getElementById("profile");
const firstchild = profile.firstElementChild;
firstchild.textContent = "NOM : AHMAD KHALY";
profile.lastElementChild.setAttribute("id", "profession");

let article = document.getElementById("article");
let article3 = document.createElement("article");
article3.innerHTML = "<h2>titre de l'article 3</h2><p>paragraphe de l'article 3</p>";
article.append(article3);
article3.classList.add("important");
article3.previousElementSibling.remove();

const banner=document.getElementById("banner");
banner.classList.add("blue-background");
banner.classList.remove("header");
banner.firstElementChild.setAttribute("class","highlight");

let btn=document.getElementById("btn");
let p=document.getElementById("p");
btn.addEventListener("click", function(){
    p.textContent="là vous avez rellement clické sur le boutbon"
})

let checkbox=document.getElementById("checkbox")
checkbox.addEventListener("click",function(){
    if (btn.addEventListener(event)){
        alert("vous avez bien fait de le cocher");
    }
})
*/
/*=================================compteur-click================================*/
const ajout = document.getElementById("ajout");
const rejet = document.getElementById("rejet");
let count = 0;
ajout.addEventListener("click", function () {
    count++;
    document.getElementById("conteur").textContent = count
})

rejet.addEventListener("click", function () {
    count = 0;
    document.getElementById("conteur").textContent = count
})

/*================================background-color===============================*/
const background = document.getElementById("background");
background.addEventListener("mouseover", function () {
    background.style.backgroundColor = "red";
    background.addEventListener("mouseout", function () {
        background.style.backgroundColor = "gray";
    })
})

/*==================================formulaire-validation========================*/
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name == "" || email == "") {
        alert("inscription non valid");
    } else {
        alert("felicitation vous avez bien saisi le formulaire");
    }
})

/*==================================add-text=====================================*/
const add = document.getElementById("add");
const add_Btn = document.getElementById("add_Btn");
const remove_btn = document.getElementById("remove_btn");
add_Btn.addEventListener("click", function () {
    if (add.value != "") {
        const li = document.createElement("li");
        li.textContent = add.value;
        document.getElementById("ul").append(li);
        add.value = "";
    }
});

remove_btn.addEventListener("click", function () {
    let parent = document.getElementById("ul");
    const n = parent.childElementCount;
    if (n > 0) {
        const lastchild = parent.children[n - 1];
        parent.removeChild(lastchild)
    }
});

/*==================================defilement-image=============================*/
const images = ["../04.jpg", "../pic02.jpg", "../05.jpg", "../06.jpg", "../07.jpg", "../09.jpg", "../10.jpg"];
let currentImage = 0;

function showImage(index) {
    let image = document.getElementById("image");
    image.innerHTML = ' <img src="' + images[index] + '" style="width: 250px;height: 300px;object-fit: cover;border-radius: 25px;border: 5px solid burlywood;">'
}

var galerie_boucle = setInterval(function () {/*
    currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;*/
    if (currentImage < images.length) {
        showImage(currentImage)
        currentImage += 1
    } else {
        clearInterval(galerie_boucle);
    }
    
}, 2000);


document.getElementById("previous").addEventListener("click", function () {
    currentImage = (currentImage === 0) ? images.length - 1 : currentImage - 1;
    showImage(currentImage);
});

document.getElementById("next").addEventListener("click", function () {
    currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;
    showImage(currentImage);
});
showImage(currentImage);

/*==================================affiche-option===============================*/
document.getElementById("check").addEventListener("click", function () {
    if (this.checked) {
        document.getElementById("other-content").style.display = ""
    } else {
        document.getElementById("other-content").style.display = "none"
    }
})

/*==================================calculette===================================*/
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

/*==================================password=====================================*/
const container = document.getElementById("input");
const password = document.getElementById("password");
const h5 = document.querySelector("h5");

function passwordState() {
    var passwordValue = password.value;
    var passwordLength = passwordValue.length
    const spanContent = document.querySelector("h5 span");
    if (passwordLength === 0) {
        h5.style.display = "none"
    } else if (passwordLength <= 4) {
        spanContent.textContent = "week";
    } else if (passwordLength > 4 && passwordLength <= 8) {
        spanContent.textContent = "medium";
    } else if (passwordLength > 8) {
        spanContent.textContent = "strong";
    }
}
password.addEventListener("input", passwordState);

/*==================================hour=======================================*/
function showHours() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    const updateHours = `${hours}:${minutes}:${seconds}`

    document.getElementById("clock").textContent = updateHours;
    document.getElementById("clock").style.fontSize = "60px"
}
setInterval(showHours, 1000);

/*==================================galerie-images===============================*/
const img = Array.from(document.querySelectorAll("#galerie img"));
img.forEach(function (image) {
    image.addEventListener("click", function () {
        if (image.classList.contains('agrandi')) {
            image.classList.remove('agrandi');
        } else {
            image.classList.add('agrandi');
        }
    })
});

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

