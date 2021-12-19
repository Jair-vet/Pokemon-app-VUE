<template>
    <h1>¿Quien es este Pokemon?</h1>
    <!-- TODO: Picture -->
    <PokemonPicture :pokemonId="150" :showPokemon="true" />

    <!-- TODO: Opciones -->
    <PokemonOptions />

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions.js'

console.log( getPokemonOptions() );

export default {
  components: { 
    PokemonPicture,
    PokemonOptions
    },

}
</script>
