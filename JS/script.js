function getCoupeNumber(placeNum) {
    if (isNaN(placeNum) === true || placeNum % 1 !== 0 ||  placeNum < 0 ) {
        console.log("Ошибка. Проверьте правильность введенного числа.");
    } else if (placeNum === 0 || placeNum > 36) {
        console.log("Таких мест в вагоне не существует");
    } else if ((placeNum / 2) % 2 === 0) {
        const evenResult = (placeNum / 2) / 2;
        console.log(`Номер вашего купе - ${evenResult}.`);
    } else if ((placeNum / 2) % 2 === 1) {
        const evenResult = (placeNum / 2) / 2 + 0.5;
        console.log(`Номер вашего купе - ${evenResult}.`);
    } else if ((placeNum / 2) % 2 === 0.5){
        const evenResult = (placeNum / 2) / 2 + 0.75;
        console.log(`Номер вашего купе - ${evenResult}.`);
    } else if ((placeNum / 2) % 2 === 1.5){
        const evenResult = (placeNum / 2) / 2 + 0.25;
        console.log(`Номер вашего купе - ${evenResult}.`);
    }
}
getCoupeNumber(37);

