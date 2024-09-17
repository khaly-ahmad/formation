const inputText = document.querySelector('.input-text');
const inputDate = document.querySelector('.input-date');
const app = document.querySelector('.app');
const toDoList=document.querySelector('.to-do-list')
const array= [];

document.getElementById("add-to-do").addEventListener('click', function () {
    if (inputText.value !== '') {
        let date = inputDate.value
        if (date === '') {
            const default_date = new Date();
            const day = String(default_date.getDate()).padStart(2, '0');
            const month = String(default_date.getMonth() + 1).padStart(2, '0');
            const year = String(default_date.getFullYear());
            date = `${month}/${day}/${year}`
        }
        addArray(inputText.value,date);
        renderList();
        inputDate.value = '';
        inputText.value = '';
    };
});

function addArray(nom,date){
    newTodo = { name : nom, Date: date};
    array.push(newTodo);
}

function renderList(){
    toDoList.innerHTML=''
    array.forEach((toItem,index)=>{
        const toDo = document.createElement("div");
        toDo.classList.add('to-do');
        toDo.innerHTML = `<div>
        <p class="output-text">${toItem.name} </p>
        <p class="output-date">${toItem.Date}</p>
        <button class="remove" data-index="${index}">remove</button></div>`;
        toDoList.appendChild(toDo);
    })
    document.querySelectorAll('.remove').forEach(button=>{
        button.addEventListener('click',function(){
            const index = this.getAttribute('data-index');
            array.splice(index,1);
            renderList();
        });
    });
}



/*
function addRemoveEvent(toDo) {
    const removeBtn = toDo.querySelector('.remove');
    removeBtn.addEventListene('click', function () {
        this.parentElement.remove();
    })
}*/
