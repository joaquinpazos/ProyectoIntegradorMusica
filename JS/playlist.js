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
            var duration= data.duration
            var artista = data.artist.name
            var album= data.album.title
            var trackId = data.id
            var id = data.artist.id

            document.querySelector(".listado").innerHTML += "<li>"+" <div class=section>"+"<div class=sectioninfo>"+"<h2 class= nombrecancion>"+cancion+"</h2>"+"<h2 class= titulos>"+artista+"</h2>"+ " <h2 class= tituloss>"+album+"</h2>"+ "<i id='"+ trackId+"' class='far fa-play-circle iconotracks'></i>"+"</li>"+"</div>"+"</div>"
          
          var play = document.querySelectorAll(".iconotracks")
          for (let index = 0; index < play.length; index++) {
            const cadaPlay = play[index];
            var id = cadaPlay.getAttribute("id")
            cadaPlay.addEventListener("click", function(){
              document.querySelector(".reproduccion").innerHTML += "<iframe class='iframe' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+ id +"&app_id=1' width='100%' height='150'></iframe>"
            })
          }
          })
    }
  }else{
  alert("crea una playlist")
}
})

