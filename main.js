const formSearch = document.getElementById("search")
const inputSearch = document.querySelector("#information")
const btnSearch = document.querySelector("#button")
const errorMensage = document.getElementById("mensagge")
const cardContainer = document.getElementById("container")


const createCard = (pokemon) => {
    const { name, types, weight, height } = pokemon;

    const typesString = types.map(typeInfo => typeInfo.type.name).join('-');
    
    return cardContainer.innerHTML = `
        <div id="card-info">
            <h2>${name}</h2>
            <p>Tipo: ${typesString}</p>
            <p>Peso: ${weight / 10} kg</p>
            <p>Altura: ${height / 10} m</p>
            <img src="${pokemon.sprites.front_default}" alt="${name}">
        </div>
    `;
   
}


const searchPokemon = async (e) =>{
    e.preventDefault();

    const inputValue = inputSearch.value.trim();

    const pokemonResult = await requestPokemon(inputValue)

    if (inputValue == "") {
    errorMensage.innerText = `Por favor ingrese un numero`
    return
    }
    
    // const pokemonFetch = await (inputValue);

    if (!pokemonResult) {
        errorMensage.innerText =`no es posible encontrar a ese pokemon`
        return 
    }else{
        errorMensage.innerText =``

        return createCard(pokemonResult)
    }   
    
    
}

Init = () => {
    formSearch.addEventListener('submit',searchPokemon)
}

Init()