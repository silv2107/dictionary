function searchFunction(){
    // let searchUrl = new URLSearchParams(window.location.search);
    let form = document.querySelector("#theForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        event.target.keyword.value;
        fetch("./data.json")
        .then(response => {
            return response.json();
        })
        .then(function(data) {
            let userInput = event.target.keyword.value;
            let itemsContainer = document.querySelector(".searchResults__listItems");
            if(userInput == ""){
                return;
            }


            var matches = data.words.filter(function(word){
                return word.name.toLowerCase().includes(userInput);    
            });
            while(itemsContainer.firstChild){
                itemsContainer.removeChild(itemsContainer.lastChild);
            } 
            matches.forEach(function(word){
                let aTag = document.createElement("a");
                let content = document.createElement("p")
                content.classList.add("visible");
                aTag.innerText = word.name + ":";
                aTag.href = "#";
                content.innerText = word.description;

                itemsContainer.appendChild(aTag);
                itemsContainer.appendChild(content);

                // aTag.addEventListener('click', function(){
                //     content.classList.toggle("visible")
                // })
            })

        })
    })
    
}





export default searchFunction;