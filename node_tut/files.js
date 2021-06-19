const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString()) // buffer
// });
// console.log('last line')

//writing files

// fs.writeFile('./docs/blog1.txt', 'hello, world!', () => {
//   console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt', 'hello, world!', () => {
//   console.log('file was written')
// })

//directories

// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('folder created')
//   })
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("folder deleted")
//     }
//   })
// }

//delete

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => { //delete file
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  })
}