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

let seznam = [
    { id: 0, nazev: "Banan" ,koupe: ["Patek", "Nedele", "Pondeli"] },
    { id: 1, nazev: "Ananas",koupe: [ "Pondeli"]  },
    { id: 2, nazev: "Meloun" },
    { id: 5, nazev: "Hruska" }
];

let koupe = [
    { id: 0, id_seznam:0, nazev: "Patek" },
    { id: 2, id_seznam:0, nazev: "Nedele" },
    { id: 1, id_seznam:1, nazev: "Pondeli" },
];



const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", pridejPolozku);


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
