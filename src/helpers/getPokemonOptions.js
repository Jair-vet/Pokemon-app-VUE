
const getPokemons = () => {

    const pokemonArr = Array.from( Array(650) )
    
    return pokemonArr.map( (_ , index ) => index + 1 )

}


const getPokemonOptions = () => {
    
    const mixPokemons = getPokemons().sort( () => Math.random() -0.5 )

    console.log(mixPokemons)

}



export default getPokemonOptions;

