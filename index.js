let cats = ['Milo','Otis','Garfield'];
function destructivelyAppendCat(name){
cats.push('Ralph');
}
function destructivelyPrependCat(){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
cats.splice(-1);
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
   return[...cats,'Broom'];
}
function prependCat(name){
    return['Arnold',...cats];
}
function removeLastCat(){
    return cats.toSpliced(-1,1);
}
function removeFirstCat(){
   return cats.toSpliced(0,1);
}
