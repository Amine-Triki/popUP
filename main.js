let parent = document.createElement("div");
let heading = document.createElement("h2");
let text = document.createElement("p");
let btn = document.createElement("button");

function popup(){
    heading.textContent = "Welcome";
    text.textContent = "Welcome To my popup ; Amine Triki";
    btn.textContent = "X";

    parent.append(heading, text, btn);
    document.body.append(parent);

    document.body.style.cssText = "font-family: arial, Tahoma; background-color: #D0D2D866;";
    parent.style.cssText = "background-color: #eee; border: 1px solid #ccc; padding 20px; text-align: center; position: relative; width: 350px; height: 150px; margin: 20px auto;";
    btn.style.cssText = "background-color: red; color: white; font-weight: bold; border: none; width: 30px; height: 30px; border-radius: 50%; position: absolute; top: -10px; right: -10px"

    btn.addEventListener("click", function(){
        btn.parentElement.remove();
        document.body.style.backgroundColor = "#fff";
    });
}
setTimeout(popup, 2500);