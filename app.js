var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com", ".net", ".us", ".io"];



function generateDomains() {
    let domains = [];
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let n = 0; n < ext.length; n++) {
                domains.push(pronoun[i] + adj[j] + noun[k] + ext[n]);
            }
        }
    }
}
    return domains;
}
let domains = generateDomains();
console.log(domains); 
let listDomains = "";
for (let i = 0; i < domains.length; i++) {
  listDomains += `<p>${domains[i]}</p>`;
}
document.getElementById("dominios").innerHTML = listDomains;
console.log("Dominios mostrados");
