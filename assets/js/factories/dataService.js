(function(){
    
    angular
    .module('serviceNowQuiz')
    .factory('dataService', dataService)

    function dataService(){
        var dataObj = {
            quizQuestions: questions,
            correctAnswers: correctAnswers
        }
        return dataObj
    }

    var correctAnswers = [
        /* 01 */ [3], /* 02 */ [3], /* 03 */ [3], /* 04 */ [3], /* 05 */ [3], /* 06 */ [3], /* 07 */ [3], /* 08 */ [3], /* 09 */ [3], /* 10 */ [3], /* 11 */ [3], /* 12 */ [3], /* 13 */ [3], /* 14 */ [3], /* 15 */ [3], /* 16 */ [3], /* 17 */ [3], /* 18 */ [3], /* 19 */ [3], /* 20 */ [3], /* 21 */ [3], /* 22 */ [3], /* 23 */ [3], /* 24 */ [3], /* 25 */ [3], /* 26 */ [3], /* 27 */ [3], /* 28 */ [3], /* 29 */ [3], /* 30 */ [3], /* 31 */ [3], /* 32 */ [3], /* 33 */ [3], /* 34 */ [3], /* 35 */ [3], /* 36 */ [3], /* 37 */ [3], /* 38 */ [3], /* 39 */ [3], /* 40 */ [3], /* 41 */ [3], /* 42 */ [3], /* 43 */ [3], /* 44 */ [3], /* 45 */ [3], /* 46 */ [3], /* 47 */ [3], /* 48 */ [3], /* 49 */ [3], /* 50 */ [3], /* 51 */ [3], /* 52 */ [3], /* 53 */ [3], /* 54 */ [3], /* 55 */ [3], /* 56 */ [3], /* 57 */ [3], /* 58 */ [3], /* 59 */ [3], /* 60 */ [3], 
    ]
    var questions = [
        // 01
        {
            text: 'A Service Catalog may include which of the following components?',
            possibilities: [
                {
                    answer: 'Order Guides, Exchange Rates, Calendars',
                },
                {
                    answer: 'Order Guides, Catalog Items, and Interceptors',
                },
                {
                    answer: 'Catalog Items, Asset Contracts, Task Surveys',
                },
                {
                    answer: 'Record Producers, Order Guides, and Catalog Items',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 02
        {
            text: 'Which of the following statements applies to a set of fields when they are coalesced during an import?',
            possibilities: [
                {
                    answer: 'If a match is found using the coalesce fields, the existing record is updated with the information being imported',
                },
                {
                    answer: 'If a match is not found using the coalesce fields, the system does not create a Transform Map',
                },
                {
                    answer: 'If a match is found using the coalesce fields, the system creates a new record',
                },
                {
                    answer: 'If a match is not found using the coalesce fields, the existing record is updated with the information being imported',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 03
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 04
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 05
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 06
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 07
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 08
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 09
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 10
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 11
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 12
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 13
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 14
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 15
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 16
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 17
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 18
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 19
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 20
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 21
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 22
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 23
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 24
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 25
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 26
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 27
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 28
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 29
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 30
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 31
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 32
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 33
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 34
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 35
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 36
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 37
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 38
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 39
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 40
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 41
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 42
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 43
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 44
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 45
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 46
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 47
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 48
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 49
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 50
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 51
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 52
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 53
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 54
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 55
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 56
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 57
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 58
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 59
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        // 60
        {
            text: '',
            possibilities: [
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
                {
                    answer: '',
                },
            ],
            selected: [],
            correct: null // 
        },
        
    ]

})()