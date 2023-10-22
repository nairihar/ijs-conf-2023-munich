const sb = new SharedArrayBuffer(4);

const i8 = new Int8Array(sb);
const ui16 = new Uint16Array(sb);

ui16[0] = 25837;

console.log('i8  :', i8);
console.log('ui16:', ui16);
