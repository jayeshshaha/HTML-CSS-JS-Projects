const taskInput  = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-btn');
const taskList = document.querySelector('#task-lists');

// Event listeners

addBtn.addEventListener('click',()=>{
    if(taskInput.value !== ''){
        const taskText = taskInput.value;
        const listItems = document.createElement('li');
        listItems.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>`;
        taskList.appendChild(listItems);  
        taskInput.value = "";                         
    }

})
// btn is created only when task is added
taskList.addEventListener('click',(event)=>{
    // Check if the clicked element has the class 'delete-btn'
        if(event.target.classList.contains('delete-btn')){
            // If it has the class 'delete-btn'
        // Perform some action specific to delete buttons
            const listItem = event.target.parentElement;
            
            taskList.removeChild(listItem);
        }
})

