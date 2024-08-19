import { data } from './pokemon.js';

export function getPokemon(identifier, callback) {
  setTimeout(() => {
    const pokemon = data.find(p => p.id === identifier || p.name.toLowerCase() === identifier.toLowerCase());
    if (pokemon) {
      callback(null, pokemon);
    } else {
      callback(new Error("Pokémon no encontrado"));
    }
  }, 1000);
}

export function sortPokemon(criteria, callback) {
  setTimeout(() => {
    const sortedData = [...data].sort((a, b) => {
      if (criteria === "id") {
        return a.id - b.id;
      } else if (criteria === "name") {
        return a.name.localeCompare(b.name);
      }
    });
    callback(sortedData);
  }, 500);
}

export function mostrarPokemonTabla(pokemonList) {
  const table = $('#tablaPokemon').DataTable();
  table.clear();
  pokemonList.forEach(pokemon => {
    table.row.add([
      pokemon.id,
      pokemon.name,
      pokemon.types.join(", ")
    ]).draw(false);
  });
}
