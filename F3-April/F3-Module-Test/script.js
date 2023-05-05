let ipAddress = document.querySelector("#ipAddress");
let token = '49c4ba97c56bbc'
fetch("https://ipinfo.io/json?token=49c4ba97c56bbc").then(
  (response) => response.json()
).then(
  (jsonResponse) => ipAddress.innerHTML = `My Public IP ADDRESS: ${jsonResponse.ip}`
)


/*

  let  lat;
  let long;
let button = document.getElementById("get-data");
let info = document.querySelector(".container");
let city = document.querySelector(".container");
button.addEventListener("click", function(){
    button.style.display = "none"
    info.style.display = "flex"
  /*  fetch(`https://ipinfo.io/${ipAddress}/geo`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });*/
/*
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        lat = position.coords.latitude;
        long = position.coords.longitude;
        document.querySelector("#lat").innerHTML =`<span>Lat: ${lat}</span>`;
        document.querySelector("#long").innerHTML =`<span>Long: ${long}</span>`;
        displayMap(lat,long);
    });
  }else{
    alert("Geolocation is not supported by this browser.");
    
  }

})
*/
/*
function displayMap(lat,long){
    fetch("")
}             */