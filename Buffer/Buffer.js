// Use In Streams.
// Use To Deal With Binary Data.
// alloc, form, write, length, toString(), [0], concat

const buff = Buffer.alloc(5); //5 Words can be Store
buff.write("hello"); // Print In Buffer Format
console.log(buff.toString()); // Conver In to String
console.log(buff.length); // Give The Length Of Buffer
console.log(buff[3]); // Give The Index Character In To Buffer Form

// Form Method
// We Can Alredy Give The Index Or Size Of String In to Direct Write The String

const data = Buffer.from("Hello! Ram");
console.log(data.toString());
data[0] = data[4] // Changing The Characterv Using Index
console.log(data.toString());

// Concat
const h = Buffer.from("Hello!");
const h1 = Buffer.from(" World.");

const result = Buffer.concat([h, h1]);
console.log(result.toString());



// Compare
// Return The Number Of Diffrance

// 0 Is For Bot Are Equal
// 1 Is For buuf1 Is Higher The buuf2
// -1 Is For buuf1 Is lower The buuf2

const c = Buffer.from("Hello!");
const c1 = Buffer.from("World");

console.log(c.compare(c1));
console.log(c.equals(c1));

// Equals Is Used For Compair The Whole String IF Both Are Same That Returns True OR not Return False