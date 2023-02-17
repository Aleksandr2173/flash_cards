const fsp = require('fs').promises;
const fs = require('fs');
class ReadFile {
  questions(path) {
    let textQ = fs
      .readFileSync(`${path}`, 'utf-8')
      .split('\n')
      .filter((el) => el !== '')
      .map((el) => el.split(','));
    let takeQues = [];
    for (let i = 0; i < textQ.length; i++) {
      console.log(textQ[i / 2]);
      if (textQ[i / 2]) {
        takeQues.push(textQ[i]);
      }
    }
    console.log(takeQues);

    return takeQues.flat();
  }
  answers(path) {
    let textA = fs
      .readFileSync(`${path}`, 'utf-8')
      .split('\n')
      .filter((el) => el !== '')
      .map((el) => el.split(','));
    let takeAnsw = [];
    for (let i = 0; i < textA.length; i++) {
      console.log(textA[i / 2]);
      if (textA[i / 2]) {
        takeAnsw.push(textA[i]);
      }
    }
    console.log(takeAnsw);
    return takeAnsw.flat();
  }
}

module.exports = ReadFile;
