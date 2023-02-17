const fsp = require('fs').promises;
const fs = require('fs');
class TopicsReader {
  questions(path) {
    let textQ = fs
      .readFileSync(`${path}`, 'utf-8')
      .split('\n')
      .filter((el) => el !== '')
      .map((el) => el.split(','));
    let takeQues = [];
    for (let i = 0; i < textQ.length; i++) {
      if (textQ[i / 2]) {
        takeQues.push(textQ[i]);
      }
    }

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
      if (textA[i / 2]) {
        const arr = 0;
      } else {
        takeAnsw.push(textA[i]);
      }
    }
    return takeAnsw.flat();
  }
}
// const topic = new TopicsReader();
// console.log(topic.answers(`${__dirname}/topics/nighthawk_flashcard_data.txt`));
// // console.log(
// //   topic.questions(`${__dirname}/topics/nighthawk_flashcard_data.txt`)
// // );
module.exports = TopicsReader;
