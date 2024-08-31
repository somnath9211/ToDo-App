function loadTodos(){
    // This function will load the todos from the browser.

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log(todos);
}

document.addEventListener("DOMContentLoaded", function(){
    loadTodos();
})