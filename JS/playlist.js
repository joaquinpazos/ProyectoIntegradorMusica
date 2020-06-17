window.addEventListener("load",function () {
    var playlist =  JSON.parse(window.sessionStorage.getItem("arrayDePlaylist"))
    console.log(playlist.length);
  
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
        }
    }
}
)




