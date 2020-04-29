'uses strict'

const shoppingList = document.querySelector("#shoppingList");
const deleteList = document.querySelector("#deleteItemList");

function createShoppingItem(value) {
    const p = document.createElement("p");
    shoppingList.appendChild(p);
    p.innerText = value;
}

function createDeleteItem(id) {
    const option = document.createElement("option");
    deleteList.appendChild(option)
    option.innerText = id;
}

function clearShoppingList() {
    shoppingList.innerHTML = "";
}

function clearDeleteList() {
    deleteList.innerHTML = ''
}

