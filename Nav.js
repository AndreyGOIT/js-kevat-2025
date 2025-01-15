//----------NAVIGOINTI------------
function sayHello(){
    alert("Hello World");
}
function whoAmI(){
    let x = "<p>I am a junior developer</p>";
    document.getElementById("root").innerHTML = x;
}
function mySkills(){
    let x = `<ul>
                <li>SQL</li>
                <li>C#</li>
                <li>JavaScript</li>
            </ul>`;
    document.getElementById("root").innerHTML = x;
}
//--------------SETTER----------------------
document.getElementById("ref_btn").addEventListener("click", function(){
    let p = document.createElement("p");
    let t = document.createTextNode("Hello World");
    // p.textContent = "Hello World";

    p.appendChild(t);
    
    // document.body.appendChild(p);
    let root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(p);
});