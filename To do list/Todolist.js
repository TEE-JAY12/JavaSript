var toggleCheck = function(){
    // Create a variable to refer the to-do list, that is, the parent node of the checkbox
    let parent = this.parentNode;
    // Use the classList property to toggle the class checked, for example, varName.classList.toggle('checked')
    parent.classList.toggle('checked');
  };
  
  var deleteTodo = function(){
    // Create a variable to refer the to-do list, that is, the parent node of the delete button
    let todoLi = this.parentNode;
    // Remove the list item using the .remove() function, for example, varName.remove()
    todoLi.remove();
  };
  
  var addTodo = function(todo) {
    let li = document.createElement('li');
  
    let label = document.createElement('label');
    label.innerHTML = todo;
    
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.onclick = toggleCheck;
  
    // Write code to trigger the toggleCheck function once the checkbox is clicked
  
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = deleteTodo;
    // Write code to trigger the deleteTodo function once the delete button is clicked
  
    // Nest todo elements in list item
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    
    let todolist = document.querySelector('#todoList');
    // Write code to append todo element in list with "todoList" id
    todolist.appendChild(li);
  };
  
  document.getElementById('add').onclick = function() {
      // Store the button's parent element (.addTodo <div>) in a variable
    var parent = this.parentNode;
    // Store the input, which is the first child element of the .addTodo <div>
    var addTextInput = parent.children[0];
    // Make sure that the input's value is not empty in the following if condition
    if(addTextInput.value === "") {
      return;
    } else {
      
      // Add todo
      addTodo(addTextInput.value);
      // Reset input 
      addTextInput.value = ""; 
      
    }
  };
  