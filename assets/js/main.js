// main.js
import { sortPokemon, mostrarPokemonTabla } from './funciones.js';

$(document).ready(function() {
  // Inicializar DataTable
  $('#tablaPokemon').DataTable();

  // Mostrar todos los Pokémon ordenados por nombre
  sortPokemon("name", mostrarPokemonTabla);
});
