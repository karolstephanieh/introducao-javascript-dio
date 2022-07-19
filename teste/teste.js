// console.log("Hello World!");

function returnEvenValues (array) {
    let evenNUMS = [];
    for (let i=0; i<array.length; i++) {
        if (array[i]%2 === 0){
            evenNUMS.push(array[i]);
        } else {
            console.log(`${array[i]} não é par`);
        }
    }
    
    console.log("Os números pares são:", evenNUMS)
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);