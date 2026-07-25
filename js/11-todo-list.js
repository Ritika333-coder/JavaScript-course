const todoList = [{name : 'make dinner',
    duedate : '2026-7-22'}, 
    {name : 'wash dishes',
    duedate : '2026-7-22'}];

renderToDoList();

function renderToDoList() {
    let todoListHTML = '';
    for(let i=0;i<todoList.length;i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        const html = `
       <div> ${name}</div>
       <div>${duedate}</div>
        <button onclick="
         todoList.splice(${i},1);
         rendorToDoList();
        "
        class="delete-button">Delete</button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    }
function add() {
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date');
    const duedate = dateInputElement.value; 
    todoList.push({
       name, duedate});
     
    inputElement.value = '';
    renderToDoList();
}