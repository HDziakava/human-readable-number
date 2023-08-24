module.exports = function toReadable(number) {
    if (number === 0) return numberMapping[0];

    const arrayOfNumber = number.toString().split("").reverse();

    const transArr = arrayOfNumber
        .map((number, index) => {
            if (index === 0) {
                if (number === "0" && arrayOfNumber[1] !== "1") return "";

                const twoLastDigits = parseInt(`${arrayOfNumber[1]}${number}`);
                if (twoLastDigits >= 10 && twoLastDigits < 20) {
                    if (
                        twoLastDigits > 13 &&
                        twoLastDigits !== 18 &&
                        twoLastDigits !== 15
                    ) {
                        return `${numberMapping[number]}teen`;
                    }
                    return numberMapping[twoLastDigits];
                }
                return numberMapping[number];
            } else if (index === 1) {
                const twoLastDigits = parseInt(`${number}0`);

                if (twoLastDigits >= 20) {
                    if (twoLastDigits > 50 && twoLastDigits !== 80) {
                        return `${numberMapping[number]}ty`;
                    }

                    return numberMapping[twoLastDigits];
                } else {
                    return "";
                }
            } else {
                return `${numberMapping[number]} ${
                    numberMapping["1".padEnd(index + 1, "0")]
                }`;
            }
        })
        .filter((item) => item !== "");

    return transArr.reverse().join(" ");
};

const numberMapping = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    15: "fifteen",
    18: "eighteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    80: "eighty",
    100: "hundred",
    1000: "thousand",
};
