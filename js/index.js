const url = "https://www.whenisthenextmcufilm.com/api";
const $main = document.getElementById("main")
const $title = document.getElementById("title-movie")
const $realeseDate = document.getElementById("releases-date")
const $typeProduction = document.getElementById("type-production")
const $poster = document.getElementById("poster")
const $description = document.getElementById("description")
const $nextMovie = document.getElementById("next-movie")

//Función que obtendra la api de la siguiente película de marvel
const getMovieMarvel = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json()

    //Verificamos si la respuesta obtuvo exito
    if(!res.ok) throw ({error : res})

    //Si todo salio bien en el estatus seguimos con el codigo.
    //Contenido que se mostrara en el html
    $poster.src = data.poster_url
    $poster.alt = `Poster de la película ${data.title}`
    $title.textContent = `${data.title} releases in ${data.days_until} days!`
    $realeseDate.textContent = `Release Date: ${data.release_date}`
    $typeProduction.textContent = `Production Type: ${data.type}`
    $description.textContent = data.overview
    $nextMovie.textContent = `What's afterwards? ${data.following_production.title}`

  } catch (error) {
    let message = error.statusText || "Ha ocurrido un error al hacer la peticion."
    const $errorMessage = document.createElement("h2")
    $errorMessage.textContent = `${message}`
    $main.insertAdjacentElement("afterend", $errorMessage)
    console.error(error)
  }
}



document.addEventListener("DOMContentLoaded", getMovieMarvel(url));