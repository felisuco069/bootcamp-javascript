var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

var myTeam = [{
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

var arrayAvailability = [];
var getRandom = (a, b) => (Math.random() < 0.5 ? a : b);

for (var member of myTeam) {
    console.log("------------------------")
    console.log("Disponibilidad de " + member.name);
    for (i = 0; i < member.availability.length; i++) {
        member.availability[i] = WORK_HOURS[i] + ":  " + getRandom("Si", "No");
        console.log(member.availability[i]);
        if (member.availability[i] === WORK_HOURS[i] + ":  " + "Si") {
            arrayAvailability.push(i);
        }
    }
}

console.log("Aquí están los horarios disponibles de todos: " + arrayAvailability);
var myArray = new Array(8).fill(0)
var hour = null;
for (s = 0; s < arrayAvailability.length; s++) {
    myArray[arrayAvailability[s]] = myArray[arrayAvailability[s]] + 1;
    if (myArray[arrayAvailability[s]] === 4) {
        var hour = WORK_HOURS[arrayAvailability[s]];
        break
    }
}
console.log(myArray);
if (hour != null) {
    console.log("La primera hora disponible para realizar una reunión es: " + hour);
} else {
    console.log("No hay disponibilidad para la reunión");
}