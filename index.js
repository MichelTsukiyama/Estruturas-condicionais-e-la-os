/*var idade, cont = 1;
idade = prompt('Insira sua idade:');
while(idade<0 && cont<3){
  idade = prompt('Idade inválida. Insira sua idade novamente:');
  cont++; //cont++ é o mesmo que cont = cont+1
}
if(cont<3){
  alert('Sua idade é '+idade);
  }else{
    alert('Você excedeu o número de tentativas');
  }*/

/*var idade, cont  = 1;
 idade = prompt ('Insira sua idade');
do {
   idade = prompt  ('Insira sua idade');
   cont++;  
} while (idade < 0 && cont < 3);
if (cont < 3) {
   alert ("Sua idade é " + idade);
}else{
alert ("Você excedeu o número de tentativas");
}   */
var idade;
idade = prompt('Insira sua idade');
for(var cont=1; idade<0 && cont<3; cont++){
  idade = prompt('Idade inválida. Insira sua idade novamente');
}
if (cont<3){
  alert ('Sua idade é '+idade);
}else {
  alert('Você excedeu o número de tentativas')
}
