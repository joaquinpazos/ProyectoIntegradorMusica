window.addEventListener("load", function(){
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    var type = urlParams.get('type');
    console.log(type);

    var urlGeneral= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/" + type +  "/"+ id
    var urlTop5= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id +  "/top"

    if (type == "track") {
      fetch(urlGeneral)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
          console.log(data);
          var track = data;
          var ul= document.querySelector("ul.lista-detalles");
          var li = ""
          var generos = ""
            li = "<li>"
            li +=   "<img src='"+ track.album.cover_medium + "' alt=''>"
            li +=    "<p class='title' > Title: "+track.title+"</p>"
            li +=    "<p class= 'album' > Album: "+track.album.title+"</p>"
            li +=    "<p class= 'fecha'> Release Date: "+track.release_date+"</p>"
            li +=    "<p class= 'duration'> Duration: "+track.duration+ " segundos" + "</p>"
            li += "</li>"
            ul.innerHTML += li
            
            
            document.querySelector(".resultados ul li").style.paddingTop= "50px"
            document.querySelector(".resultados ul li img").style.marginRight= "50px"
            document.querySelector(".resultados ul li img").style.marginTop= "25px"
            document.querySelector(".resultados button").style.marginLeft= "347px"
            document.querySelector(".resultados").style.border="1px solid white"
            document.querySelector(".resultados").style.borderRadius="30px"
            document.querySelector(".resultados").style.backgroundColor="black"
            document.querySelector(".resultados").style.width= "40%"
            document.querySelector(".resultados").style.marginLeft= "590px"
            document.querySelector(".resultados").style.paddingBottom= "30px"
            document.querySelector("ul.top-5").style.display= "none"
            document.querySelector("button.boton-favoritos").setAttribute("onclick","agregarPlaylist("+track.id+")")

            
            //ME FIJO SI LA CANCION ESTA EN MI PLAYLIST CUANDO CARGA LA PAGINA
            var arrayDePlaylist = JSON.parse(window.sessionStorage.getItem("arrayDePlaylist"))
            if (arrayDePlaylist != null && arrayDePlaylist.length>0){
              if (arrayDePlaylist.indexOf(track.id)!= -1) {
                document.querySelector("button.boton-favoritos").innerText = "Eliminar de Playlist"
                
              }
            }
          })
        
      }
    if (type == "artist") {
      fetch(urlGeneral)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
          console.log(data);
          var artist = data;
          var ul= document.querySelector("ul.lista-detalles");
          var li = ""
          var generos = ""
            li = "<li>"
            li +=   "<img src='"+ artist.picture_medium + "' alt=''>"
            li +=    "<p class='title'> Name: "+artist.name+"</p>"
            li +=    "<p class= 'fans'> Fans: " + artist.nb_fan+ "</p>"
            li += "</li>"
            ul.innerHTML += li
            
            document.querySelector(".top-5").style.float= "none"
            document.querySelector(".top-5").style.marginLeft= "63%"
            document.querySelector(".top-5").style.marginTop= "42px"
            document.querySelector("ul.top-5").style.color= "white"
            document.querySelector("ul.top-5 h1").style.color= "white"
            document.querySelector(".lista-detalles p.title").style.marginRight= "10px"
            document.querySelector(".resultados").style.marginLeft= "20%"
            document.querySelector(".resultados").style.backgroundColor="black"
            document.querySelector(".resultados li").style.marginLeft= "23px"
            document.querySelector(".resultados li").style.marginRight= "30px"
            document.querySelector(".resultados").style.border= "1px solid white"
            document.querySelector(".resultados").style.borderRadius="30px"
            document.querySelector(".resultados").style.width= "40%"
            document.querySelector(".resultados").style.marginLeft= "570px"
            document.querySelector(".resultados ul li img").style.marginRight= "70px"
            document.querySelector(".resultados ul li img").style.marginLeft= "-3px"
            document.querySelector(".resultados ul li img").style.marginTop= "34px"
            document.querySelector(".resultados ul li img").style.width= "55%"
            document.querySelector("button.boton-favoritos").style.display= "none"
          })
    var urlTop5= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id + "/top"
    fetch(urlTop5)
      .then(function(response){
          return response.json();
      })
      .then(function(data2){
        console.log(data2);
        var artist = data2;
        var ul= document.querySelector("ul.top-5");
        var li = ""
        for(i=0 ; i < 5; i++){
          li = "<li>"
          li +=    "<p class='top5'>"+artist.data[i].title + "</p>"
          li += "</li>"
          ul.innerHTML += li
        }
          document.querySelector("button.boton-favoritos").style.display= "none"
        })
      
        } 


      if (type == "album") {
        fetch(urlGeneral)
          .then(function(response){
              return response.json();
          })
          .then(function(data){
            console.log(data);
            var album = data;
            var ul= document.querySelector("ul.lista-detalles");
            var li = ""
              li = "<li>"
              li +=    "<img src='"+ album.cover_medium + "' alt=''>"
              li +=    "<p class= 'title'> Title: "+album.title+"</p>"
              li +=    "<p class= 'artist'> Artist: "+album.artist.name+"</p>"
              li +=    "<p class= 'fecha'> Release Date: "+album.release_date+"</p>"
              li += "</li>"
              ul.innerHTML += li
              
              document.querySelector("ul.top-5").style.display= "none"
              document.querySelector("button.boton-favoritos").style.display= "none"
            })
        }
      //cierran la funcion
})

//HAY QUE CHEQUEAR <CUANDO CARGA LA PAGINA> QUE SI LA CANCION YA ESTA EN PLAYLIST. CAMBIO EL BOTON A "ELIMINAR"
function agregarPlaylist(id) {
  console.log("clickeaste en la cancion de id: "+id);
  //PRIMERO reviso si existe el array de cancion cancionesPlaylist
  var arrayDePlaylist = JSON.parse(window.sessionStorage.getItem("arrayDePlaylist"))
  if (arrayDePlaylist != null && arrayDePlaylist.length>0) {
    // console.log("existe y no esta vacio");
    //antes de agregarlo a favoritos, tengo que verificar si ya esta en el array
    if (arrayDePlaylist.indexOf(id)!= -1) {
      document.querySelector("button.boton-favoritos").innerText = "Agregar a Playlist"
      //ya está como playlist, entonces la borro
      arrayDePlaylist.splice(arrayDePlaylist.indexOf(id),1)
      window.sessionStorage.setItem("arrayDePlaylist", JSON.stringify(arrayDePlaylist));
    } else {
      document.querySelector("button.boton-favoritos").innerText = "Eliminar de Playlist"
      // no está como playlist, entonces la agrego en el array
      arrayDePlaylist.push(id)
      window.sessionStorage.setItem("arrayDePlaylist", JSON.stringify(arrayDePlaylist));
    }
    // console.log(arrayDePlaylist);
  } else {
    document.querySelector("button.boton-favoritos").innerText = "Eliminar de Playlist"
    arrayDePlaylist = []
    arrayDePlaylist.push(id)
    window.sessionStorage.setItem("arrayDePlaylist", JSON.stringify(arrayDePlaylist));
    // console.log("no existe o esta vacio");
    // console.log(arrayDePlaylist);
  }
  console.log(JSON.parse(window.sessionStorage.getItem("arrayDePlaylist")));
}
