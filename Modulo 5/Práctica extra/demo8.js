var hoteles = [{
        hoteId: 1,
        hotelName: "Jhon",
        availableRooms: 25,
        price: 10.20,
    },
    {
        hoteId: 2,
        hotelName: "Doe",
        availableRooms: 8,
        price: 4.25,
    },
    {
        hoteId: 3,
        hotelName: "Clara",
        availableRooms: 15,
        price: 14.30,
    },
    {
        hoteId: 4,
        hotelName: "Elisa",
        availableRooms: 30,
        price: 10,
    },
    {
        hoteId: 4,
        hotelName: "Pedro",
        availableRooms: 10,
        price: 8.10,
    },
]
hotelConSubida = [];
hotelSinSubida = [];
for (precio of hoteles) {
    if (precio.availableRooms < 10) {
        precio.price += 10;
        hotelConSubida.push(precio);
        var lista8a = document.createElement("span");
        lista8a.innerText = JSON.stringify(precio, null, 2);
        document.getElementById("ej8a").appendChild(lista8a);
    } else {
        hotelSinSubida.push(precio);
        var lista8b = document.createElement("span");
        lista8b.innerText = JSON.stringify(precio, null, 2);
        document.getElementById("ej8b").appendChild(lista8b);
    }
}