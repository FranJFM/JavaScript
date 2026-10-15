const urlListaPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";
const urlDetallesPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu";

const promesaRespuesta = fetch(urlListaPokemon)
.then(respuesta => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then(pokemon => {
    console.log("Objeto Pokemon: " ,pokemon);
    console.log("tipo de dato: ", typeof pokemon);
    mostrarPokemon(pokemon);
  });

  const promesaRespuesta2 = fetch(urlDetallesPokemon)
.then(respuesta => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then(pokemon => {
    console.log("Nombre:", pokemon.name);
    console.log("Número Pokedex:", pokemon.id);
    console.log("Tipo:", pokemon.type);
    console.log("Imagen:", pokemon.sprites);    
  });


  function mostrarPokemon(pokemon) {
  const detalles = pokemon.results
    .map(pokemon => `<li>${pokemon.name + " ------> " + pokemon.url}</li>`)
    .join("");

 document.body.innerHTML = `
    <h1>Pokedex</h1>
    <article>
      <p>${detalles}</p>
      <p>tipo = ${typeof pokemon}</p>
    </article>
  `;
  }
