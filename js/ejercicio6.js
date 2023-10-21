let num1=parseInt(prompt("Ingrese el primer numero: "));
let num2=parseInt(prompt("Ingrese el segundo numero: "));

if(num1==num2)
{
    document.write("Los numeros son iguales");
}
else
if (num1>num2)
{
    document.write("El numero mas grande es: ", num1);
}else
document.write("El numero mas grande es: ", num2);