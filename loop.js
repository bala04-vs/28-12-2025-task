// let a=12;

//     if(a%2==0){
//         console.log(a, " is even number")
//     }
//     else{
//         console.log(a,"is odd number")
//     }



// add in even

let a=[2,5,8,6,7,12,13,2];


let index=0;
let b=0;
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
       index+=a[i];
   
       
    }
    else{
        b+=a[i];

    }
   
   
}



if(index>b){
    console.log(index,"even number greater");

}
else{
    console.log(b,"odd number is greater")
}

console.log(index);
console.log(b);

console.log("sum of even and odd numbers=",index+b)
console.log("product of even and odd numbers=",index*b)



