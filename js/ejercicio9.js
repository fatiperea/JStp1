let frase = prompt("Ingrese frase: ");
let vocales = " ";
let aux = false;

if (isNaN(frase)) {
  for (let i = 0; i < frase.length; i++) {
    switch (frase.charAt(i)) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vocales = vocales + frase.charAt(i);
        aux = true;
        break;
    }
    
  }
  if(aux) document.write("Vocales de la frase: ", vocales);
  else document.write("No ingreso vocales");
} else document.write("No ingreso frase");

