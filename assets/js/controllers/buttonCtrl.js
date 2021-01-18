(function(){

    angular
    .module('serviceNowQuiz')
    .controller('buttonCtrl', buttonController)

    buttonController.$inject = ['quizMetrics', 'dataService']
    function buttonController(quizMetrics, dataService){
        this.quizMetrics = quizMetrics
        this.startQuiz = function(){
            quizMetrics.changeState('quiz', true)
            quizMetrics.changeState('results', false)
        }
        this.dataService = dataService
    }

})()