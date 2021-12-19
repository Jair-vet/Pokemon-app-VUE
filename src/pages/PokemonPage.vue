<template>
    <h1>¿Quien es este Pokemon?</h1>
    <!-- TODO: Picture -->
    <PokemonPicture :pokemonId="4" />

    <!-- TODO: Opciones -->
    <PokemonOptions />

</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue'
import PokemonOptions from '../components/PokemonOptions.vue'

export default {
  components: { 
    PokemonPicture,
    PokemonOptions
    },

}
</script>
