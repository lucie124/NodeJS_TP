
var s = prompt("Votre nom ?")

console.log("Hello " + s + "!");

function fact(n) {
   // code de la fonction
    if(n<=1){
        return 1;
    }else{
        return n*fact(--n);
    }

}

var result = fact(6);
console.log("6! = ",result);

function applique(f,tab){
    var result = new Array();
    for (var i=0; i<tab.length; i++)
    {
        result.push(f(tab[i]));
    }
    return result;
}

console.log(applique(fact,[1,2,3,4,5,6]));

console.log(applique(function(n) { return (n+1); } , [1,2,3,4,5,6]));