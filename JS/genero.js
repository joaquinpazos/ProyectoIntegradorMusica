window.addEventListener("load",  generos())
function generos(){
    var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"
    fetch(url)
    .then(function(response){
    return response.json();
    })
    .then(function(genero){
      console.log(genero);
      var arrayDeGeneros= genero.data
      var ul= document.querySelector("ul.generos");
      var li
      for(i=0 ; i < 28; i++){
        li = "<li>"
        li +=     "<a href='listadoPorGenero.html?id=" + arrayDeGeneros[i].id + "'>" 
        li +=   "<img src='"+ arrayDeGeneros[i].picture+ "' alt=''>"
        li +=        "<p>" + arrayDeGeneros[i].name + "</p>"
        li += "</li>"
        ul.innerHTML += li
      }
    }) 
} 
