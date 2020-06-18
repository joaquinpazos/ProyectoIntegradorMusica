window.addEventListener("load", cancionesGenero())
function cancionesGenero() {
  var queryString = location.search
  var searchParams = new URLSearchParams(queryString);
  var id = searchParams.get("id")

  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" +id+ "/artists")
  .then(function(response){
    return response.json();
  })
  .then(function(data5){
    console.log(data5);
    var arrayGenerosListado = data5.data;
    var ul= document.querySelector("ul.listado");
    var li
    for(i=0 ; i < 5; i++){
      li = "<li>"
      li +=    "<a href='detalle.html?id=" + arrayGenerosListado[i].id  + "&type=artist" +"'>"
      li +=     "<p>" + arrayGenerosListado[i].name + "</p>"
      li +=     "</a>"
      li += "</li>"
      ul.innerHTML += li
    }
  })
}


