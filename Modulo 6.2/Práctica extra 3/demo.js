var grossSalary = () => {
    return document.getElementById("grossSalary").value;
}
var paySocialSecurity = () => {
    if (grossSalary() > 45014.4) {
        return 45014.4 * 0.0635;
    }
    return grossSalary() * 0.0635;
}

var payIrpf = () => {
    debugger;
    var baseIrpf = grossSalary() - paySocialSecurity() - 2000;
    if (baseIrpf <= 5550) {
        return 0;
    } else if (5550 < baseIrpf && baseIrpf <= 12450) {
        return baseIrpf * 0.19;
    } else if (12450 < baseIrpf && baseIrpf <= 20200) {
        return baseIrpf * 0.24;
    } else if (20200 < baseIrpf && baseIrpf <= 12450) {
        return baseIrpf * 0.3;
    } else if (35200 < baseIrpf && baseIrpf <= 60000) {
        return baseIrpf * 0.37;
    } else if (baseIrpf > 60000) {
        return baseIrpf * 0.45;
    }
}


var getSalary = () => {
    document.getElementById("grossSalary2").innerText = grossSalary();
    document.getElementById("paySocualSecurity").innerText = paySocialSecurity();
    document.getElementById("payIrpf").innerText = payIrpf();
    document.getElementById("annualsalary").innerText = grossSalary() - paySocialSecurity() - payIrpf();
    var pagas = document.getElementById("pagas").value;
    document.getElementById("monthlysalary").innerText = payIrpf() / pagas;
}

document.getElementById("calculate").addEventListener("click", getSalary);