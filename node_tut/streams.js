const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')
// //listening to a 'data' event
// readStream.on('data', (chunk) => {
//   console.log('----- NEW CHUNK -----');
//   // console.log(chunk.toString()); or encoding... 3.row
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunk);
// })

// piping
readStream.pipe(writeStream);