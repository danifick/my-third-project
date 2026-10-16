const todoInput = document.querySelector(".todo__input")
todoInput.addEventListener("keydown" , function(event) {
if (event.key === "Enter") {
    console.log(todoInput.value)
}
})