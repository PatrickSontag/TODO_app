const ul = document.querySelector('#todo-list');
const form = document.querySelector('#add-task');
const addButton = document.querySelector('#add-task button');
const input = document.querySelector('#new-item');
let myStorage = window.localStorage;


// EVENTLISTENER when DOM loads:  Search localStorage for existing tasks
document.addEventListener("DOMContentLoaded", function() {

});

// function strikeItem() {
//     document.ul.texdecoration = line-through;
// }

ul.addEventListener('click', function(e){
    
    // COMPLETE BUTTONS
    // ADDED "name" ("cmplt") TO BUTTON IN HTML
    if (e.target.name === 'cmplt') {
        e.target.parentElement.classList.toggle('line');
    }

    // REMOVE BUTTONS
    // ADDED "name" ("rmv") TO BUTTON IN HTML
    if (e.target.name === 'rmv') {
        e.target.parentElement.remove();
    }

    // console.log(e);
})

addButton.addEventListener('click', function(e){
    // PREVENT PAGE FROM RELOADING
    e.preventDefault();
    // console.log(input.value);
    // CREATE AN EMPTY LI, THEN BUTTON
    const newLI = document.createElement('li')
    const completeBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    // ADD TEXT AND NAME TO BUTTONS
    completeBtn.innerText = 'Complete';
    completeBtn.name = 'cmplt';
    removeBtn.innerText = 'Remove';
    removeBtn.name = 'rmv';
    // ADD INPUT VALUE TO LI
    newLI.innerText = input.value;
    newLI.appendChild(completeBtn);
    newLI.appendChild(removeBtn);
    const storeLI = {
        taskName : input.value,
        completed : false
    };
    
    // console.log(newLI);
    // CLEAR VALUE IN INPUT BOX


    ul.appendChild(newLI);

    localStorage.setItem('storeLI', JSON.stringify(storeLI));
    console.log("JSON", JSON.stringify(storeLI.innerText));
    console.log("newLI", newLI);
    // console.log("myStorage", myStorage);

    input.value = '';
})

