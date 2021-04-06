var semana = {
    "Lunes": {
        day: "Lunes",
        subject: "Matemáticas",
    },
    "Martes": {
        day: "Martes",
        subject: "Lengua"
    },
    "Miércoles": {
        day: "Miercoles",
        subject: "Física",
    },
    "Jueves": {
        day: "Jueves",
        subject: "Química",
    },
    "Viernes": {
        day: "Viernes",
        subject: "Gimnasia",
    },

    "Sábado": {
        day: "Sábado",
        subject: "Lengua",
    },
    "Domingo": {
        day: "Domingo",
        subject: "Lengua",
    }
}
var signo = {
    "Enero": {
        primertramo: "Capricornio", // Capricornio (22 de diciembre-20 de enero)
        segundotramo: "Acuario", // Acuario (21 de enero-18 de febrero)
    },
    "Febrero": {
        primertramo: "Acuario", // Acuario (21 de enero-18 de febrero)
        segundotramo: "Piscis", // Piscis (19 de febrero-20 de marzo)
    },
    "Marzo": {
        primertramo: "Piscis", // Piscis (19 de febrero-20 de marzo)
        segundotramo: "Aries", // Aries (21 de marzo-20 de abril)
    },
    "Abril": {
        primertramo: "Aries", // Aries (21 de marzo-20 de abril)
        segundotramo: "Tauro", // Tauro (21 de abril- 21 de mayo)
    },
    "Mayo": {
        primertramo: "Tauro", // Tauro (21 de abril- 21 de mayo)
        segundotramo: "Geminis", // Géminis (22 de mayo-21 de junio)
    },
    "Junio": {
        primertramo: "Géminis", // Géminis (22 de mayo-21 de junio)
        segundotramo: "Cáncer", // Cáncer (22 de junio-22 de julio)
    },
    "Julio": {
        primertramo: "Cáncer", // Cáncer (22 de junio-22 de julio)
        segundotramo: "Leo", // Leo (23 de julio-23 de agosto)
    },
    "Agosto": {
        primertramo: "Leo", // Leo (23 de julio-23 de agosto)
        segundotramo: "Virgo", // Virgo (24 de agosto-23 de septiembre)
    },
    "Septiembre": {
        primertramo: [1, 6], // Virgo (24 de agosto-23 de septiembre)
        segundotramo: "Libra", // Libra (24 de septiembre-23 de octubre)
    },
    "Octubre": {
        primertramo: "Libra", // Libra (24 de septiembre-23 de octubre)
        segundotramo: "Escorpión", // Escorpión (24 de octubre-22 de noviembre)
    },
    "Noviembre": {
        primertramo: "Escorpión", // Escorpión (24 de octubre-22 de noviembre)
        segundotramo: "Sagitario", // Sagitario (23 de noviembre-21 de diciembre)
    },
    "Diciembre": {
        primertramo: "Sagitario", // Sagitario (23 de noviembre-21 de diciembre)
        segundotramo: "Capricornio", // Capricornio (22 de diciembre-20 de enero)
    },
}
var square = {
    sideOne: 1,
    sideTwo: 3,
    typeOfGemotricFigure: 'Cuadrado',
};
var circle = {
    radius: 5,
    typeOfGemotricFigure: 'Círculo',
};
var dia = prompt("¿De que día de Lunes a Viernes quieres saber que asignatura corresponde?");
var hora = prompt("¿Que hora es sin contar los minutos?");
var diaSemana = prompt("Dime un número del 1 al 7 y te diré con que día de la semana corresponde")
var nota1 = prompt("Dime tres notas y calcularé la media y te diré la evaluación, Nota 1");
var nota2 = prompt("Dime tres notas y calcularé la media y te diré la evaluación, Nota 2");
var nota3 = prompt("Dime tres notas y calcularé la media y te diré la evaluación, Nota 3");
var diaNadimiento = prompt("Dime tu día de nacimiento");
var mesNacimiento = prompt("Dime tu mes de nacimiento");
var numero = prompt("Dime un número cualquiera y determinaré si es par o impar, si es negativo o positivo y si es mayor de 100");
var objeto = prompt("¿Quieres saber el área del Círculo o del Cuadrado?")
// Ejercicio Número 2
if (hora >= 0 && hora < 6) {
    console.log('Buenas noches');
} else if (hora >= 6 && hora <= 12) {
    console.log("Buenos días");
} else if (hora > 12 && hora <= 20) {
    console.log('Buenas tardes');
} else if (hora > 20 && hora <= 24) {
    console.log('Buenas noches');
}
// Ejercicio Número 1
switch (dia) {
    case "Lunes":
        console.log("Los " + dia + " toca " + semana[dia].subject);
        break;

    case "Martes":
        console.log("Los " + dia + " toca " + semana[dia].subject);
        break;

    case "Miércoles":
        console.log("Los " + dia + " toca " + semana[dia].subject);
        break;

    case "Jueves":
        console.log("Los " + dia + " toca " + semana[dia].subject);
        break;

    case "Viernes":
        console.log("Los " + dia + " toca " + semana[dia].subject);
        break;
    default:
        console.log('No reconozco el día introducido');
        break;

}
// Ejercicio Número 3
switch (diaSemana) {
    case "1":
        console.log("El día " + diaSemana + " de la semana es Lunes");
        break;
    case "2":
        console.log("El día " + diaSemana + " de la semana es Martes");
        break;
    case "3":
        console.log("El día " + diaSemana + " de la semana es Miércoles");
        break;
    case "4":
        console.log("El día " + diaSemana + " de la semana es Jueves");
        break;
    case "5":
        console.log("El día " + diaSemana + " de la semana es Vienes");
        break;
    case "6":
        console.log("El día " + diaSemana + " de la semana es Sábado");
        break;
    case "7":
        console.log("El día " + diaSemana + " de la semana es Domingo");
        break;

    default:
        console.log('Me quieres pillar eh, introducde un número válido');
        break;
}
// Ejercicio Número 4
let notamedia = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
if (notamedia >= 0 && notamedia < 5) {
    console.log('En base a las tres notas proporcionadas, ' + nota1 + ", " + nota2 + ", " + nota3 + ", tu media es de " + notamedia + ' con lo que tu calificación es no apta');
} else if (notamedia >= 5 && notamedia <= 7) {
    console.log("En base a las tres notas proporcionadas, " + nota1 + ", " + nota2 + ", " + nota3 + ", tu media es de " + notamedia + " con lo que es apta y además notable");
} else if (notamedia > 7 && notamedia <= 10) {
    console.log("En base a las tres notas proporcionadas, " + nota1 + ", " + nota2 + ", " + nota3 + ", tu media es de " + notamedia + " con lo que es apta y además sobresaliente");
};
// Ejercicio Número 5
switch (mesNacimiento) {
    case "Enero":
        if (diaNadimiento >= 1 && diaNadimiento <= 20) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Febrero":
        if (diaNadimiento >= 1 && diaNadimiento <= 18) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Marzo":
        if (diaNadimiento >= 1 && diaNadimiento <= 20) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Abril":
        if (diaNadimiento >= 1 && diaNadimiento <= 20) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;

    case "Mayo":
        if (diaNadimiento >= 1 && diaNadimiento <= 22) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Junio":
        if (diaNadimiento >= 1 && diaNadimiento <= 22) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Juio":
        if (diaNadimiento >= 1 && diaNadimiento <= 23) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Agosto":
        if (diaNadimiento >= 1 && diaNadimiento <= 24) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Septiembre":
        if (diaNadimiento >= 1 && diaNadimiento <= 23) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Octubre":
        if (diaNadimiento >= 1 && diaNadimiento <= 23) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Noviembre":
        if (diaNadimiento >= 1 && diaNadimiento <= 22) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    case "Diciembre":
        if (diaNadimiento >= 1 && diaNadimiento <= 22) {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].primertramo);
        } else {
            console.log("Por haber nacido en el mes de " + mesNacimiento + " y en el día " + diaNadimiento + " tu signo del zodiaco es " + signo[mesNacimiento].segundotramo);
        };
        break;
    default: {
        "El mes o día introducido no son válidos"
    };
}
// Ejercicio número 6
const resultado = numero % 2 != 0 ? "El número " + numero + " es impar" : "El número " + numero + " es par";
console.log(resultado);
// Ejercicio número 7
const polo = numero >= 0 ? "El número " + numero + " es positivo" : "El número " + numero + " es negativo";
console.log(polo);
// Ejercicio número 8
const mayor = numero > 100 ? "El número " + numero + " es mayor de 100" : "El número " + numero + " es menor o igual de 100";
console.log(mayor);
// Ejercicio número 9
var sumatoria = parseFloat(nota1) + parseFloat(nota2);
const operacion = nota3 != sumatoria ? "El número " + nota3 + " que corresponde a la tercera nota no es igual a la suma de las otras dos, " + nota1 + " y " + nota2 + '.' : "El número " + nota3 + " que corresponde a la tercera nota es igual a la suma de las otras dos, " + nota1 + " y " + nota2 + '.';
console.log(operacion);
// Ejercicio número 10
var areacuadrado = square.sideOne * square.sideTwo;
var areacirculo = Math.pow(circle.radius, 2) * 3.14;
if (objeto == square.typeOfGemotricFigure) {
    console.log("El área del tetraedro de lado " + square.sideOne + " y lado " + square.sideTwo + " es de " + areacuadrado);
} else if (objeto == circle.typeOfGemotricFigure) {
    console.log("El área del círculo de radio " + circle.radius + " es " + areacirculo);
}