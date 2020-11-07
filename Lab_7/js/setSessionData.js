const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value;// Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
       
          localStorage.setItem('title', route.title)
          localStorage.setItem('latMax', route.lat_max)
          localStorage.setItem('latMin', route.lat_min)
          localStorage.setItem('lonMax', route.lon_max)
          localStorage.setItem('lonMin',  route.lon_min)
      
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
