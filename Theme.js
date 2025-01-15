//tarkistetaan onko theme valittu (lockally)
let theme = localStorage.getItem("theme");
if (theme === "dark") {
    dark();
} else {
    light();
}   

function dark(){
    let x = document.getElementById("page");
    x.style.background = "gray";
    x.style.color = "lightgray";
    localStorage.setItem("theme", "dark");
}
function light(){
    let x = document.getElementById("page");
    x.style.background = "white";
    x.style.color = "black";
    localStorage.setItem("theme", "light");
    // function loadTheme(){
    //     let theme = localStorage.getItem("theme");
    //     if (theme === "dark") {
    //         dark();
    //     } else {
    //         light();
    //     }
    // }
    

}
function night() {
    document.getElementsByTagName("body")[0].style.background = "gray";
}