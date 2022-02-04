/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
function combine(tableau1, tableau2){
    let combinedTableau = [];
    for(let i=0; i<tableau1.length; i++){
        combinedTableau.push(tableau1[i], tableau2[i]);
    }
    return combinedTableau;
};
let tableau1 = [1, 2, 3];
let tableau2 = ["apple", "orange", "banana"];
console.log(combine(tableau1, tableau2));

/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
function rotate(tableau, offset) {
    while( offset-- ){
        let temp = tableau.pop();
        tableau.unshift(temp);
    };
    return tableau;
};
let tableau = [1, 2, 3, 4, 5];
console.log(rotate(tableau, 2));

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée 
 * en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un
 * tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */
function syracuse(nombre) {
    let syracuseSuite =[nombre];
    while(syracuseSuite.length < 10){
        if ((nombre%2)==0){
            nombre = nombre/2;
        }
        else if ((nombre%2)!=0){
            nombre = (nombre*3)+1
        };
        syracuseSuite.push(nombre);
    }
    return syracuseSuite;
};
console.log(syracuse(14));