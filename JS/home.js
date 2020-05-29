window.addEventListener("load",  canciones())
function canciones(){
    // api=  "e35e31c137fc27d22a4259a7b0daea9b"
    var url = "?api_key=e35e31c137fc27d22a4259a7b0daea9b"
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);