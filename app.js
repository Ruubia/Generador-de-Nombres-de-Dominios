var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com", ".net", ".us", ".io"];


//bucle for
function generarDominios() {
    let dominios = [];
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let n = 0; n < ext.length; n++) {
                dominios.push(pronoun[i] + adj[j] + noun[k] + ext[n]);
            }
        }
    }
}
    return dominios;
}
let dominios = generarDominios();
console.log(dominios); 
let output = "";
for (let i = 0; i < dominios.length; i++) {
  output += `<p>${dominios[i]}</p>`;
}
document.getElementById("dominios").innerHTML = output;
console.log("Dominios mostrados");
