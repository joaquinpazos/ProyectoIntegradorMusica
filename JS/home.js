window.addEventListener("load",  canciones())

function canciones(){
    // https://cors-anywhere.herokuapp.com/https://api.deezer.com/METODO?PARAMETROS
    // api=  "?api_key=e35e31c137fc27d22a4259a7b0daea9b"
    // top 5 albumes de artistas var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/top"
    // top 10 artistas var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"
    // top 10 tracks var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
    var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    var arrayDeTracks= data.data
    var ul= document.querySelector("ul.poster");
    var li
    for(i=0 ; i < 4; i++){
      li = "<li>"
      li +=     "<a href='detalle.html?id=" + arrayDeTracks[i].id +"'>" 
      li +=        "<p>" + arrayDeTracks[i].title + "</p>"
      li += "</li>"
      ul.innerHTML += li
    }
  })
}


