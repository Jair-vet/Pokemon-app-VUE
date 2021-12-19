
const getPokemons = () => {

    const pokemonArr = Array.from( Array(650) )
    
    return pokemonArr.map( (_ , index ) => index + 1 )

}


const getPokemonOptions = () => {
    
    const mixPokemons = getPokemons()
                            .sort( () => Math.random() -0.5 )

    getPokemonsNames( mixPokemons.splice(0,4) ) // Corta y toma los primero 4 
}

const getPokemonsNames = ( pokemons = [] ) => { // Unicamnete debo recibir un arreglo

    console.log(pokemons);

}


export default getPokemonOptions;

