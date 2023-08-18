let isLight = false;
let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function operations() {
        if (display.textContent.length < 24) {
            if (buttons[i].textContent == "AC") {
                display.textContent = "";
            }
            else if (buttons[i].textContent == "DE") {
                display.textContent = display.textContent.slice(0, -1);
            }
            else if (buttons[i].textContent == "%") {
                display.textContent += "%";
            }
            else if (buttons[i].textContent == "/") {
                display.textContent += "/";
            }
            else if (buttons[i].textContent == "7") {
                display.textContent += "7";
            }
            else if (buttons[i].textContent == "8") {
                display.textContent += "8";
            }
            else if (buttons[i].textContent == "9") {
                display.textContent += "9";
            }
            else if (buttons[i].textContent == "*") {
                display.textContent += "*";
            }
            else if (buttons[i].textContent == "4") {
                display.textContent += "4";
            }

            else if (buttons[i].textContent == "5") {
                display.textContent += "5";
            }

            else if (buttons[i].textContent == "6") {
                display.textContent += "6";
            }

            else if (buttons[i].textContent == "+") {
                display.textContent += "+";
            }

            else if (buttons[i].textContent == "1") {
                display.textContent += "1";
            }

            else if (buttons[i].textContent == "2") {
                display.textContent += "2";
            }

            else if (buttons[i].textContent == "3") {
                display.textContent += "3";
            }

            else if (buttons[i].textContent == "-") {
                display.textContent += "-";
            }

            else if (buttons[i].textContent == ".") {
                display.textContent += ".";
            }

            else if (buttons[i].textContent == "0") {
                display.textContent += "0";
            }

            else if (buttons[i].textContent == "00") {
                display.textContent += "00";
            }

            else if (buttons[i].textContent == "=") {
                display.textContent = eval(display.textContent);
            }
            else {
                alert("Invalid button press!");
            }
        }

    });
}
function changeMode() {
    var btns=document.querySelectorAll(".btn");
    var cont = document.getElementsByClassName("container")[0];
    var calc = document.getElementsByClassName("calc")[0];
    if (isLight == false) {
        isLight = true;
        document.title = "DualX-1-Light Mode";
        cont.style.backgroundColor = "white";  
        calc.style.backgroundColor = "white";
        calc.style.color = "black";
        calc.style.border = "2px solid black";
        btns.forEach(element => {
            element.style.color="black";
           });
    }
    else {
        isLight = false;
        document.title = "DualX-1-Dark Mode";
        cont.style.backgroundColor = "#233331";
        calc.style.backgroundColor = "#3f4145";
        calc.style.color = "#ffffff";
        calc.style.border = "2px solid black";
        var btns=document.querySelectorAll(".btn");
        btns.forEach(element => {
         element.style.color="white";
        });
    }
}