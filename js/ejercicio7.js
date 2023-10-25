const num1=parseInt(prompt("Ingrese el primer numero: "));
const num2=parseInt(prompt("Ingrese el segundo numero: "));
const num3=parseInt(prompt("Ingrese el primer numero: "));

if(num1 == num2 && num1 == num3)
{
    document.write("Los numeros son iguales");

}else if(num1>=num2 && num1>=num3)
{
    document.write("El numero mas grande es: ", num1);

}else if(num3>=num2)
{
    document.write("El numero mas grande es: ", num3);

}else
{
    document.write("El numero mas grande es: ", num2);
}

    




