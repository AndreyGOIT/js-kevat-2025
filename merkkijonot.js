//slice() metoodin avulla voi poimia osan merkkijonosta
let email = "anna.kuusisto@hus.fi";
//Halutaan saada Anna Kuusisto
let email2 = email.slice(0, 10);
let copy = email.slice();
//console.log("sähköpostiosoitteen kopio: ", copy);

//split() metodi poimii osan merkkijonosta ja palauttaa taulukon
let nimiOsa = email.split("@")[0];
//console.log("Koko nimen osa: ", nimiOsa);
let sukunimiOsa = email.split(".")[1].split("@")[0];
let etunimiOsa = email.split("@")[0].split(".")[0];
// console.log("Sukunimi: ", sukunimiOsa);
// console.log("Etunini: ", etunimiOsa);
// console.log("Koko nimi: ", etunimiOsa + " " + sukunimiOsa);

//charAt() metodi palauttaa merkin
let etuNimiIsona = etunimiOsa.charAt(0).toUpperCase() + etunimiOsa.slice(1);
//console.log("Etu nimi isolla alkukirjaimella: ", etuNimiIsona);
let sukuNimiIsona = sukunimiOsa.charAt(0).toUpperCase() + sukunimiOsa.slice(1);
let kokoNimi = etuNimiIsona + " " + sukuNimiIsona;
//console.log("Koko nimi isolla alkukirjaimella: ", kokoNimi);
//---------------------------------------------------------
let hakuSana = "vo";
let paikka = "Povoon uimahalli";

// if (paikka.indexOf(hakuSana) !== -1) {
if (paikka.includes(hakuSana)) {
    console.log("Haku sana löytyy", paikka);
    console.log("Haku sana löytyy paikasta: ", paikka.indexOf(hakuSana));
} else {
    console.log("Hakusnalla ei löydy tietoa: ", paikka.indexOf(hakuSana));
}

let nappi = document.getElementById("#nappi").addEventListener("click", function () {
    console.log("Nappia painettu");
});
$("#nappi").click(function () {
    console.log("Nappia painettu");
});