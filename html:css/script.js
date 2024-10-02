// const ob = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });
// const hiddenElement=document.querySelectorAll('.hidden');
// hiddenElement.forEach((el)=>ob.observe(el));

// const observer= new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add("showImage");
//         }else {
//             entry.target.classList.remove("showImage");
//         }
//     })

// })
// const images=document.querySelectorAll(".imgHidden");
// images.forEach((img)=>observer.observe(img))
 const typed = new Typed("#span",{
    strings : ["programmer","developper","student"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : false
 })
const screenPosition = window.innerHeight / 1.1;

document.addEventListener('scroll', () => {
    const texts = document.querySelectorAll('main p');
    texts.forEach((text) => {
        let textPosition = text.getBoundingClientRect().top;
        if (textPosition < screenPosition) {
            text.classList.add("visible");
        } else {
            text.classList.remove("visible");
        }
    })
})

function handleIntersection(entries, className) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(className);
        } else {
            entry.target.classList.remove(className);
        }
    });
}

function createObserver(selector, className) {
    const observer = new IntersectionObserver((entries) => {
        handleIntersection(entries, className);
    })
    const element = document.querySelectorAll(selector);
    element.forEach((el) => observer.observe(el));
}

createObserver('.hidden', 'show');
createObserver('.imgHidden', 'showImage');

document.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.item');
    items.forEach((item)=>{
        let itemPosition = item.getBoundingClientRect().top;
        if(itemPosition<screenPosition){
            item.classList.add('showItem');
        }
        else {
            item.classList.remove('showItem');
        }
    })
})

