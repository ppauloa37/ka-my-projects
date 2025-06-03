    <script>
        var tela = document.getElementById("painter")
        var cnsole = document.getElementById("console")
        var cnsoletext = "TextDebug";
        var selectc = document.getElementById("colors")
        var tam = document.getElementById("tam");
        var checkbox = document.getElementById("whatrange");
        var OnClickDraw = function(e) {
            var colors = selectc.value;
            var checkbox = document.getElementById("whatrange");
            var tam = document.getElementById("tam").value;
            var creatdiv = document.createElement("div")
            creatdiv.className = "paint";
            if (colors === "blue") {
                creatdiv.style.background = "blue";
            } else  if (colors === "red") {
                creatdiv.style.background = "red";
            } else if (colors === "green") {
                creatdiv.style.background = "green";
            } else if (colors === "white"){
                creatdiv.style.background = "white";
            } else if (colors === "black"){
                 creatdiv.style.background = "black";
            } else if (colors === " ") {
                creatdiv.remove(tela)

                //rgb(217, 250, 255)
            } else if (colors === "erase") {
                tela.remove(creatediv)
                document.style.background = document.style.background;
            }
            else {
                cnsole.textContent = "Color in select is not defined"        
               cnsole.style.background = "red"
            } 
            if (checkbox === "range") {
            creatdiv.style.width = tam.value;
            } if (tam.value >= 49 && tam.value <= 51 && !checkbox.value === "range") {
                cnsole.textContent = "The range not verifyed in checkbox";
            cnsole.style.background = "red"
            }
            creatdiv.style.top += (e.clientY) + "px";
            creatdiv.style.left += (e.clientX) + "px";
            creatdiv.textContent += "";
            
            tela.appendChild(creatdiv)
        }
        tela.addEventListener("mousemove",OnClickDraw);
