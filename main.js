"use strict";
//Assingment no 2
//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Karim Buksh";
//lowercase
console.log("lowercase:", personName.toLowerCase());
//uppercase
console.log("uppercase:", personName.toUpperCase());
//titlecase
console.log("titlecase:", toTitleCase(personName));
// my titlecase was not find here therefore i used it manually through function
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log("titlecase:", toTitleCase(personName));
