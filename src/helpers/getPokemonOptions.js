import { Promise } from "core-js"
import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {

    const pokemonArr = Array.from( Array(650) )
    
    return pokemonArr.map( (_ , index ) => index + 1 )

}


const getPokemonOptions = async() => {
    
    const mixPokemons = getPokemons()
                            .sort( () => Math.random() -0.5 )

    const pokemons = await getPokemonsNames( mixPokemons.splice(0,4) ) // Corta y toma los primero 4 
    
    return pokemons

}

// const getPokemonsNames = ( pokemons = [] ) => { // Unicamnete debo recibir un arreglo
const getPokemonsNames = async( [a,b,c,d] = [] ) => { // Desestructuramos el areglo

        // Forma de extraer la data
    // const resp = await pokemonApi.get(`/1`)  
    // console.log(resp.data.name, resp.data.id);
    // console.log(a,b,c,d);
    const primiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
    ]

    const [ p1, p2, p3, p4 ] = await Promise.all( primiseArr )

    return [
        { name: p1.data.name, id: p1.data.id},
        { name: p2.data.name, id: p2.data.id},
        { name: p3.data.name, id: p3.data.id},
        { name: p4.data.name, id: p4.data.id},
    ]

}




export default getPokemonOptions;

