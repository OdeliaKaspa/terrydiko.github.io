// Get saved data from sessionStorage
let title = localStorage.getItem('title'); // Your code here
let lat_max = localStorage.getItem('latMax');
let lat_min = localStorage.getItem('latMin');
let lon_max = localStorage.getItem('lonMax');
let lon_min = localStorage.getItem('lonMin');

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
document.getElementById('title').innerHTML = title;
document.getElementById('lat_max').innerHTML =lat_max;
document.getElementById('lat_min').innerHTML = lat_min;
document.getElementById('lon_max').innerHTML = lon_max;
document.getElementById('lon_min').innerHTML = lon_min;
