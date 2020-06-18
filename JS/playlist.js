window.addEventListener("load",function () {
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
    alert("Aun no tienes playlist")
    document.querySelector(".contenido").style.display= "none"
    document.querySelector("no-playlist").style.display= "block"
  }
}
)





