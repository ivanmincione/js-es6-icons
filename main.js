// milestone 1:
// definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

// milestone 2: definire un array di colori e associare ad ogni tipo di icona un colore. Visualizzare le icone di colore diverso in base al tipo.

// milestone 3: aggiungere una select per filtrare le icone in base al tipo.
// Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

$( document ).ready(function() {

//                ---------- MILESTONE 1 -------------
// creo un array di oggetti
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
];

// visualizzo le icone in pagina.
// scorro l'array Utilizzando il ciclo forEach
icons.forEach((icon) => {
    // destrutturo gli oggetti per ricavare la proprietò che mi interessa
    const {name, prefix, type, family} = icon;
    console.log(name, prefix, type, family);
    // stampo in pagina le icone ed il loro nome
    $("#container").append(`
        <div class="icon-style">
            <i class="${family} ${prefix}${name} fa-2x" style="color:${colorIcon}"></i>
            <span>${name}</span>
        </div>
        `)
});


//                ---------- MILESTONE 2 -------------

// creo una costante per definire un array di colori da associare ai diversi tipi di icona
const colors = ["red", "green", "blue"];

// con il forEach estraggo i type delle icone in un nuovo array
const typesOfIcon = [];
icons.forEach((element) => {
    // destrutturo l'elemento corrente per ricavare la chiave type e pusho nel nuovo array il risultato verificando la presenza
    const {type} = element;
    if (!typesOfIcon.includes(type)) {
        typesOfIcon.push(type);
    }
});
console.log(typesOfIcon);

// function colorIcon(obj) {
// 
//     const indexType = typesOfIcon.indexOf(type);
//
//     const colorIcon = colors[indexType];
// }
















// ---end---
});
