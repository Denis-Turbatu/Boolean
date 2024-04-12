// 1 stampare tutte le immagini
//foreach

imagArray.forEach((curImg) => {
    const slider = querySelector(".slider");
    const slideElem = `
        oggetto html
    `
    slider.curImg.innerHTML += slideElem;
});

// 2 Selezioni gli elementi e imposto la prima slide attiva

// prendo elemento
// variabile con indice a 0

// aggiungere .active a indice 0

// 3 tolgo active e lo sposto
// eventListener per tasti slider
// remove active
// aumento indice
// metto active al nuovo indice
// cappare gli elementi, se ho massimo 3 se indice va a 4, levo 4 e metto 0, se scendo porto indice al valore massimo del mio array

