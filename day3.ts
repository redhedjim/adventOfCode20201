import { data } from "./data/day3";

let gammaRate = ""; // most common
let epsilonRate = ""; // least common

const diagnosticDataLength = data[0].length;

for (let i = 0; i < diagnosticDataLength; i++) {
    const zeros = [];
    const ones = [];
    for (let j = 0; j < data.length; j++) {
        const currentBit = data[j][i];
        if (currentBit === "0") {
            zeros.push(currentBit);
        } else {
            ones.push(currentBit);
        }
    }
    if (zeros.length > ones.length) {
        gammaRate += "0";
        epsilonRate += "1";
    } else {
        gammaRate += "1";
        epsilonRate += "0";
    }
}

const gammaRateDecimal = parseInt(gammaRate, 2);
const epsilonRateDecimal = parseInt(epsilonRate, 2);
const decimalPowerConsumption = gammaRateDecimal * epsilonRateDecimal;

console.log("Part 1 answer: ", decimalPowerConsumption);

// part 2
console.log("*** Part 2 ***");

// oxygen run
let recalculatedData = data;
let oxygenGeneratorRating; // most common (keep 1)
let co2ScrubberRating;     // least common (keep 0)

for (let i = 0; i < diagnosticDataLength; i++) {
    const zeros = [];
    const ones = [];
    let mostCommonBit;
    for (let j = 0; j < recalculatedData.length; j++) {
        const currentBit = recalculatedData[j][i];
        if (currentBit === "0") {
            zeros.push(currentBit);
        } else {
            ones.push(currentBit);
        }
    }
    if (zeros.length === ones.length) {
        mostCommonBit = "1";
    } else if (zeros.length > ones.length) {
        mostCommonBit = "0";
    } else {
        mostCommonBit = "1";
    }
    
    recalculatedData = recalculatedData.filter((x) => x[i] === mostCommonBit);
    if (recalculatedData.length === 1) {
        oxygenGeneratorRating = recalculatedData[0];
        break;
    }
}

// co2 run
recalculatedData = data;

for (let i = 0; i < diagnosticDataLength; i++) {
    const zeros = [];
    const ones = [];
    let mostCommonBit;
    for (let j = 0; j < recalculatedData.length; j++) {
        const currentBit = recalculatedData[j][i];
        if (currentBit === "0") {
            zeros.push(currentBit);
        } else {
            ones.push(currentBit);
        }
    }
    if (zeros.length === ones.length) {
        mostCommonBit = "0";
    }else if (zeros.length > ones.length) {
        mostCommonBit = "1";
    } else {
        mostCommonBit = "0";
    }

    if (recalculatedData.length === 1) {
        co2ScrubberRating = recalculatedData[0];
        break;
    }
    recalculatedData = recalculatedData.filter((x) => x[i] === mostCommonBit);
}

const oxygenRateDecimal = parseInt(oxygenGeneratorRating, 2);
const co2RateDecimal = parseInt(co2ScrubberRating, 2);

console.log("Part 2 answer: ", oxygenRateDecimal * co2RateDecimal);

