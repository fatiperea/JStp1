let frase = prompt("Ingrese frase: ");

for (let i = 0; i < frase.length; i++) {
  switch (frase.charAt(i)) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      document.write(frase.charAt(i));
      break;

    default:
      document.write("No ingreso una frase con vocales"+"<br>");
      break;
  }
  
}
