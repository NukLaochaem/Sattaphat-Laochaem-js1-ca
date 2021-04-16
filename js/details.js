const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const pokeName = params.get("name");
console.log();


const pokeUrl = "https://api.pokemontcg.io/v2/cards?";
const singlePokemon = pokeUrl +`q=name:${pokeName}`;


const cardsContainer = document.querySelector(".item_container")
const details = document.querySelector(".details");
const title = document.querySelector("title")


async function callApi(){
    try{
        const response = await fetch(singlePokemon);
        const json = await response.json(response);
        const cards = json.data;

        cardsContainer.innerHTML = "";

        for(let i = 0; i < cards.length; i++){
            if(i === 5){
                break;
            }
            let cardFlavorText = "Unknown"
            if(cards[i].flavorText){
                cardFlavorText = cards[i].flavorText;
            }

            cardsContainer.innerHTML = `<h1>${cards[i].name}<h1>
                                        <h3>Pokemon Type: ${cards[i].types}</h3>
                                        <img src="${cards[i].images.small}" alt"Pokemon Card name:${cards[i].name}"></img>
                                        <h4> ${cardFlavorText}</h4>`;
            title.innerHTML = `${cards[i].name}`;
        }
    } catch (error) {
        console.log(" cant not load pokemon");
        cardsContainer.innerHTML = `<h4>Error! Something went wrong! Cannot load the page.</h4>`;
    }
}

callApi();





