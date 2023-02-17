const readlineSync = require('readline-sync');
const fs = require('fs');

class View {
  constructor(gamer, coins) {
    this.gamer = gamer;
    this.coins = coins;
  }
  choiceTheme() {
    //Приветствие и выбор темы(файл .txt)
    const userName = readlineSync.question("Напиши свой Ник 🤔\n");
    console.log("Привет " + userName + " ✋");
    this.gamer = userName;

    const txtFile = [
      `${__dirname}/topics/nighthawk_flashcard_data.txt`,
      `${__dirname}/topics/otter_flashcard_data.txt`,
      `${__dirname}/topics/raccoon_flashcard_data.txt`,
    ];
    const choiceTheme = require('readline-sync'),
      animals = ['Ястребы', 'Выдры', 'Еноты'],
      index = choiceTheme.keyInSelect(
        animals,
        'Какую тему ты хочешь выбрать❓ 🤔\n'
      );
    console.log('Класс❗ ' + animals[index] + ', отличный выбор темы 👍');

    return [this.gamer, txtFile[[index]]];
  }

  questionAnswer(questions, answers) {
    this.coins = 0;
    for (let i = 0; i <= questions.length; i++) {
      if (i === questions.length) {
        return;
      } else {
        let answersI = readlineSync.question(`\n${questions[i]}\n`);
        if (answersI === answers[i]) {
          this.coins += 1;
          console.log("Это верный ответ + 1🪙");
        } else {
          console.log('Увы это неверный ответ ❌');
        }
      }
    }
  }

  finalFar(gamer, coins) {
    console.log(`\n${gamer} ты молодец 💪\nты заработал ${coins}🪙`);
  }
}

// const view1 = new View();
console.log(
  view1.choiceTheme(),
  view1.questionAnswer(["A?", "B?", "C?"], ["a", "b", "c"]),
  view1.finalFar(view1.gamer, view1.coins)
);

module.exports = View;
