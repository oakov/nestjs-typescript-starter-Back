// var fs = require('fs');
// fs.writeFile('message.txt', 'Hello Node.js', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

const fs = require('fs');

const myData = Array.from(Array(100).keys()).map((e) => {
  return {
    id: String(e),
    title: 'ProductName' + e,
    description: 'ProductDescription' + e,
    price: e + 1,
  };
});

var outputFilename = 'my.json';

fs.writeFile(outputFilename, JSON.stringify(myData), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('JSON saved to ' + outputFilename);
  }
});
