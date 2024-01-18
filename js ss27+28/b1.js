var arr=[1,2,3,4];

let max =arr[0];

let min=arr[0];

for(let i = 0;i<arr.length;i++){
    let num=arr[i];
    if(num>max){
        max=num;
    }else if(num<min_value){
        min=num;
}
}
console.log("phan tu lon nhat la",max);
console.log("phan tu nhỏ nhat la",min);