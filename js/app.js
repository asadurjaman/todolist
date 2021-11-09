// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

// caching the dom elements
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//TODO
// 1. capturing in the user input
// 2. after clicking the submit btn
// ==> 1.creating the todo div
// ==> 2.creating the li element
// ==> 3.creating the btn
// ==> 4.insert all the elements into the div
// ==> 5.insert the div elements into the todo-list
// 03. Add event lisiter to check and trush btn

//event listener 

todoBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // creating the user input
    const userInput = todoInput.value;
    // creating the div element
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerText = userInput;
    todoDiv.appendChild(li);

    if (userInput == "") {
        alert("Please enter todo-item!");
        return false;
    }

    const checkBtn = document.createElement('button');
    checkBtn.className = 'check';
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkBtn);

    const trashBtn = document.createElement('button');
    trashBtn.className = 'trash';
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashBtn);
    todoList.appendChild(todoDiv);
    todoInput.value = '';
});

todoList.addEventListener('click', function(e) {
    const clickedEl = e.target;

    if (clickedEl.className == 'check') {
        const todoDiv = clickedEl.parentElement;
        todoDiv.classList.add('completed');
        clickedEl.remove();
    } else if (clickedEl.className == 'trash') {
        const todoDiv = clickedEl.parentElement;
        todoDiv.classList.add('drop-effect');

        todoDiv.addEventListener('transitionend', function() {
            todoDiv.remove();
        });
    }
});