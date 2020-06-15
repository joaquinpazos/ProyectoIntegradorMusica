window.addEventListener("load", function(){
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    console.log(id);

    detalleArtista()
    function detalleArtista(){
  
      var urlDetalles = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+ id 

      fetch(urlDetalles)
      .then(function(response){
        return response.json();
      })
      .then(function(data6){
        console.log(data6);
        var track = data6;
        var ul= document.querySelector("ul.lista-detalles");
        var li = ""
        var generos = ""
          li = "<li>"
          li +=    "<p> Title: "+track.title+"</p>"
          li += "</li>"
          ul.innerHTML += li
        })
    }


   
   
   
   
    //cierran la funcion
})

