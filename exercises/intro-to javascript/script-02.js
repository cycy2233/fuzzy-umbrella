// let age=12;

// if(age < 8){
//     console.log("Check out the Marry-Go-Round, You'll love it!");
// } else if(age > 8 && age < 65){
//     console.log("Check out the Roller Coaster. It's awesome!");
// } else{
//     console.log('Why not enjoy a float down the Lazy River?');
// }

let nouns = ["heart","rainbow","ocean"];
let verbs = ["look","make","continue"];
let adjectives = ["good","different","possible"];

// let random = Math.floor(Math.random () * nouns.length)
let noun = nouns[Math.floor(Math.random () * nouns.length)]
let verb = verbs[Math.floor(Math.random () * verbs.length)]
let adjective = adjectives[Math.floor(Math.random () * adjectives.length)]

let sentence= `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`
console.log(sentence);