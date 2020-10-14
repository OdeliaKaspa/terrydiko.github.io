//Header
let myFullName = "Ted Trabucco";
const myHeading = document.querySelector(".header");
myHeading.innerText = `${myFullName}\'s List of Countries`;
//Body
const btn = document.querySelector('button');
const listOrdered = document.querySelector(".content");
listOrdered.className = "countries";
btn.addEventListener('click', countryListMaker);


function countryListMaker(){
var countries = [];
var unusedCountries = countryList;
//Adds countries until length of array is 25
while (countries.length < 25) {
//!!!!!!!!!!!!Generates random country, REMOVING "countryList" FROM BEGGINNING WILL GENERATE JUST NUMBER!!!!!!!
    countryID = [Math.floor(Math.random() * countryList.length)];
//Only adds to array if it is not already on it
    if (countries.includes(countryList[countryID]) === false) {
        countries.push(countryList[countryID]);
    }
}
//Sorts alphabetically based on key/value pairs, explained @ https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
countries.sort((c1, c2) => (c1.name > c2.name) ? 1 : -1);
//Lets you remove elements from another array explained @ https://stackoverflow.com/questions/19957348/remove-all-elements-contained-in-another-array
unusedCountries = unusedCountries.filter(function(country) {return !countries.includes(country);});
console.log(unusedCountries);
//Injects ordered list, accesses based on keys
//Injection explanation @https://codepen.io/cferdinandi/pen/gEMJQm AND https://gomakethings.com/using-array.map-to-create-markup-from-an-array-with-vanilla-js/
listOrdered.innerHTML = '<ol>' + countries.map(function (country) {
    return '<li>' + country['name'] + ", " + '<strong>' + country['code'] + '</strong>' + '</li>';
}).join('') + '</ol>';