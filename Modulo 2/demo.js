var hotelname = prompt("Sobre que hotel quiere hacer la reseña, Abades o Monica?");
document.getElementById('hname').innerHTML = "Hotel " + hotelname;
var rating = prompt("Puntuación de uno a cinco");
var anonimous = confirm('Quiere que su valoración sea anónima??')
var hoteles = {
    Monica: {
        location: "Nerja",
    },
    Abades: {
        location: "Granada",
    }
}

document.getElementById('hotellocation').innerHTML = hoteles[hotelname].location;
document.getElementById('foto').src = hotelname + ".jpg";
document.getElementById('rate').src = rating + "_of_5.png";
document.getElementById('reseña').checked = anonimous;