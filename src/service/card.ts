export const validateCardNumber = (cardNumber: string): boolean => {

 // remove non-digit characters
const sanitized = cardNumber.replace(/\D/g, "");

if (sanitized.length < 12 || sanitized.length > 19) {
    return false; // card number must be between 12 and 19 digits
}

let sum = 0;
let shouldDouble = false;

// loop through the digits from right to left
for (let i = sanitized.length - 1; i >= 0; i--) {

    // convert to integer
    let digit = parseInt(sanitized.charAt(i))

    // double every second digit from the right
    if (shouldDouble) {
        digit *= 2
        if (digit > 9) {
            digit -= 9
        }
    }

    // add to sum
    sum += digit

    // flip the shouldDouble between true and false
    shouldDouble = !shouldDouble
}

return sum % 10 === 0

}