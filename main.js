const formSearch = document.getElementById("search")
const inputSearch = document.querySelector("#information")
const btnSearch = document.querySelector("#button")
const errorMensage = document.getElementById("mensagge")
const cardContainer = document.getElementById("container")


const searchPokemon = async (e) =>{
    e.preventDefault();

    const inputValue = inputSearch.value.trim();

    if (inputValue == "") {
    errorMensage.innerText = `Por favor ingrese un numero`
    return
    }
    
    const pokemonFetch = await (inputValue);

    if (!pokemonFetch.id) {
        errorMensage.innerText =`no es posible encontrar a ese pokemon`
        return 
    }    
}



Init = () => {
    formSearch.addEventListener('submit',searchPokemon)
}

Init()