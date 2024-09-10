const searchBar = document.getElementById('search-bar');
const defContent = document.querySelector('.definition');
const word = document.createElement('h3');

async function defRequest() {
const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${searchBar.value}`
const explication=document.querySelector('.definition .def');
const utilisation=document.querySelector('.definition .utilisation')
    try{
        const r = await fetch(url);
        if (r.status === 404 ){
            explication.textContent="the word is misspelled or does not exist"
            throw new error('mot non trouvé');
        }
        const data = await r.json();
        const wordDef= data[0].meanings[0].definitions[0].definition;
        explication.textContent=wordDef
        const expre=data[0].meanings[0].definitions[0].example;
        console.log(expre)
        utilisation.textContent= expre;

    }catch(e){
        console.log('error:',e)
    }
}

function research() {
    word.textContent=searchBar.value+" :";
    defContent.prepend(word)
    defRequest()
}