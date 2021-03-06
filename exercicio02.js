let x = "teste 1 de 2 string 3";
let espaco = " ";

for (let i = 0; i < x.length; i++) {
  let elemento = x[i];
  if (elemento >= 0 && elemento !== espaco) {
    x = x.replace(elemento, "$");
  }
}

document.write(x);
