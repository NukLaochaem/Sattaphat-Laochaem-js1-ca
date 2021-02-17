const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(params);

const pokeUrl = "https://api.pokemontcg.io/v2/cards" +id;
const proxy = "https://noroffcors.herokuapp.com/";

const containerDetails = document.querySelector(".container_details")
const details = document.querySelector(".details");

containerDetails.innerHTML = id;

async function callApi(){
    try{
        const response = await fetch(pokeUrl);
        const json = await response.json(response);
        const results = json.data;
        
        console.log(results);

        for(let i = 1; i < results.length; i++){
            

            console.log(results[i]);

            containerDetails.innerHTML += `<h3>${results[i].name}</h3>
                                                <img src="${results[i].images.small}"></img>
            `;
        }
    } catch (error) {
        console.log("didnt work");
        detail.innerHTML ="Error, Cannot load the page"
    }
}

callApi();





