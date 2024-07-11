var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com", ".net", ".us", ".io"];


//bucle for

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let n = 0; n < ext.length; n++) {
                console.log(
                    pronoun[i] +
                    adj[j] +
                    noun[k].slice(0, 4) +
                    "." +
                    noun[k].slice(4, 6) +
                    ext[n]
                );
            }
        }
    }
}