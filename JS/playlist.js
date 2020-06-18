/* window.addEventListener("load",function () {
    var playlist =  JSON.parse(window.sessionStorage.getItem("arrayDePlaylist"))
    console.log(playlist.length);

  if(localStorage.getItem("playlist") != 0){
  for (var i = 0; i < playlist.length; i++) {
      var id = playlist[i]
  
    detalleArtista()
    function detalleArtista(){

      var urlDetalles = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+ id 

      fetch(urlDetalles)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);
        var track = data;
        var ul= document.querySelector("ul.playlist");
        var li = ""
        var generos = ""
          li = "<li>"
          li +=     "<a href='detalle.html?id=" + id + "&type=track" +"'>"
          li +=    "<p> Title: "+track.title+"</p>"
          li +=    "</a>"
          li += "</li>"
          ul.innerHTML += li
         }
        )
        document.querySelector("div.reproducir").innerHTML= '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=92&color=007FEB&layout=dark&size=medium&type=tracks&id=' + id + '&app_id="416702" width="700" height="92"></iframe>'
        document.querySelector(".imagen").style.display= "none"
        document.querySelector(".no-contenido").style.display= "none"
      }
    }
  
  
  }else{
      document.querySelector("div.contenido").style.display= "none"
      document.querySelector(".no-playlist").style.display= "block"
  }
}
)

 */

window.addEventListener("load", function(){
  if (sessionStorage.getItem("arrayDePlaylist") != null){
    var playlist= JSON.parse(window.sessionStorage.getItem("arrayDePlaylist"))

    for (let index = 0; index < playlist.length; index++) {
      const cancionPlaylist = playlist[index];
      fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/"+cancionPlaylist)
      .then (
        function(respuesta){
          return respuesta.json()
        })
        .then(
          function(data){
            console.log(data)
            var cancion= data.title
            console.log(cancion)
            var artista = data.artist.name
            var album= data.album.title
            var id = data.artist.id
            var ul= document.querySelector("ul.listado");
            var li= ""
            li = "<li>"
            li +=     "<a href='detalle.html?id=" + id + "&type=track" +"'>"
            li +=    "<p class='titulo'> "+cancion+"</p>"
            li +=    "<p class= 'subtitulo'> "+artista+"</p>"
            li +=    "</a>"
            li += "</li>"
            ul.innerHTML += li
          })
    }
  }else{
  alert("crea una playlist")
}
})

