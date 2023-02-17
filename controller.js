const TopicsReader = require('./TopicsReader.js');
const View = require('./View.js');

class Controller {
  static runner() {
    const view1 = new View();
    const topic = new TopicsReader();
    console.log(
      view1.choiceTheme(),
      view1.questionAnswer(
        topic.questions(view1.txtFile),
        topic.answers(view1.txtFile)
      ),
      view1.finalFar(view1.gamer, view1.coins)
    );
  }
}

Controller.runner();
