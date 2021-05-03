var hoteles10 = [{
    hoteId: 1,
    hotelName: "Hotel 1",
    availableRooms: 25,
    price: 10.20,
}, {
    hoteId: 2,
    hotelName: "Hotel 2",
    availableRooms: 8,
    price: 4.25,
}, {
    hoteId: 3,
    hotelName: "Hotel 3",
    availableRooms: 15,
    price: 14.30,
}, {
    hoteId: 4,
    hotelName: "Hotel 4",
    availableRooms: 30,
    price: 10,
}, {
    hoteId: 5,
    hotelName: "Hotel 5",
    availableRooms: 10,
    price: 8.10,
}, ];

function checking() {
    var nameHotel = document.getElementById("textBox").value;
    var t = 0;
    while (t < hoteles10.length) {
        if (nameHotel == hoteles10[t].hotelName) {
            return document.getElementById("solution").innerText = "El hotel " + nameHotel + " existe.";
        }
        t++
    }
    return document.getElementById("solution").innerText = "El hotel " + nameHotel + " no existe.";
}

document.getElementById("myButton").addEventListener("click", checking);