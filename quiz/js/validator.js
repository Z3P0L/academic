function submitQuiz() {
    var answers = [];
    var question1 = document.getElementsByName('q1');
    var question2 = document.getElementsByName('q2');
    var question3 = document.getElementsByName('q3');

    answers.push(getSelectedAnswer(question1));
    answers.push(getSelectedAnswer(question2));
    answers.push(getSelectedAnswer(question3));
    showCorrectAnswers(answers);
}

function getSelectedAnswer(question) {
    for (var i = 0; i < question.length; i++) {
        if (question[i].checked) {
            return question[i].value;
        }
    }
}

function showCorrectAnswers(answers) {
    var correctAnswers = ['b', 'true', ['b', 'c']];
    var questions = document.getElementsByClassName('question');

    for (var i = 0; i < questions.length; i++) {
        var options = questions[i].getElementsByClassName('option');

        for (var j = 0; j < options.length; j++) {
            var input = options[j].querySelector('input');

            if (input.checked) {
                if (Array.isArray(correctAnswers[i])) {
                    if (correctAnswers[i].includes(input.value)) {
                        input.nextElementSibling.classList.add('correct-answer');
                    } else {
                        input.nextElementSibling.classList.add('wrong-answer');
                    }
                } else {
                    if (input.value === correctAnswers[i]) {
                        input.nextElementSibling.classList.add('correct-answer');
                    } else {
                        input.nextElementSibling.classList.add('wrong-answer');
                    }
                }
            }
        }
    }
}