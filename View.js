const readlineSync = require('readline-sync');
const fs = require('fs');

class View {
  constructor(gamer, coins, txtFile) {
    this.gamer = gamer;
    this.coins = coins;
    this.txtFile = txtFile;
  }
  choiceTheme() {
    //Приветствие и выбор темы(файл .txt)
    const userName = readlineSync.question('Напиши свой Ник 🤔\n');
    console.log('Привет ' + userName + ' ✋');
    this.gamer = userName;

    const txtFile = [
      `${__dirname}/topics/nighthawk_flashcard_data.txt`,
      `${__dirname}/topics/otter_flashcard_data.txt`,
      `${__dirname}/topics/raccoon_flashcard_data.txt`,
    ];
    const choiceTheme = require('readline-sync'),
      animals = ['Животные', 'Космос', 'IT'],
      index = choiceTheme.keyInSelect(
        animals,
        'Какую тему ты хочешь выбрать❓ 🤔\n'
      );
    console.log('Класс❗ ' + animals[index] + ', отличный выбор темы 👍');

    return [this.gamer, (this.txtFile = txtFile[[index]])];
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
          console.log('Это верный ответ + 1🪙');
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

module.exports = View;
