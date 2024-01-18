
var arr = [1, 2, 3, 4, 5, 2, 6, 7, 8, 9, 10, 1];


let phanTuDocNhat = arr.find(function(element, index, array) {
    return array.indexOf(element) === array.lastIndexOf(element);
});

console.log("Mảng số nguyên:", arr);
console.log("Phần tử đầu tiên là độc nhất:", phanTuDocNhat);
