var arr=[2,3,5,6,7];

let newArr = arr.filter(function(element){
    return element  % 2 ===0

});

console.log("mang so nguyen ban dau",arr);
console.log("mang so nguyen sau khi loại bỏ phan tu lẻ",newArr);