function getCoupeNumber(placeNum) {
    if (isNaN(placeNum) === true || placeNum % 1 !== 0 ||  placeNum < 0 ) {
        return "Ошибка. Проверьте правильность введенного номера места.";
    } else if (placeNum === 0 || placeNum > 36) {
        return "Таких мест в вагоне не существует.";
    } else if ((placeNum / 2) % 2 === 0) {
        const evenResult = (placeNum / 2) / 2;
        return `Номер вашего купе - ${evenResult}.`;
    } else if ((placeNum / 2) % 2 === 1) {
        const evenResult = (placeNum / 2) / 2 + 0.5;
        return `Номер вашего купе - ${evenResult}.`;
    } else if ((placeNum / 2) % 2 === 0.5){
        const evenResult = (placeNum / 2) / 2 + 0.75;
        return `Номер вашего купе - ${evenResult}.`;
    } else if ((placeNum / 2) % 2 === 1.5){
        const evenResult = (placeNum / 2) / 2 + 0.25;
        return `Номер вашего купе - ${evenResult}.`;
    } 
} 

console.log(getCoupeNumber(33));
