
// ----------------- Simple Array

const sb = new SharedArrayBuffer(8); // 8 byte




// ----------------- Simple Array





const arr = new Array();

arr[0] = true;
arr[1] = 'hey';

arr;
// [ true, 'hey' ]






// ----------------- Typed Arrays

const i8arr = new Int8Array(8);

i8arr[0] = 'hello';

i8arr;






// -----------------


i8arr[0] = 104;
i8arr[1] = 105;

i8arr;






// ----------------- [-128 - 127]

i8arr[0] = 256;






// -----------------


// iterate through the elements
value = '';

for (let i = 0; i < i8arr.length; i++) {
    // Access each element using index i
    const asciiValue = i8arr[i];

    if (asciiValue) {
        // Convert ASCII value to character and concat
        value += String.fromCharCode(asciiValue);
    }
}

value;





// -----------------


// Imagine you have a string
const inputString = 'Hello';

// Create an Int8Array from the array of ASCII values
const asciiArray = new Int8Array(inputString.length);

// Iterate through each character in the string
for (let i = 0; i < inputString.length; i++) {
    // Get ASCII value of the character and add it to the typed array
    asciiArray[i] = inputString.charCodeAt(i);
}

// Log the resulting Int8Array
console.log(asciiArray);






// --------------

const specialText = '🚀';

specialText.length;

`${specialText.charCodeAt(0)} ${specialText.charCodeAt(1)}`;





// --------------


new Int16Array(); // 2 byte
new Int32Array(); // 4 byte

