(function(){

    angular
    .module('serviceNowQuiz')
    .controller('resultsCtrl', resultsController)

    resultsController.$inject = ['quizMetrics', 'dataService']

    function resultsController(quizMetrics, dataService){
        this.quizMetrics = quizMetrics
        this.dataService = dataService
        this.activeQuestion = 0
        this.getPercent = function(){
            return (quizMetrics.numCorrect / dataService.quizQuestions.length * 100).toFixed(2)
        }
        this.passOrFail = function(){
            if (this.getPercent > 70){
                return "Pass"
            } else {
                return "Fail"
            }
        }
        this.getAnswerClass = function(index){
            if (quizMetrics.correctAnswers[this.activeQuestion].indexOf(index) > -1){
                return "btn-success"
            } else if (dataService.quizQuestions[this.activeQuestion].selected.indexOf(index) > -1){
                return "btn-danger"
            } else {
                return "btn-info"
            }
        }
        this.setActiveQuestion = function(index){
            if (index !== undefined){
                this.activeQuestion = index
                return
            }
            if (this.activeQuestion < dataService.quizQuestions.length - 1){
                this.activeQuestion++
            } else {
                this.activeQuestion = 0
            }
        }
        this.previousQuestion = function(){
            if (this.activeQuestion > 0){
                this.activeQuestion--
            } else {
                this.activeQuestion = dataService.quizQuestions.length - 1
            }
        }
        this.startOver = function(){
            quizMetrics.changeState('results', false)
            quizMetrics.numCorrect = 0

            for (var i = 0; i < dataService.quizQuestions.length; i++){
                var data = dataService.quizQuestions[i]
                data.selected = []
                data.correct = null
            }
        }
    }

})()