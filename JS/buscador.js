window.onload = function () {
    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString) ;

var loQueBuscoElUsuario = queryStringObj.get('buscador');

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + loQueBuscoElUsuario)
.then(function (data) {
    return data.json();
})
.then(function(resultados){

    //lo que yo quiera con los resultados

    var loader = document.getElementById('#onload');

    window.addEventListener ("load", function() {
    //Esconder el spinner dsp de 2 segundos
    setTimeout(function(){loader.style.display = 'none';}, 2000);

});

    console.log(resultados);
    var contenido = "";
    for (var i = 0; i < 5; i++) {
        var canciones = resultados.data[i];

        
       //contenido += "<ul>"
        contenido +=    "<li>" + canciones.title + "</li>"
        //contenido += "<ul>"
        
    
    }
    var contenedor = document.querySelector('.resultados')
    contenedor.innerHTML = contenido

    
})
.catch(function(error){
    console.log(error);

})

}

