(function(){

    angular
    .module('serviceNowQuiz')
    .factory('quizMetrics', quizMetrics)

    quizMetrics.$inject = ['dataService']

    function quizMetrics(dataService){
        let quizObj = {
            quizActive: false,
            resultsActive: false,
            correctAnswers: [],
            numCorrect: 0,
            changeState: function(metric, state){
                if (metric === 'quiz'){
                    this.quizActive = state
                } else if (metric === 'results') {
                    this.resultsActive = state
                } else {
                    return false
                }
            },
            markQuiz: function(){
                this.correctAnswers = dataService.correctAnswers
                for (var i = 0; i < dataService.quizQuestions.length; i++){
                    var userArr = dataService.quizQuestions[i].selected
                    var correctArr = dataService.correctAnswers[i]
                    if (JSON.stringify(userArr.sort()) === JSON.stringify(correctArr.sort())){
                        dataService.quizQuestions[i].correct = true
                        this.numCorrect++
                    } else {
                        dataService.quizQuestions[i].correct = false
                    }
                }
            }
        }
        return quizObj
    }

})()