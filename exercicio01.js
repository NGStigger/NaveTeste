let string1 = prompt("Digite algo:");
let string2 = prompt("Digite algo:");

let tam1 = string1.length;
let tam2 = string2.length;

if (tam1 > tam2) {
  document.write(string1);
} else {
  document.write(string2);
}
