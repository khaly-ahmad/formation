
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

/*==================================defilement-image=============================*/
const images = ["../images/04.jpg", "../images/pic02.jpg", "../images/05.jpg", "../images/06.jpg", "../images/07.jpg", "../images/09.jpg", "../images/10.jpg"];
let currentImage = 0;

function showImage(index) {
    let image = document.getElementById("image");
    image.innerHTML = ' <img src="' + images[index] + '" style="width: 250px;height: 300px;object-fit: cover;border-radius: 25px;border: 5px solid burlywood;">'
}
/*
var galerie_boucle = setInterval(function () {
    currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;
    if (currentImage < images.length) {
        showImage(currentImage)
        currentImage += 1
    } else {
        clearInterval(galerie_boucle);
    }
    
}, 2000);
*/


document.getElementById("previous").addEventListener("click", function () {
    currentImage = (currentImage === 0) ? images.length - 1 : currentImage - 1;
    showImage(currentImage);
});

document.getElementById("next").addEventListener("click", function () {
    currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;
    showImage(currentImage);
});
showImage(currentImage);


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

const myArray = [43, 56, 10, 100, 4];
console.log(myArray.reduce((total, nombre) => total + nombre, 0));
console.log(myArray.filter((nbr) => nbr % 2 === 0));
let acc = myArray[0];
for (let i = 0; i < myArray.length; i++) {
    acc = (acc < myArray[i]) ? myArray[i] : acc
}
console.log(acc)
const word = "javascript";
console.log(word.split("").reverse().join('').toUpperCase());
const librery = {
    titre: "les miserables",
    auteur: "victor hugo",
    annee: 1862,
    genre: "roman"
}
console.log(Object.values(librery));

let utilisateurs = [
    { nom: "alpha", age: 15, email: "alpha@gmail.com" },
    { nom: "aliace", age: 32, email: "aliace@gmail.com" },
    { nom: "ali", age: 29, email: "ali@gmail.com" },
    { nom: "khaly", age: 20, email: "khaly@gmail.com" },
    { nom: "alice", age: 19, email: "alice@gmail.com" }
]

utilisateurs.forEach((utilisateur) => {
    console.log(utilisateur.nom)
})

for (let utilisateur of utilisateurs) {
    if (utilisateur.age > 18) {
        console.log(utilisateur)
    }
    if (utilisateur.nom === "alice") {
        console.log(utilisateur.email)
    }
}

let stocks = [
    { name: "ordinateurs", prix: 2, quantity: 5 },
    { name: "airpods", prix: 8, quantity: 10 },
    { name: "chargeurs", prix: 4, quantity: 7 },
    { name: "claviers", prix: 1, quantity: 15 },
    { name: "phones", prix: 5, quantity: 23 }
]

function addProduit(nom, prx, qtt) {
    const newProduct = { name: nom, prix: prx, quantity: qtt }
    stocks.push(newProduct);
}
let newProduct = addProduit("cahiers", 1, 20);
console.log(stocks);

let prixAchat = [];

function achatPrduit(nom, qtt) {
    let indexProduit = stocks.findIndex(item => item.name === nom);
    let produit = stocks[indexProduit];
    let produitAchete = produit.prix;
    if (indexProduit != -1) {
        if (produit.quantity > qtt) {
            prixAchat.push(produitAchete);
            produit.quantity -= qtt;
        } else if (produit.quantity === qtt) {
            prixAchat.push(produitAchete);
            stocks.splice(indexProduit, 1)
        }
        else {
            console.log('il ne nous reste que' + ` ${produit.quantity} ${produit.name} en stock`);
        }
    } else {
        console.log('product not find')
    }
}
achatPrduit("claviers", 2);
achatPrduit("cahiers", 15);
achatPrduit("phones", 6);
achatPrduit("ordinateurs", 5);
console.log(prixAchat);

console.log("vous nous devez " + prixAchat.reduce((prixTotal, prix) => {
    return prixTotal + prix;
}) + "€")

const canva = document.getElementById('myCanvas');
const ctx = canva.getContext('2d');

const radius = 15;
let mouseX=80;
let mouseY=80;
canva.width=window.innerWidth
canva.height=window.innerHeight

canva.addEventListener('mousemove',(event)=>{
    const rec=canva.getBoundingClientRect();
    mouseX= event.clientX-rec.left
    mouseY= event.clientY-rec.top
    drawCircle()
})
function drawCircle() {
    ctx.clearRect(0, 0, canva.width, canva.height);
    ctx.beginPath();
    ctx.fillStyle = "#add3f5";
    ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2)
    ctx.fill();
    ctx.closePath();
/*
    x+=dx
    y+=dy
    if (x+radius>canva.width||x-radius<0){
        dx=-dx
    }
    if (y+radius>canva.height||y-radius<0){
        dy=-dy
    }


    requestAnimationFrame(drawCircle); */
}
drawCircle();

