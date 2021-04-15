document.getElementById("pantalla").addEventListener("keyup", function () {
    document.querySelectorAll("button").forEach(function (btn) {
        btn.addEventListener("click", function (evt) {
            var getnum = parseFloat(document.getElementById("pantalla").value);
            var resultEl = document.getElementById("pantalla");
            switch (evt.target.innerText) {
                case "+":
                    var getnumNext = parseFloat(document.getElementById("pantalla").value);
                    resultEl.innerText = getnum + getnum;
                    break;
                case "-":
                    resultEl.innerText = getnum;
                    break;
                case "*":
                    resultEl.innerText = getnum;
                    break;
                case "/":
                    resultEl.innerText = getnum;
                    break;
                case "=":
                    resultEl.innerText = getnum;
            }
        })
    })
});