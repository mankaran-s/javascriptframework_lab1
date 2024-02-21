const fs = require('fs');

// Read the contents of the text file asynchronously
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File contents:');
  console.log(data);
});