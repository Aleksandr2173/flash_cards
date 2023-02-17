const readlineSync = require("readline-sync");
const fs = require("fs");

class View {
  choiceTheme() {
    //Приветствие и выбор темы(файл .txt)
    const userName = readlineSync.question("Напиши свой Ник 🤔\n");
    console.log("Привет " + userName + " ✋");
    const gamer = userName;

    const txtFile = [
      `${__dirname}/topics/nighthawk_flashcard_data.txt`,
      `${__dirname}/topics/otter_flashcard_data.txt`,
      `${__dirname}/topics/raccoon_flashcard_data.txt`,
    ];
    const choiceTheme = require("readline-sync"),
      animals = ["Ястребы", "Выдры", "Еноты"],
      index = choiceTheme.keyInSelect(
        animals,
        "Какую тему ты хочешь выбрать❓ 🤔\n"
      );
    console.log("Класс❗ " + animals[index] + ", отличный выбор темы 👍");

    return [gamer, txtFile[[index]]];
  }
  
}

const view1 = new View;
// console.log(view1.choiceTheme());
// console.log(view1.questionAnswer(['A?', 'B?', 'C?'], ['a', 'b', 'c']));
console.log(view1.finalFar('fdfds', '3'));

module.exports = View;
