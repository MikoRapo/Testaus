function sum(a, b=0){
    //console.log(a);
    if(a === undefined || a === null){
        throw new error('nolla parametria annettu');
    }
    let summa = Number(a)+Number(b);
    //console.log(summ);
    if(Number.isNaN(summa)){
        throw new Error('ei lukuja');
    }
    return summa;
}

module.exports = sum;