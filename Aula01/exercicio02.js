/*
2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.
*/

/** 
 
INICIO
   receber prim número
   receber segu número

   se prim número >= segu número
        "Número é maior que 10!"

    se não 
        "número não é maior que 10"

FIM
*/

const prime_num = parseInt(prompt("Digite o primeiro número"));
const segu_num = parseInt(prompt("Digite o segundo número"));


 if(prime_num > segu_num){

    alert(`${prime_num} é maior que o segundo!`)
 }else{
    if(prime_num < segu_num){
    alert(`${segu_num} seu primeiro número é menor que o segundo`)
 }else{
     
    alert(`${numero} não é maior que 10 e nem igual a 10`)
 }
 }
