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
    /* 04 */ [0, 3, 4, 5],
    /* 05 */ [0, 2, 3],
    /* 06 */ [1, 3, 4, 5],
    /* 07 */ [3],
    /* 08 */ [2, 3],
    /* 09 */ [2],
    /* 10 */ [0],
    /* 11 */ [1],
    /* 12 */ [2],
    /* 13 */ [0, 1, 3],
    /* 14 */ [1],
    /* 15 */ [1],
    /* 16 */ [0, 1, 3],
    /* 17 */ [0],
    /* 18 */ [1, 2, 3, 4],
    /* 19 */ [1],
    /* 20 */ [2],
    /* 21 */ [0],
    /* 22 */ [0],
    /* 23 */ [0],
    /* 24 */ [0],
    /* 25 */ [0],
    /* 26 */ [1],
    /* 27 */ [1],
    /* 28 */ [0, 1, 2, 3],
    /* 29 */ [1],
    /* 30 */ [2],
    /* 31 */ [0, 1],
    /* 32 */ [0],
    /* 33 */ [0],
    /* 34 */ [1],
    /* 35 */ [1],
    /* 36 */ [0],
    /* 37 */ [0],
    /* 38 */ [3],
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
      text: "What does the Load Application Indicators and Compute Application Scores job do?",
      possibilities: [
        {
          answer:
            "A. Generates scores for all indicators and business applications across selected profiles",
        },
        {
          answer:
            "B. Generates scores for selected indicators and selected applications across all profiles",
        },
        {
          answer:
            "C. Generates scores for all indicators and business applications across all profiles",
        },
        {
          answer:
            "D. Generates scores for all indicators and selected applications across all profiles",
        },
      ],
      selected: [],
      correct: null, // 2
    },
    // 03
    {
      text: "APM combines with several ServiceNow technologies to provide a comprehensive view of your customer application portfolio. Why would a customer want to utilize information from ServiceNow ServiceMapping? (Choose two.)",
      possibilities: [
        {
          answer:
            "A. Identify your customer applications underlying technologies.",
        },
        {
          answer: "B. Identify your customer application services.",
        },
        {
          answer:
            "C. Produce a horizontal picture of a customer business applications.",
        },
        {
          answer: "D. Create an application inventory.",
        },
      ],
      selected: [],
      correct: null, // 0 1
    },
    // 04
    {
      text: "What are the 4 sections of the APM portal home page that is aligned to The Open Group Architecture Framework (TOGAF)? (Choose four.)",
      possibilities: [
        {
          answer: "A.Information Portfolio",
        },
        {
          answer: "B. Service Portfolio",
        },
        {
          answer: "C. Catalog Portfolio",
        },
        {
          answer: "D. Application Portfolio",
        },
        {
          answer: "E. Business Portfolio",
        },
        {
          answer: "F. Technology Portfolio",
        },
      ],
      selected: [],
      correct: null, // 0 3 4 5
    },
    //05
    {
      text: "APM interfaces with Software Asset Management to pull this application data:(Choose three.)",
      possibilities: [
        {
          answer: "A. Product Classification",
        },
        {
          answer: "B. Software Model Data",
        },
        {
          answer: "C. Hardware Asset Lifecycle",
        },
        {
          answer: "D. Lifecycle Data",
        },
        {
          answer: "E. Vendor Procurement",
        },
      ],
      selected: [],
      correct: null, // 0 2 3
    },
    //06
    {
      text: "Which attributes can be used to categorize business applications? (Choose four.)",
      possibilities: [
        {
          answer: "A. Application Category",
        },
        {
          answer: "B. Application Name",
        },
        {
          answer: "C. Application Family",
        },
        {
          answer: "D. Portfolio",
        },
        {
          answer: "E. Category",
        },
        {
          answer: "F. Business Unit",
        },
      ],
      selected: [],
      correct: null, // 0 2 4 5
    },
    // 07
    {
      text: "The capability map provides a hierarchical view of the business capabilities in an organization. How many levels does the capability hierarchy support in its series?",
      possibilities: [
        {
          answer: "A. 7",
        },
        {
          answer: "B. 8",
        },
        {
          answer: "C. 10",
        },
        {
          answer: "D. 6",
        },
      ],
      selected: [],
      correct: null, // 3
    },
    // 08
    {
      text: "Why would enterprise architects be interested in APM outcomes? (Choose two.)",
      possibilities: [
        {
          answer: "A. Understand incident counts by application",
        },
        {
          answer: "B. Understand what software licenses need to be reclaimed",
        },
        {
          answer:
            "C. Understand the landscape of technology standards and lifecycle plans",
        },
        {
          answer: "D. View business capabilities supported by applications",
        },
      ],
      selected: [],
      correct: null, // 2 3
    },
    // 09
    {
      text: "What relationship type is used to describe a relationship between a business capability and a business application?",
      possibilities: [
        {
          answer: "A. Used: Used by",
        },
        {
          answer: "B. Depends on: Used by",
        },
        {
          answer: "C. Provides: Provided by",
        },
        {
          answer: "D. Runs on: Runs",
        },
      ],
      selected: [],
      correct: null, // 2
    },
    // 10
    {
      text: "When a business application request is approved, a record is created in the business application table. What is the state of the business application at this point?",
      possibilities: [
        {
          answer: "A. Implementing",
        },
        {
          answer: "B. Retired",
        },
        {
          answer: "C. In Production",
        },
        {
          answer: "D. Pilot",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 11
    {
      text: "Which of the following fields represents the granular licensable version of the software and is used to calculate the technology risk?",
      possibilities: [
        {
          answer: "A. Lifecyle Model",
        },
        {
          answer: "B. Ignore Technical Risk",
        },
        {
          answer: "C. Lifecycle Release",
        },
        {
          answer: "D. Lifecycle Full Version",
        },
      ],
      selected: [],
      correct: null, // 1
    },
    // 12
    {
      text: "What is the guiding framework that a project team should use when designing the APM architecture?",
      possibilities: [
        {
          answer: "A. Information Technology Infrastructure Library (ITIL)",
        },
        {
          answer: "B. Project Management Professional (PMP)",
        },
        {
          answer: "C. Common Services Data Model (CSDM)",
        },
        {
          answer: "D. Design Implementation Outcomes (DIO)",
        },
      ],
      selected: [],
      correct: null, // 2
    },
    // 13
    {
      text: "What key components of ServiceNow does APM leverage? (Choose three.)",
      possibilities: [
        {
          answer: "A. Discovery",
        },
        {
          answer: "B. Service Mapping",
        },
        {
          answer: "C. Service Catalog",
        },
        {
          answer: "D. Application Services",
        },
        {
          answer: "D. HR",
        },
      ],
      selected: [],
      correct: null, // 0 1 3
    },
    // 14
    {
      text: "What kind of users would implement and maintain Application Portfolio Management? ",
      possibilities: [
        {
          answer: "A. Sales representatives",
        },
        {
          answer: "B. Enterprise architects",
        },
        {
          answer: "C. Project Manager",
        },
        {
          answer: "D. Customers",
        },
      ],
      selected: [],
      correct: null, // 1
    },
    // 15
    {
      text: "Identify the specific APM role that can classify applications and create bubble charts",
      possibilities: [
        {
          answer: "A. sn_apm.apm_chart_admin",
        },
        {
          answer: "B. sn_apm.apm_admin",
        },
        {
          answer: "C. sys admin",
        },
        {
          answer: "D. sn_apm.apm_ user",
        },
      ],
      selected: [],
      correct: null, // 1
    },
    // 16
    {
      text: "What are the main navigation starting points in APM?",
      possibilities: [
        {
          answer: "A. Application Portfolio Management Portal",
        },
        {
          answer: "B. Application Portfolio Management Dashboard ",
        },
        {
          answer: "C. Technology Portfolio Management",
        },
        {
          answer: "D. Business Planning Portal",
        },
      ],
      selected: [],
      correct: null, // 0 1 3
    },
    // 17
    {
      text: "An organization with a level 1 maturity is working towards having all applications under management in a single system of record. Which step in the Guided Setup is first?",
      possibilities: [
        {
          answer: "A. Application Classification ",
        },
        {
          answer: "B. Application Documentation",
        },
        {
          answer: "C. Technology Portfolio Management",
        },
        {
          answer: "D. Reports and Dashboards",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 18
    {
      text: "What problems can be solved by the ServiceNow APM application? Select all that apply.",
      possibilities: [
        {
          answer:
            "A. Employees installing personal software on work computers.",
        },
        {
          answer: "B. Pressure to cut down the IT application budget.",
        },
        {
          answer: "C. Too many business applications to track.",
        },
        {
          answer: "D. No single repository of applications.",
        },
        {
          answer:
            "E. Business value provided by an application is too subjective.",
        },
        {
          answer: "F. Too many employees with personal computers.",
        },
      ],
      selected: [],
      correct: null, // 1 2 3 4
    },
    // 19
    {
      text: "Which type of stakeholder is responsible for taking an organizations business strategy and defining an IT systems architecture to support that strategy? ",
      possibilities: [
        {
          answer: "A. IT Leadership",
        },
        {
          answer: "B. Enterprise Architect",
        },
        {
          answer: "C. IT Operations",
        },
        {
          answer: "D. Application Owners",
        },
      ],
      selected: [],
      correct: null, //  1
    },
    // 20
    {
      text: "Which role do you need in order to access the Application 360 and Analyze dashboards?",
      possibilities: [
        {
          answer: "A. APM User",
        },
        {
          answer: "B. APM Admin",
        },
        {
          answer: "C. APM Analyst",
        },
        {
          answer: "D. Sys Admin",
        },
      ],
      selected: [],
      correct: null, // 2
    },

    // 21
    {
      text: "What ServiceNow feature does APM integrate with to allow APM users to register new business applications?",
      possibilities: [
        {
          answer: "A. Service Catalog",
        },
        {
          answer: "B. Incident Management",
        },
        {
          answer: "C. Project & Portfolio Management",
        },
        {
          answer: "D. Discovery",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 22
    {
      text: "What role will be assigned to the APM Owners group?",
      possibilities: [
        {
          answer: "A. sn_apm.apm_user",
        },
        {
          answer: "B. sn_apm.apm_admin",
        },
        {
          answer: "C. sn_apm.ap_analyst",
        },
        {
          answer: "D. sn_apm.apm.read",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 23
    {
      text: "Which PA plugin is required for the Application Landscape dashboard?",
      possibilities: [
        {
          answer:
            "A. Performance Analytics  Content Pack  Application Portfolio Management [com.snc.pa.apm]",
        },
        {
          answer:
            "B. Performance Analytics  Content Pack  Application Portfolio Management and  Change Management [com.snc.pa.apm.change_request]",
        },
        {
          answer:
            "C. Performance Analytics  Content Pack  Problem Management [com.snc.pa.apm.problem]",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 24
    {
      text: "Which role is required to access the Application Landscape dashboard? ",
      possibilities: [
        {
          answer: "A. sn_apm.apm_user ",
        },
        {
          answer: "B. sn_apm.apm_admin ",
        },
        {
          answer: "C. sn_apm.ap_analyst",
        },
        {
          answer: "D. business_planner",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 25
    {
      text: "Which of the following represents an instance of a business application? ",
      possibilities: [
        {
          answer: "A. Application Service ",
        },
        {
          answer: "B. Business Service ",
        },
        {
          answer: "C. Software Model",
        },
        {
          answer: "D. Porfolio",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 26
    {
      text: "Once business applications are loaded with the critical attributes populated, which dashboard can be utilized in order to provide an overview of the application inventory?",
      possibilities: [
        {
          answer: "A. PMO dashboard",
        },
        {
          answer: "B. Application Landscape dashboard",
        },
        {
          answer: "C. Technology portfolio management dashboard",
        },
        {
          answer: "D. Financial Analyst dashboard",
        },
      ],
      selected: [],
      correct: null, // 1
    },
    // 27
    {
      text: "What will they implement to ensure accurate data on their business applications?",
      possibilities: [
        {
          answer: "A. Customer reports",
        },
        {
          answer: "B. Data certication schedule",
        },
        {
          answer: "C. Data policies",
        },
        {
          answer: "D. Corporate policies",
        },
      ],
      selected: [],
      correct: null, // 1
    },
    // 28
    {
      text: "What are the different types of sources used in indicator scores? Select all that apply.",
      possibilities: [
        {
          answer: "A. Assessments",
        },
        {
          answer: "B. Custom Scripts",
        },
        {
          answer: "C. Query Conditions",
        },
        {
          answer: "D. Performance Analytics",
        },
      ],
      selected: [],
      correct: null, // 0 1 2 3
    },
    // 29
    {
      text: "What field represents the lowest level in the business capability hierarchy? ",
      possibilities: [
        {
          answer: "A. Lowest Level",
        },
        {
          answer: "B. Leaf Node",
        },
        {
          answer: "C. Hierarchy ID",
        },
        {
          answer: "D. Parent",
        },
      ],
      selected: [],
      correct: null, // 1
    },

    // 30
    {
      text: "Weather World has integrated APM with ITSM. Which of the following is recommended to associate to an incident? ",
      possibilities: [
        {
          answer: "A. Business Application",
        },
        {
          answer: "B. Business Capability",
        },
        {
          answer: "C. Application Service",
        },
        {
          answer: "D. Software",
        },
      ],
      selected: [],
      correct: null, // 2
    },
    // 31
    {
      text: "Which dashboards provide a decision-making approach to APM by identifying which business applications require focus and attention? Select all that apply.",
      possibilities: [
        {
          answer: "A. Application 360.",
        },
        {
          answer: "B. Analyze",
        },
        {
          answer: "C. Application Indicators",
        },
        {
          answer: "D. Application Scores",
        },
      ],
      selected: [],
      correct: null, // 0 1
    },

    // 32
    {
      text: "Score to assess business application:",
      possibilities: [
        {
          answer: "A. 1 to 10",
        },
        {
          answer: "B. 1 to 100",
        },
        {
          answer: "C. 1 to 1000",
        },
        {
          answer: "D. 1 to 10000",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 33
    {
      text: "What is the value of managing applications using ServiceNow?",
      possibilities: [
        {
          answer:
            "A. Allows data collection and visualization without manual effort",
        },
        {
          answer: "B. Allows automation of retiring applications",
        },
        {
          answer: "C. Provides application owners insight to release counts",
        },
        {
          answer: "D. Provides top down strategic alignment in the PMO",
        },
      ],
      selected: [],
      correct: null, // 0
    },
    // 34
    {
      text: "Which job will generate scores for all indicators and business applications across all profiles?",
      possibilities: [
        {
          answer: "A. Business Application Certification Quarterly",
        },
        {
          answer:
            "B. Load Application Indicators and Compute Application Scores",
        },
        {
          answer: "C. Analyze PA scores and PA snapshot tables",
        },
        {
          answer:
            "D. Load TPM Risk Parameters and compute Application Service Risks",
        },
      ],
      selected: [],
      correct: null, // 1
    },
    // 35
    {
      text: "What are the stages of the APM rationalization process?",
      possibilities: [
        {
          answer: "A. Measure, Evaluate, Decide, Take Action, Baseline",
        },
        {
          answer: "B. Identify, Measure, Evaluate, Decide, Take Action",
        },
        {
          answer: "C. Identify, Measure, Decide, Take Action, Communicate",
        },
        {
          answer: "D. Identify, Measure, Evaluate, Take Action, Certify",
        },
      ],
      selected: [],
      correct: null, // 1
    },
    // 36 
    {
      text: 'What is the name of the basic plugin for the APM application?',
      possibilities: [
          {
              answer: 'A. Application Portfolio Management',
          },
          {
              answer: 'B. Business Planner',
          },
          {
              answer: 'C. Financial Management for APM',
          },
          {
              answer: 'D. Application Portfolio Management - ATF Tests',
          },
      ],
      selected: [],
      correct: null // 0
  }, 
  // 37 
  {
    text: 'An organization with a level 1 maturity is working towards having all applications under management in a single system of record. Which step in the Guided Setup is first?',
    possibilities: [
        {
            answer: 'A. Application Classification ',
        },
        {
            answer: 'B. Application Documentation ',
        },
        {
            answer: 'C. Technology Portfolio Management',
        },
        {
            answer: 'D. Reports and Dashboards',
        },
    ],
    selected: [],
    correct: null // 0
}, 
// 38 
{
  text: 'If a customer asks you how ServiceNow’s ServiceMapping application works in order to support APM, how would you explain it?',
  possibilities: [
      {
          answer: 'A. Identifies all hardware and software CI’s and other dependencies that support that service.',
      },
      {
          answer: 'B. Drills down to provide application services, vulnerabilities and risks.',
      },
      {
          answer: 'C. Creates an API to manage seamless application services.',
      },
      {
          answer: 'D. Provides software entitlements through a top-down approach.',
      },
  ],
  selected: [],
  correct: null // 3
}, 
  ];
})();

/*
// 60
        {
            text: '',
            possibilities: [
                {
                    answer: 'A. ',
                },
                {
                    answer: 'B. ',
                },
                {
                    answer: 'C. ',
                },
                {
                    answer: 'D. ',
                },
            ],
            selected: [],
            correct: null // 
        }, 
    */
