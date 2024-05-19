//URL

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const requestPokemon = async (number) => {
    try {
      const response = await fetch(
        `${BASE_URL}?q=${number}&units=metric&lang=es`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Hubo un error en la petition: ${error}`);
    }
  };