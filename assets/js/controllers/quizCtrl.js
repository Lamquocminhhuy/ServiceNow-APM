(function(){

    angular
    .module('serviceNowQuiz')
    .controller('quizCtrl', quizController)

    // instantiate endQuizModal
    var endQuizModal = new bootstrap.Modal(document.getElementById('endQuizModal'), {})

    quizController.$inject = ['quizMetrics', 'dataService']
    
    function quizController(quizMetrics, dataService){
        this.quizMetrics = quizMetrics
        this.dataService = dataService
        this.activeQuestion = 0
        this.totalAnswered = 0
        this.quizEnd = false
        this.quizLength = dataService.quizQuestions.length

        // return true or false if all questions are answered
        this.checkQuizEnd = function(){
            var answered = 0
            dataService.quizQuestions.forEach(function(question){
                if (question.selected.length){
                    answered++
                }
            })
            // update total answered
            this.totalAnswered = answered
            return this.totalAnswered === this.quizLength
        }

        // when user clicks an answer
        this.selectAnswer = function(index){

            var answerIndex = dataService.quizQuestions[this.activeQuestion].selected.indexOf(index)

            if (dataService.quizQuestions[this.activeQuestion].selected.indexOf(index) === -1){
                // add selected answer to selected array of quizQuestion object
                dataService.quizQuestions[this.activeQuestion].selected.push(index)
                this.checkQuizEnd()
            } else {
                // deselect previously selected answer
                dataService.quizQuestions[this.activeQuestion].selected.splice(answerIndex, 1)
                this.checkQuizEnd()
            }
        }

        this.setActiveQuestion = function(index){
            
            this.quizEnd = this.checkQuizEnd()

            // check if specific question is selected
            if (index !== undefined){
                if (index >= 0){
                    this.activeQuestion = index
                } else {
                    this.activeQuestion = dataService.quizQuestions.length - 1
                }
                return
            }
            
            var quizIndex = this.quizLength - 1
            while(true){
                
                // check if quiz is over before changing activeQuestion
                if (this.quizEnd) {
                    endQuizModal.toggle()
                    break
                }
                // change activeQuestion, can skip questions
                this.activeQuestion = this.activeQuestion < quizIndex ? ++this.activeQuestion : 0

                // break while loop when unanswered question is active
                if(!dataService.quizQuestions[this.activeQuestion].selected.length){
                    break
                }
            }
        }



        // when user confirms submission of answers on endQuizModal
        this.finaliseAnswers = function(){
            this.quizEnd = false
            this.activeQuestion = 0
            this.totalAnswered = 0
            quizMetrics.markQuiz()
            quizMetrics.changeState('quiz', false)
            quizMetrics.changeState('results', true)
            console.log(quizMetrics.resultsActive)
        }
    }
})()