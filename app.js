var list = document.getElementById('list')



function addTodo(){
    const todoItem = document.getElementById('todo-item')

    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)

    li.appendChild(liText)

    
    
    var delBtn = document.createElement("button")
    var delTxt = document.createTextNode('DELETE')
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delTxt)
    li.appendChild(delBtn)

    // edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")


    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(li)
    
    todoItem.value = ""
    console.log(li);
}


function deleteItem(e){
    console.log(e.parentNode)
    e.parentNode.remove()
}


function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt('Enter edidt value', val)
    // console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue = editValue
}

