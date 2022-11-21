var itemsList = [];
document.getElementById("add-bttn").addEventListener("click", () => {
    const input = document.getElementById("user-input");
    addItem(input.value);
    input.value = "";
});

document.querySelector('#user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const input = document.getElementById("user-input");
        addItem(input.value);
        input.value = "";
    }
});

addItem = (input) => {
    const todoList = document.getElementById("todo-list");
    const item = document.createElement("li");
    const itemSpan = document.createElement("p");
    itemSpan.innerHTML = input;


    item.appendChild(itemSpan);
    createCheckbox(item);
    createDelBttn(item);
    todoList.appendChild(item);
    itemsList.push(item);
}

createDelBttn = (parent) => {
    const bttn = document.createElement("button");
    const image = document.createElement("i");
    image.className = "fas fa-trash";
    bttn.appendChild(image);
    // bttn onclick function here
    bttn.onclick = () => {
        bttn.parentElement.remove();
    }

    parent.appendChild(bttn);
}

createCheckbox = (parent) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = () => {
        if (checkbox.checked) {
            const textToSelect = checkbox.previousSibling;
            textToSelect.style.textDecoration = "line-through";
            textToSelect.style.color = "#d9d9d9";
        }
        else {
            const textToSelect = checkbox.previousSibling;
            textToSelect.style.textDecoration = "none";
            textToSelect.style.color = "black";
        }
    }
    parent.appendChild(checkbox);
}