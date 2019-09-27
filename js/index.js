
    // console.log( qAndA );
    const selectQuestions = qAndA.sort(function(){return (Math.random() - Math.random())}).slice(0, 5);
    // console.log("these are selected Qs", selectQuestions)
    let score = 0;
    let questionIndex = 0;
    
    const gradeQuestion = (ans) => {
      // get value on selected option 
      // check if correct
      // add mark to score
      // alert('You clicked answer' + ans);
      console.log(ans, selectQuestions[questionIndex].answer)
      if (ans == selectQuestions[questionIndex].answer) {
        score += 20;
        alert('You clicked the correct answer ' + ans + ' score is ' + score);
      }
       // increament questionIndex by 1 questionIndex ++
       questionIndex += 1;
    };

    const renderSuccess = () => {
      console.log('final score is ' + score + ' on 100')
    }

    // call function to render question (questionIndex)
    const renderQuestion = (qIndex) => {
      let question = selectQuestions[qIndex];
      // get question number and populate qith question number
      $('.question-number').text('')
      $('.question-question').text('')
      $('.question-options').text('')
      $('.question-number').text('Question ' + (qIndex + 1));
      // get question-question and populate with quesion
      $('.question-question').text(question.question);
      // get question-options and populate with options as radio
      question.options.forEach(element => {
        let radioBut = $('<input type="radio" name="answer" value=' + element + ' />');
        let radioLabel = $('<label for=' + element + ' >' + element + ' </label>');
        radioBut.appendTo('.question-options');
        radioLabel.appendTo('.question-options');
      });
      $(".question-options input:radio[name='answer']").click(function(){
        if (questionIndex == (selectQuestions.length - 1)) {
          gradeQuestion(this.value)
          renderSuccess()
          alert('end of quiz');
        } else {
          gradeQuestion(this.value)
          renderQuestion(questionIndex)
        }
      });
    };

     // on click on options run function gradeQuestion(e)


$( document ).ready(function() {
  renderQuestion(questionIndex);

});

