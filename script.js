// Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}; 


// Question 2
const heading = document.querySelector("h3"); 
console.dir(heading); 


// Question 3
heading.style.fontSize = "2em";


// Question 4
heading.classList.add("subheading"); 


// Question 5
const paragraphs = document.querySelector("p"); 


// Question 6
const resultsContainer = document.querySelector(".results"); 
resultsContainer.innerHTML = `<p>New paragraph</p>`; 


// Question 7
function catName (catArray) {
 for (let i = 0; i < catArray.length; i++) {
     console.log(catArray[i].name);
 }
}

catName(cats);


// Question 8
function catName(catArray) {
    let name; 
    let returnValue;
    for(let i = 0; i < catArray.length; i++) {
        name = catArray[i].name;
        if(returnValue = null) {
            returnValue = `<h5>${name}</h5>\n`
        } 
        else {
            returnValue = returnValue += `<h5>${name}</h5>\n`; 
     }   
    }
    return returnValue;
}
     

// Question 9
resultsContainer.innerHTML = catName(cats);


// Question 10 
function catName(catArray) {
    let name; 
    let age; 
    let returnValue; 
    for (let = 0; i < catArray.length; i++) {
        name = catArray[i].name;
        if(catArray[i].age == null) {
            age = "Age unknown";    
        }
        else {
            age = catArray[i].age;
        }
        if(returnValue == null) {
            returnValue = `<div>\n  <h5>${name}</h5>\n  <p>${age}</p>\n</div>\n`
        }
        else {
            returnValue = returnValue += `<div>\n    <h5>${name}</h5>\n    <p>${age}</p>\n</div>\n`; 
        }
    }
    return returnValue;
}

console.log(catName(cats)); 