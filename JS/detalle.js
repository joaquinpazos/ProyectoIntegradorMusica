window.addEventListener("load", function(){
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    console.log(id);
    
    detalleCanciones()

    function detalleCanciones(){
  
      var urlDetalles = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+ id 

      fetch(urlDetalles)
      .then(function(response){
        return response.json();
      })
      .then(function(data6){
        console.log(data6);
        var cancion = data6;
        var ul= document.querySelector("ul.lista-detalles");
        var li = ""
        var generos = ""
          console.log(cancion);
          li = "<li>"
          li +=    "<p> Title: "+cancion.name+"</p>"
          li += "</li>"
          ul.innerHTML += li
        })
    }

})