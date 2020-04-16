window.addEventListener("load",function() {

    var queryString = new URLSearchParams(window.location.search)
    var busco = queryString.get("buscador")
    fetch("https://api.themoviedb.org/3/search/movie?api_key=9965ce1f44cbb90b7bf8dc6ed82d7129&language=en-US&query="+ busco +"&include_adult=false")
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(informacion) {
        console.log(informacion);
        var arrayDePeliculas = informacion.results
        console.log(arrayDePeliculas);
        console.log(arrayDePeliculas.length);
        var pelis = ""
        var urlPoster = "https://image.tmdb.org/t/p/original"
        var titulo
        var id
        var poster
        for (var i = 0; i < arrayDePeliculas.length; i++) {
          poster = arrayDePeliculas[i].poster_path
          if (poster) {
            titulo =  arrayDePeliculas[i].title
            id = arrayDePeliculas[i].id
            console.log(poster);
            pelis += "<a href=detalleDePeliculas.html?id=" + id + "><p>" + titulo + "</p><img src='"+ urlPoster + poster + "' alt=''></a>"
          }
          document.querySelector("div.busqueda").innerHTML = pelis
        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
  })
  