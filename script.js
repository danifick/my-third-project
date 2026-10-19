const todoInput = document.querySelector(".todo__input")
const todoList = document.querySelector(".todo__list")


todoInput.addEventListener("keydown" , function(event) {
if (event.key === "Enter") {
    const newTodo = document.createElement("li") 
    newTodo.classList.add("todo__item")
    newTodo.textContent = todoInput.value
    todoList.append(newTodo)
    todoInput.value = ""
}
})