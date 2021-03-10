const url = "https://api.pokemontcg.io/v2/cards";

const cardContainer = document.querySelector(".cards_container");


async function api(){
    try{
        const response = await fetch(url);
        const json = await response.json(response);
        const pokemon = json.data;

        console.log(pokemon);
        cardContainer.innerHTML = "";
        for(let i = 0; i < pokemon.length; i++){
            if(i === 12){
                break;
            }
            //console.log(pokemon[i]);

            cardContainer.innerHTML += `<div class="card_holder">
                                            <h3>${pokemon[i].name} - HP ${pokemon[i].hp}  </h3>
                                            <a href="details.html?name=${pokemon[i].name}">
                                            <img src="${pokemon[i].images.small}"></img></a>
                                        </div>`;
        }                               
    } catch (error) {
        console.log(error);
        cardContainer.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`;
    }
}
api();




// Jokes

const jokecontainer = document.querySelector(".joke_container");
const btn = document.querySelector(".btn");
const answer = document.querySelector (".answer");


const jokesUrl = "https://official-joke-api.appspot.com/jokes/ten";


async function jokeAPI(){
    try{
        const fetching = await fetch(jokesUrl);
        const joke = await fetching.json(fetching);

        jokecontainer.innerHTML="";

        console.log(joke);
        
        for(let i = 0; i < joke.length; i++){ 
            
            if(i === 5){
                break;
            };

        jokecontainer.innerHTML += `<div class="jokes">
                                        <div class="setup"> ${joke[i].setup}</div>
                                        <div> ${joke[i].punchline}</div>
                                    </div>`;
        }
    } catch (error){
        console.log(error);
        jokecontainer.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`
    }
}

jokeAPI();

//           button need help.       i wanna revel the 'punchline' by click on the button aswell remove the button
function button() {
    if (answer.style.display === "none") {
    answer.style.display = "block";
    } else {
    answer.style.display = "none";
    }
}






