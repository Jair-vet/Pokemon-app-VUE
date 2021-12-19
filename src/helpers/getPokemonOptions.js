import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {

    const pokemonArr = Array.from( Array(650) )
    
    return pokemonArr.map( (_ , index ) => index + 1 )

}


const getPokemonOptions = () => {
    
    const mixPokemons = getPokemons()
                            .sort( () => Math.random() -0.5 )

    getPokemonsNames( mixPokemons.splice(0,4) ) // Corta y toma los primero 4 
}

// const getPokemonsNames = ( pokemons = [] ) => { // Unicamnete debo recibir un arreglo
const getPokemonsNames = async( [a,b,c,d] = [] ) => { // Desestructuramos el areglo

        // Forma de extraer la data
    // const resp = await pokemonApi.get(`/1`)  
    // console.log(resp.data.name, resp.data.id);

    // console.log(a,b,c,d);

}




export default getPokemonOptions;

