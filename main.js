'uses strict'

const shoppingList = document.querySelector("#shoppingList");
const deleteList = document.querySelector("#deleteItemList");

function createShoppingItem(value) {
//    const p = document.createElement("p");
//    shoppingList.appendChild(p);
//    p.innerText = value;
    shoppingList.innerHTML += `<p>${value}</p>`

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

let seznam = [];


const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click",pridejPolozku);





function pridejPolozku(){
    const input = document.querySelector("#newItem");
    const value = input.value;
    


    const polozka = {id:seznam.length,nazev:value};

    seznam.push(polozka);
    console.table(seznam);
    
    createShoppingItem(value)
    
}
