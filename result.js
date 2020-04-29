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


function showAllItems() {
    clearShoppingList();
    shoppingListItems
        .map(it => `(${it.id}) ${it.value}`)
        .forEach(it => createShoppingItem(it));
}


function fillDeleteList() {
    clearDeleteList();
    shoppingListItems
        .map(it => it.id)
        .forEach(it => createDeleteItem(it))
}


let shoppingListItems = []

function findMaxId() {
    if (shoppingListItems.length === 0) {
        return 1;
    }
    const sortIds = shoppingListItems.sort((a, b) => b.id - a.id);
    return sortIds[0].id + 1;
}


const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
    const value = document.querySelector("#newItem").value;
    const id = findMaxId();
    
    shoppingListItems.push({ id, value });

    showAllItems();
    fillDeleteList();
});

const btnDelete = document.querySelector("#btnDelete");
btnDelete.addEventListener("click", () => {
    const idToDelete = document.querySelector("#deleteItemList").value;
    console.log(idToDelete);

    shoppingListItems = shoppingListItems.filter(it=> it.id !== parseInt(idToDelete));

    showAllItems();
    fillDeleteList();
});