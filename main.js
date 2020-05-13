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


function nejvyssiId() {
    let aktualneNejvyssiId = 0;
    for (const polozka of seznam) {
        if (aktualneNejvyssiId < polozka.id) {
            aktualneNejvyssiId = polozka.id;
        }
    }
    return aktualneNejvyssiId;
}


function pridejPolozku() {
    const input = document.querySelector("#newItem");
    const value = input.value;

    const polozka = { id: nejvyssiId() + 1, nazev: value };

    seznam.push(polozka);
    console.table(seznam);

    createShoppingItem(value)
}


let seznam = [
    { id: 0, nazev: "Banan" },
    { id: 1, nazev: "Ananas"},
    { id: 2, nazev: "Meloun" },
    { id: 5, nazev: "Hruska" }
];


const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", pridejPolozku);

//1 nejak zovolat funkci vypisSeznam s argumentem seznam
//2 aby funkce vypisSeznam vypsala jednotlive polozky

function vypisSeznam(nakupniSeznam){ 

}