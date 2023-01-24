function getCoupeNumber(placeNum) {
    if ((placeNum / 2) % 2 === 0) {
        const evenResult = (placeNum / 2) / 2;
        console.log(`Номер вашего купе - ${evenResult}`);
    } else if ((placeNum / 2) % 2 === 1) {
        const evenResult = (placeNum / 2) / 2 + 0.5;
        console.log(`Номер вашего купе - ${evenResult}`);
    }  
}
getCoupeNumber(34);