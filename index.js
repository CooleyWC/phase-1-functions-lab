// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const Hq = 42;
    const distance = someValue - Hq;
    return Math.abs(distance);
}



function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;
    return feet;

}

function distanceTravelledInFeet(start, destination) {
    const feetTravelled = (destination - start) * 264;
    return Math.abs(feetTravelled);
}

function calculatesFarePrice(start, destination) {
    const feetTravelled = (destination - start) * 264;
    const finalTravelFeet = Math.abs(feetTravelled);
    if (finalTravelFeet < 400) {
        return 0;
    } else if (finalTravelFeet > 400 && finalTravelFeet< 2000) {
        return parseFloat((.02 * finalTravelFeet - .02 * 400).toFixed(2));
    } else if (finalTravelFeet > 2000 && finalTravelFeet< 2500) {
        return 25;
    } else if (finalTravelFeet > 2500) {
        return 'cannot travel that far'
    }
}

