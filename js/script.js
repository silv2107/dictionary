import searchFunction from "./searchFunction.js";

searchFunction();

function randomWord(){
    fetch("./data.json")
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        let word = document.querySelector(".wordOfTheDay__word");
        let description = document.querySelector(".wordOfTheDay__description");
        let imageOfTheDay = document.querySelector(".imageOfTheDay");
        let listOfWords = data.words;
         for(let i = 0; i < listOfWords.length; i++){
             let r = Math.floor(Math.random()*i);
             let temp = listOfWords[i];
             listOfWords[i] = listOfWords[r];
             listOfWords[r] = temp;
         }
        imageOfTheDay.src = data.words[0].image;
        description.innerText = data.words[0].description;
        word.innerText = data.words[0].name + ":";
        description.classList.add("visible");
    })

}

randomWord();






