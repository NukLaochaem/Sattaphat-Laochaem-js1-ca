const url = "https://api.pokemontcg.io/v2/cards";

const cardContainer = document.querySelector(".cards_container")


async function api(){
    try{
        const response = await fetch(url);
        const json = await response.json(response);
        const pokemon = json.data

        console.log(pokemon);
        cardContainer.innerHTML = "";
        for(let i = 0; i < pokemon.length; i++){
            if(i === 10){
                break;
            }
            console.log(pokemon[i]);

            cardContainer.innerHTML += `
                                        <a href="details.html?name=${pokemon[i].name}">
                                        <img src="${pokemon[i].images.small}"></img></a>`;
        }                               
    } catch (error) {
        console.log("pokemon did not load");
        cardContainer.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`
    }
}
api()




// Jokes

const jokecontainer = document.querySelector(".joke_container");
const button = document.querySelector(".btn")

const jokesUrl = "https://official-joke-api.appspot.com/jokes/ten";


async function jokeAPI(){
    try{
        const respon = await fetch(jokesUrl);
        const joke = await respon.json(respon);

        jokecontainer.innerHTML="";
        console.log(joke);
        
        for(let i = 0; i < joke.length; i++){ 
            
            if(i === 5){
                break;
            }

        jokecontainer.innerHTML += ` <div class="jokes">
                                        <div class="setup"> ${joke[i].setup} </div>
                                        <div>Revel: ${joke[i].punchline} </div>
                                    </div>`;
        
        }
    } catch (error){
        console.log("jokes not loading");
        jokecontainer.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`
    }
}
jokeAPI();



