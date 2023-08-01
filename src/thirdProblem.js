const fs = require("fs");

const CountWord = (text) => {
  const words = text.split(" ");
  console.log(words)
  return words.length;
};


fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const wordCount = CountWord(data);
    console.log('Total word count:', wordCount);
  }
});

// write command =>    node thirdProblem




