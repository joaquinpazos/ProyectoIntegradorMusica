window.addEventListener("load",  canciones())

function canciones(){
    // https://cors-anywhere.herokuapp.com/https://api.deezer.com/METODO?PARAMETROS
    // api=  "?api_key=e35e31c137fc27d22a4259a7b0daea9b"
    // top 5 albumes de artistas var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/top"
    var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/top"
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
  })
}
