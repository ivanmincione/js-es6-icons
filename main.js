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


//                ---------- MILESTONE 2 -------------

// creo una costante per definire un array di colori da associare ai diversi tipi di icona
const colors = ['red', 'green', 'yellow'];

// con il forEach estraggo i type delle icone in un nuovo array
const typeOfIcon = [];

icons.forEach((icon) => {
    // destrutturo l'elemento corrente per ricavare la chiave type e pusho nel nuovo array il risultato verificando la presenza
    const {type} = icon;
    if(!typeOfIcon.includes(type)) {
        typeOfIcon.push(type);
    }
});
console.log(typeOfIcon);

//           -------------- MILESTONE 3 ------------

// scorro tutti i type di icona
typeOfIcon.forEach((type) => {
    // per ogni tipo di icona aggiungo una option alla select
    $('#icons-filter').append(`
        <option value="${type}">${type}</option>
    `);
});

// utilizzo CHANGE per intercettare quando l'utente seleziona un type diverso
$('#icons-filter').change(() => {
    // utilizzo VAL per recuperare il type cliccato
    const selectType = $('#icons-filter').val();

    // svuoto il contenitore delle icone
    $('#container').empty();

    // verifico che l'utente seleziona un type diverso da ("")
    if(selectType != '') {
        // recupero le icone corrispondeti al tipo scelto dall'utente
        const userChoise = icons.filter((icon) => {
            return selectType == icon.type;
        });
        // stampo con la funzione
        userChoise.forEach((icon) => {
            print(icon);
        });
    } else {
        // visualizzo tutte le icone
        printAll(icons);
    }

});



//  ------------------funzioni generali -----------------


// stampo le icone
function print(element) {
    // destrutturo e recupero le chiavi name, prefix, family e type
    const {name, prefix, family, type} = element;
    // recupero il colore corrispondere al tipo
    // recupero l'indice del tipo dell'icona all'interno dell'array dei tipi
    const type_index = typeOfIcon.indexOf(type);
    // recupero il colore corrispondente al tipo dell'icona corrente
    const icon_color = colors[type_index];

    // appendo in pagina utilizzando TEMPLATE LITERAL
    $('#container').append(`
        <div class="icon-style">
            <i class="${family} ${prefix}${name} fa-2x" style="color:${icon_color}"></i>
            <span>${name}</span>
        </div>
    `);
}

// funzione per scorrere gli oggetti - da richiamare nell If quando l'utente seleziona tutte le icone
printAll(icons);

function printAll(element) {
    element.forEach((icon) => {
        print(icon);
    });
}



// ---end---
});
