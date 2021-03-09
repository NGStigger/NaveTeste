let frase = "T35t3 d3 35t4g1o";

let x = {
  4: "a",
  3: "e",
  1: "i",
  5: "s"
};

frase = frase.replace(/3/g, x[3]);
frase = frase.replace(/4/g, x[4]);
frase = frase.replace(/5/g, x[5]);
frase = frase.replace(/1/g, x[1]);

document.write(frase);
