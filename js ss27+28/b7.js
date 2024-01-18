var str = prompt("nhap vao 1 chuỗi bất kì");

const Str=[];

for(let i=0;i<str.length;i++){
    for(j=i+1;j<=str.length;j++){
        Str.push(str.slice(i,j));
    }
}
    console.log(Str);  