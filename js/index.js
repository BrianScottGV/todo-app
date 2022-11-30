
//alert("Hola")
form.addEventListener("submit",((event) =>{
    event.preventDefault()
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let newTask =[{
        title,
        description
    }]
    
    //console.log(newTask)

    newTask.push(JSON.stringify(newTask)) 
    saveTask(newTask)
}))

function saveTask(task){
    localStorage.setItem("task", task)
}




