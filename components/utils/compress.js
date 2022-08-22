/* 
uncomment this whenever the importance is realized
import brotliPromise from 'brotli-wasm'; // Import the default export

const brotli = await brotliPromise; // Import is async in browsers due to wasm requirements!

export const compress = (data) => brotli.compress(Buffer.from(data))
export const decompress = (compressedData) => Buffer.from(brotli.decompress(compressedData)).toString('utf8')

console.log(Buffer.from(decompressedData).toString('utf8')); // Prints 'some input' */