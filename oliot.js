const asiakkaat = [
    {
        id: 1,
        nimi: "Matti",
        puhelin: "0401234567",
        ika: 30
    },
    {
        id: 2,
        nimi: "Maija",
        puhelin: "0401234568",
        ika: 25
    },
    {
        id: 3,
        nimi: "Jukka",
        puhelin: "0401234569",
        ika: 20
    }
]
//asiakkaat[0].puhelin = "1234567890"
asiakkaat.push({
    id: 4,
    nimi: "Mikko",
    puhelin: "0401234560",
    ika: 15
})
asiakkaat.forEach(asiakas => {
    console.log("Asiakkaan nimi on", asiakas.nimi, "ja puhelinnumero on", asiakas.puhelin)
    console.log("---------------------------------------------------------");
})