
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let arrChan = arr.filter(function(element) {
    return element % 2 === 0; 
});

let arrLe = arr.filter(function(element) {
    return element % 2 !== 0; 
});

console.log("Mảng số nguyên ban đầu:", arr);
console.log("Mảng số chẵn la:", arrChan);
console.log("Mảng số lẻ la:", arrLe);
