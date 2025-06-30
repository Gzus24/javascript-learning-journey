function add(a, b){
   return a + b;
}
console.log(add(2,5));

// 2. Impure function

let isBlue;

function favColor(color){
   if(color.toLowerCase() === 'blue'){
      isBlue = true;
   }else{
      isBlue = false;
   }

   console.log(isBlue);
}

favColor('Blue');