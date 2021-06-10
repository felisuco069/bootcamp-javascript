import "./styles.css";
import * as dataBusiness from "./data-business";
import * as createApp from "./utils";


dataBusiness.getData("https://www.breakingbadapi.com/api/characters").then(data => {
    const myArray = [];
    for (let element of data) {
        const elemArray = createApp.createCharacterRow(element);
        myArray.push(elemArray);
        elemArray.onclick = function () {
                createApp.showCharacter(element);
                
        }
    }

    for (let character of myArray) {
        document.getElementById("root").append(character);
    }
});