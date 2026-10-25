const todoInput = document.querySelector(".todo__input")
const todoList = document.querySelector(".todo__list")
const todoCount = document.querySelector(".todo__count")

todoInput.addEventListener("keydown" , function(event) {
if (event.key === "Enter") {
    const newTodo = document.createElement("li") 
    newTodo.classList.add("todo__item")
    newTodo.innerHTML = `<span class="todo__checkbox-circle"></span> <p class = "todo__text"> ${todoInput.value} </p> <img class="todo__cross" src="images/icon-cross.svg" alt="">`
    todoList.append(newTodo)
    todoInput.value = ""
  const allItmes = document.querySelectorAll(".todo__item").length
  const complItems = document.querySelectorAll(".todo__item--completed").length
  todoCount.innerHTML = allItmes - complItems + " items left "
}
})

todoList.addEventListener("click" , function(c) {
  if (c.target.classList.contains("todo__cross")) {
    c.target.parentElement.remove()
  }

  if(c.target.classList.contains("todo__checkbox-circle")) {
    c.target.parentElement.classList.toggle("todo__item--completed")
  }

  const allItmes = document.querySelectorAll(".todo__item").length
  const complItems = document.querySelectorAll(".todo__item--completed").length
  todoCount.innerHTML = allItmes - complItems + " items left "



})