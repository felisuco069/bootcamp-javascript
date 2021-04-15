document.getElementById("pantalla").addEventListener("keyup", function () {
    var getnum = parseFloat(document.getElementById("pantalla").value);
    var result = document.getElementById("pantalla");
    document.querySelectorAll("button").forEach(function (btn) {
        btn.addEventListener("click", function (evt) {
            $('#txt_tec_ins').val("");
                    switch (evt.target.innerText) {
                        case "+":
                            document.getElementById("pantalla").innerText = getnum;
                    
                    

                }

            })

    })
});