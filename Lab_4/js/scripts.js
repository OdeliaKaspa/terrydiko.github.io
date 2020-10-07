const myFullName = "Terrence Diko"// 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

const name = document.querySelector(".header");

name.innerText = myFullName + "'s Lab 4";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
const getContent = document.querySelector(".content");

const para1 = document.createElement("p");
para1.className = "content1";
getContent.appendChild(para1);

let para2 = document.createElement("p");
para2.className = "content2";
getContent.appendChild(para2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

const getPara1 = document.querySelector(".content1");
para1.textContent = "My name has " + (myFullName.length - 1)+ " characters";



// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
const getPara2 = document.querySelector(".content2");

let firstName = myFullName.split(" ")[0];

para2.innerText = firstName.split("")[2].toUpperCase();


// 6 Add a new line to your second paragraph

para2.insertAdjacentHTML("beforeend", "<br> ")

// 7 Return the final three characters of your last name to that new line
let lastName = myFullName.split(" ")[1]
para2.insertAdjacentText("beforeend",lastName.substring(lastName.length - 3))

// 8 Substring your first and last name into two separate variables

// 9 Add the total length of your first and last names together
const nameLenght = firstName.length + lastName.length;
// 10 Display that total next to your name in your header
name.insertAdjacentText("beforeend", " "+ nameLenght)