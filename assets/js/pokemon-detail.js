
const lista = document.querySelector(".modal-body")

async function getPokemonData(id) {
  console.log(id)
  try {
    var {
      forms,
      height,
      weight,
      abilities,
      sprites: photo
    } = await ((await fetch("https://pokeapi.co/api/v2/pokemon/" + id)).json())
    photo = photo.other.dream_world.front_default

    let alturaConvert = height / 10;
    let pesoConvert = weight / 10;
    lista.innerHTML = `
      <img src="${photo}"/>
      <ul style="list-style-type: none;">
        <li><b>Nome do Pokemon:</b> ${forms.map(item => item.name)}</li>
        <li><b>Altura:</b> ${height}dm (${alturaConvert} metros)</li>
        <li><b>Peso:</b> ${weight}hg (${pesoConvert} quilograma)</li>
        <li><b>Habilidades:</b> ${abilities.map(item => item.ability.name).join(', ')}</li>
  

      </ul>
    `
    openModal()
    
  } catch (err) {
    console.log(err)
  }

}