window.addEventListener("load", function(){
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    console.log(id);
    
    detalleArtista()

    function detalleArtista(){
  
      var urlDetalles = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+ id 

      fetch(urlDetalles)
      .then(function(response){
        return response.json();
      })
      .then(function(data6){
        console.log(data6);
        var artista = data6;
        var ul= document.querySelector("ul.lista-detalles");
        var li = ""
        var generos = ""
          li = "<li>"
          li +=    "<p> Title: "+artista.name+"</p>"
          li += "</li>"
          ul.innerHTML += li
        })
    }

})

window.addEventListener("load", function(){
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id.track');
  console.log(id.track);
  detalleTracks()

  function detalleTracks(){

    var urlDetalles = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+ id.track

    fetch(urlDetalles)
    .then(function(response){
      return response.json();
    })
    .then(function(data7){
      console.log(data7);
      var track = data7;
      var ul= document.querySelector("ul.lista-detalles");
      var li = ""
      var generos = ""
        console.log(track);
        li = "<li>"
        li +=    "<p> Title: "+cancion.name+"</p>"
        li += "</li>"
        ul.innerHTML += li
      })
  }

})