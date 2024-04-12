// PASSARE DATI FORM
const formElem = document.getElementById("form");
const emailForm = document.getElementById("email");
const passwordForm = document.getElementById("password");
formElem.addEventListener("submit", addMember);

function addMember(event){
    event.preventDefault();
    
    const newEmail = emailForm.value;
    const newPassword = passwordForm.value;

    console.log(newEmail, newPassword);
}

// PROVA FOREACH CON ARROW FUNCTION
const myArray = [2, 6, 37, 76, 45];

// for automatizzato
myArray.forEach((curElem, index) => {
    console.log("oggetto:", curElem,"| indice", index);
});

//Crea un array, svolge il for e pusha in automatico
const newArray = myArray.map((curElem, index) => {
    if(curElem % 2 === 0){
        console.log("oggetto:", curElem, "| indice", index);
    }
});


// torna un valore booleano se vero torna gli elementi che rispettano la condizione, SOLO da filtro senno usa .map()
const evenNums = myArray.filter((curNums) => {
    return curNums % 2 === 0;
});

console.log("filter(): ", evenNums);