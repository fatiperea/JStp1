const num=parseInt(prompt("Ingrese un numero: "));
let i=2;

while(i<=7)
{
    if((i==2 || i==3 || i==5 || i==7) && (num%i==0))
    {
        document.write("El numero "+num+" es divisible por "+i+" ");
    }
i++;

}