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
            var idArtist = data.artist.id
            var album= data.album.title
            var id = data.id
            var ul= document.querySelector("ul.listado");
            var li= ""
            li = "<li>"
            li +=     "<a href='detalle.html?id=" + id + "&type=track" +"'>"
            li +=    "<p class='titulo'> "+cancion+"</p>"
            li +=     "</a>"
            li +=     "<a href='detalle.html?id=" + idArtist + "&type=artist" +"'>"
            li +=    "<p class= 'subtitulo'> "+artista+"</p>"
            li +=     "<hr>"
            li +=     "</a>"
            li += "</li>"
            ul.innerHTML += li
          })

    }
  }else{
  document.querySelector(".h1").style.display= "none"
  alert("Tu playlist se encuentra vacia")
}
})

