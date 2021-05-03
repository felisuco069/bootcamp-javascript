var hoteles9 = [{
        hoteId: 1,
        hotelName: "Hotel 1",
        availableRooms: 25,
        price: 10.20,
    },
    {
        hoteId: 2,
        hotelName: "Hotel 2",
        availableRooms: 8,
        price: 4.25,
    },
    {
        hoteId: 3,
        hotelName: "Hotel 3",
        availableRooms: 15,
        price: 14.30,
    },
    {
        hoteId: 4,
        hotelName: "Hotel 4",
        availableRooms: 30,
        price: 10,
    },
    {
        hoteId: 5,
        hotelName: "Hotel 5",
        availableRooms: 10,
        price: 8.10,
    },
]
hotelConSubidaSolo = [];
for (precio of hoteles) {
    if (precio.availableRooms < 10) {
        precio.price += 10;
        hotelConSubidaSolo.push(precio);
        var lista9 = document.createElement("span");
        lista9.innerText = JSON.stringify(precio, null, 2);
        document.getElementById("ej9").appendChild(lista9);
    }
}