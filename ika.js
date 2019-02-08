function ika(a){
    //console.log(a);
    if(a === undefined || a === null){
        throw new Error('nolla parametria annettu');
    }
  
    let ika=Number(a);
    if(Number.isNaN(Number(a))){
        throw new Error('Ei lukuja');
    }
    //console.log(summ);
   if(ika<18){
    return false;
   }else{
       return true;
   }
}

module.exports = ika;