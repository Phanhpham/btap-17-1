var arr=["ab",2,3,66];

var a= arr.Length;
var temp,index;

while(a>0){
    index = Math.floor(Math.random()*a);
    a--;
    temp = arr[a];
    arr[a] = arr[index];
    arr[index] = temp;
}
console.log(arr);