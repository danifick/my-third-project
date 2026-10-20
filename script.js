const todoInput = document.querySelector(".todo__input")
const todoList = document.querySelector(".todo__list")


todoInput.addEventListener("keydown" , function(event) {
if (event.key === "Enter") {
    const newTodo = document.createElement("li") 
    newTodo.classList.add("todo__item")
    newTodo.innerHTML = `<span class="todo__checkbox-circle"></span> ${todoInput.value} <img class="todo__cross" src="images/icon-cross.svg" alt="">`
    todoList.append(newTodo)
    todoInput.value = ""
}
})