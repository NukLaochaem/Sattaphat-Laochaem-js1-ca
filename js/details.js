const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idName = params.get("name");

console.log(params);

const pokeUrl = "https://api.pokemontcg.io/v2/cards";
const proxy = "https://noroffcors.herokuapp.com/";

const containerDetails = document.querySelector(".container_details")
const details = document.querySelector(".details");

containerDetails.innerHTML = idName;

async function callApi(){
    try{
        const response = await fetch(pokeUrl);
        const json = await response.json(response);
        const results = json.data;
        
        console.log(results);

        for(let i = 0; i < results.length; i++){
            
            if(i === 5){
                break;
            }

            console.log(results[i]);

            containerDetails.innerHTML += `<h3>Name: ${results[i].name}</h3>
                                            <h3>Pokemon Type: ${results[i].types}</h3>
                                            <img src="${results[i].images.small}"></img>
            `;
        }
    } catch (error) {
        console.log("didnt work");
        detail.innerHTML ="Error, Cannot load the page"
    }
}

callApi();





