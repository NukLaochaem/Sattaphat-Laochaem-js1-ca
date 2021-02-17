
const select = document.querySelector("select")
const memeContainer = document.querySelector(".memeContainer")


const url = "https://api.pokemontcg.io/v2/cards";
const proxy = "https://noroffcors.herokuapp.com/";



async function api(){
    try{
        const response = await fetch(url);
        const json = await response.json(response);
        const pokemon = json.data

        console.log();

        for(let i = 0; i < pokemon.length; i++){
            if(i === 6){
                break;
            }
            console.log(pokemon[i]);

            memeContainer.innerHTML += `<a href="details.html?q=name:${pokemon[i].name}">  
                                        <img src="${pokemon[i].images.small}"></img>
                                        </a>`;
        }                               

        
    } catch (error) {
        console.log(" pic didnt work");
        memeContainer.innerHTML ="Error, Cannot load the page"
    }
}
api()









const jokecontainer = document.querySelector(".jokes");

const jokesUrl = "https://official-joke-api.appspot.com/jokes/ten";


async function jokeAPI(){
    try{
        const respon = await fetch(jokesUrl);
        const getJson = await respon.json(respon);

        //console.log(getJson);

        for(let i = 0; i < getJson.length; i++){ 
            
        jokecontainer.innerHTML += `<div class="joke_container">
                                        <div> ${getJson[i].setup} </div>
                                        <div> Answer: ${getJson[i].punchline} </div>
                                    </div>`;
        }
    } catch (error){
        console.log("not working fix me");
    }
}
jokeAPI();



