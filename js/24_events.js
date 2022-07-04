/*
  Events : 
*/

// Form validations :
let usernameInput = document.querySelector("[name='username']");

let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function(e) {

    let usernameValid = false;
    let ageValid = false;

    if (usernameValid === false || ageValid === false) {
        e.preventDefault();
    }

    if (usernameInput.value !== "" && usernameInput.value.length <= 10) {
        usernameValid = true;
        console.log('usename is value')
    }

    if (ageInput.value !== '') {
        ageValid = true;
        console.log('age is value')
    }
}


/*
    Events 
*/

// dealing with classes element : 

let myElement = document.querySelector('.my-div');

// get the classes as a collection : 
let classes = myElement.classList;

// check if specific class is exists or not :
let exits = myElement.classList.contains('active'); // true or false

// get the class using its index :
let firstClass = myElement.classList.item("0") // first class from group of classes
let secondClass = myElement.classList.item("1")

myElement.onclick = function() {
    this.classList.remove('active ')

    this.classList.add('first', 'second');
}

// each click will toggle this class, if it is exists => will remove it or will add it. 
myElement.onclick = function() {
    this.classList.toggle('active')
}



/*
    Events : 
    Dealing with elements : 
*/

let element = document.querySelector('.my-div');

let createParagraph = document.createElement('p');

// put element or text after/before that element 
// (outer the element => will be siblings) 
element.after("<div>another div</div>");

element.before(createParagraph);



// put element or text inside that element 
// (inside the element => will be children) 
element.append("<div>child elelment in the last</div>");

element.prepend("<div>child elelment in front</div>");

element.before(createParagraph);

// remove the element from the page : 
element.remove();