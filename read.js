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

// const ret = fsp.readdir(`${__dirname}/topics`).then((el) => el);
// console.log(ret);

// const retD = fs.readdirSync(`${__dirname}/topics`);
// console.log(retD);
// // fs.readFile((`${__dirname}/topics/${}`)

// const readF = fs.readFileSync(`${__dirname}/topics/${retD[0]}`, 'utf-8');
// console.log(readF);
// let r = readF.split('\n');
// console.log(r);

// console.log(r.filter((el) => el !== '').map((el) => el.split(',')));

// let text = r.filter((el) => el !== '').map((el) => el.split(','));

// console.log(
//   text.map((el,i) => {
//     el[i/2];
//   })
// );
// let rom = [];
// for (let i = 0; i < text.length; i++) {
//   console.log(text[i / 2]);
//   if (text[i / 2]) {
//     rom.push(text[i]);
//   }
// }
// console.log(rom.flat());
