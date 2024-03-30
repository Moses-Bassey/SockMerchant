
// Define function for sockMerchant
function sockMerch(n, ar) {

    const colorNum = {};

    for (let i = 0; i < n; i++) {
        const color = ar[i];

        colorNum[color] = (colorNum[color] || 0) + 1;
    }

    let pairs = 0;

    for (const color in colorNum) {
        pairs += Math.floor(colorNum[color] / 2);
    }

    return pairs;
}


const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 9;

// Print the results
console.log(sockMerchant(n, array));