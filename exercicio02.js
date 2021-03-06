let frutas = "teste 1 de 2 string 3";
let espaco = " ";

for (let i = 0; i < frutas.length; i++) {
  let elemento = frutas[i];
  if (elemento >= 0 && elemento !== espaco) {
    frutas = frutas.replace(elemento, "$");
  }
}

document.write(frutas);
