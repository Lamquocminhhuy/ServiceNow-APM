(function () {
  angular.module("serviceNowQuiz").factory("dataService", dataService);

  function dataService() {
    var dataObj = {
      quizQuestions: questions,
      correctAnswers: correctAnswers,
    };
    return dataObj;
  }

  var correctAnswers = [
    /* 01 */ [0],
    /* 02 */ [2],
    /* 03 */ [0, 1],
    /* 04 */ [0,3,4,5],
    /* 05 */ [0, 2, 3],
    /* 06 */ [1,2,3,4],
    /* 07 */ [3],
    /* 08 */ [2,3],
    /* 09 */ [2],
    /* 10 */ [0],
    /* 11 */ [3],
    /* 12 */ [2],
    /* 13 */ [],
    /* 14 */ [],
    /* 15 */ [],
  
  ];
  var questions = [
    // 01
    {
      text: "The Retail Exchange Company has all of their applications in a single system of record and ownership has been established. Which level of the maturity model are they in right now?",
      possibilities: [
        {
          answer: "A. Level 1: Applications Under Management",
        },
        {
          answer: "B. Level 2: Basic Rationalization",
        },
        {
          answer: "C. Level 3: Advanced Rationalization",
        },
        {
          answer: "D. Level 4: Continuously Optimized Portfolio",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 02
    {
        text: 'What does the Load Application Indicators and Compute Application Scores job do?',
        possibilities: [
            {
                answer: 'A. Generates scores for all indicators and business applications across selected profiles',
            },
            {
                answer: 'B. Generates scores for selected indicators and selected applications across all profiles',
            },
            {
                answer: 'C. Generates scores for all indicators and business applications across all profiles',
            },
            {
                answer: 'D. Generates scores for all indicators and selected applications across all profiles',
            },
        ],
        selected: [],
        correct: null // 2
    }, 
    // 03
    {
        text: 'APM combines with several ServiceNow technologies to provide a comprehensive view of your customer’s application portfolio. Why would a customer want to utilize information from ServiceNow ServiceMapping? (Choose two.)',
        possibilities: [
            {
                answer: 'A. Identify your customer’s applications’ underlying technologies.',
            },
            {
                answer: 'B. Identify your customer’s application services.',
            },
            {
                answer: 'C. Produce a horizontal picture of a customer’s business applications.',
            },
            {
                answer: 'D. Create an application inventory.',
            },
        ],
        selected: [],
        correct: null // 0 1
    }, 
    // 04
    {
        text: 'What are the 4 sections of the APM portal home page that is aligned to The Open Group Architecture Framework (TOGAF)? (Choose four.)',
        possibilities: [
            {
                answer: 'A.Information Portfolio',
            },
            {
                answer: 'B. Service Portfolio',
            },
            {
                answer: 'C. Catalog Portfolio',
            },
            {
                answer: 'D. Application Portfolio',
            },
            {
                answer: 'E. Business Portfolio',
            },
            {
                answer: 'F. Technology Portfolio',
            },
        ],
        selected: [],
        correct: null // 0 3 4 5
    }, 
    //05  
    {
        text: 'APM interfaces with Software Asset Management to pull this application data:(Choose three.)',
        possibilities: [
            {
                answer: 'A. Product Classification',
            },
            {
                answer: 'B. Software Model Data',
            },
            {
                answer: 'C. Hardware Asset Lifecycle',
            },
            {
                answer: 'D. Lifecycle Data',
            },
            {
                answer: 'E. Vendor Procurement',
            },
        ],
        selected: [],
        correct: null // 0 2 3
    }, 
    //06
    {
        text: 'Which attributes can be used to categorize business applications? (Choose four.) CHECK ANSWERS AGAIN!!',
        possibilities: [
            {
                answer: 'A. Application Score',
            },
            {
                answer: 'B. Application Name',
            },
            {
                answer: 'C. Application Family',
            },
            {
                answer: 'D. Portfolio',
            },
            {
                answer: 'E. Category',
            },
            {
                answer: 'F. Business Unit',
            },
        ],
        selected: [],
        correct: null // 1 2 3 4 
    },
    // 07
    {
        text: 'The capability map provides a hierarchical view of the business capabilities in an organization. How many levels does the capability hierarchy support in its series?',
        possibilities: [
            {
                answer: 'A. 7',
            },
            {
                answer: 'B. 8',
            },
            {
                answer: 'C. 10',
            },
            {
                answer: 'D. 6',
            },
        ],
        selected: [],
        correct: null // 3
    },
    // 08
    {
        text: 'Why would enterprise architects be interested in APM outcomes? (Choose two.)',
        possibilities: [
            {
                answer: 'A. Understand incident counts by application',
            },
            {
                answer: 'B. Understand what software licenses need to be reclaimed',
            },
            {
                answer: 'C. Understand the landscape of technology standards and lifecycle plans',
            },
            {
                answer: 'D. View business capabilities supported by applications',
            },
        ],
        selected: [],
        correct: null // 2 3 
    },
    // 09
    {
        text: 'What relationship type is used to describe a relationship between a business capability and a business application?',
        possibilities: [
            {
                answer: 'A. Used: Used by',
            },
            {
                answer: 'B. Depends on: Used by',
            },
            {
                answer: 'C. Provides: Provided by',
            },
            {
                answer: 'D. Runs on: Runs',
            },
        ],
        selected: [],
        correct: null // 2
    },
    // 10
    {
        text: 'When a business application request is approved, a record is created in the business application table. What is the state of the business application at this point?',
        possibilities: [
            {
                answer: 'A. Implementing',
            },
            {
                answer: 'B. Retired',
            },
            {
                answer: 'C. In Production',
            },
            {
                answer: 'D. Pilot',
            },
        ],
        selected: [],
        correct: null // 0
    },
    // 11
    {
        text: 'Which of the following fields represents the granular licensable version of the software and is used to calculate the technology risk?',
        possibilities: [
            {
                answer: 'A. Lifecyle Model',
            },
            {
                answer: 'B. Ignore Technical Risk',
            },
            {
                answer: 'C. Lifecycle Release',
            },
            {
                answer: 'D. Lifecycle Full Version',
            },
        ],
        selected: [],
        correct: null // 3
    },   
    // 12
    {
        text: 'What is the guiding framework that a project team should use when designing the APM architecture?',
        possibilities: [
            {
                answer: 'A. Information Technology Infrastructure Library (ITIL)',
            },
            {
                answer: 'B. Project Management Professional (PMP)',
            },
            {
                answer: 'C. Common Services Data Model (CSDM)',
            },
            {
                answer: 'D. Design Implementation Outcomes (DIO)',
            },
        ],
        selected: [],
        correct: null // 2
    },   
   
  ];
})();

/*
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
    */
