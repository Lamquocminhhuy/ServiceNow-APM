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
        /* 01 */ [3], /* 02 */ [0], /* 03 */ [2], /* 04 */ [2], /* 05 */ [0, 3], /* 06 */ [0, 2, 4], /* 07 */ [2], /* 08 */ [1], /* 09 */ [2], /* 10 */ [1, 2, 3], /* 11 */ [1], /* 12 */ [1], /* 13 */ [1], /* 14 */ [3], /* 15 */ [0], /* 16 */ [1], /* 17 */ [0], /* 18 */ [0], /* 19 */ [3], /* 20 */ [0], /* 21 */ [2], /* 22 */ [3], /* 23 */ [0], /* 24 */ [0], /* 25 */ [1], /* 26 */ [0, 2, 3, 5], /* 27 */ [0], /* 28 */ [2], /* 29 */ [0], /* 30 */ [0, 2, 3, 4], /* 31 */ [1], /* 32 */ [0, 1, 2, 3], /* 33 */ [2], /* 34 */ [3], /* 35 */ [0], /* 36 */ [0, 2, 3], /* 37 */ [0], /* 38 */ [1], /* 39 */ [3], /* 40 */ [0], /* 41 */ [3], /* 42 */ [2], /* 43 */ [3], /* 44 */ [0], /* 45 */ [2], /* 46 */ [3], /* 47 */ [1], /* 48 */ [2], /* 49 */ [3], /* 50 */ [0], /* 51 */ [0], /* 52 */ [2], /* 53 */ [1], /* 54 */ [0], /* 55 */ [2], /* 56 */ [3], /* 57 */ [2], /* 58 */ [3], /* 59 */ [1, 2, 3], /* 60 */ [0, 1, 3], 
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
            text: 'As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?',
            possibilities: [
                {
                    answer: 'A metric is a report gauge used on homepages to display real-time data',
                },
                {
                    answer: 'A metric is a time measurement used to report the effectiveness of workflows and SLAs',
                },
                {
                    answer: 'A metric is used to measure and evaluate the effectiveness of IT service management processes',
                },
                {
                    answer: 'A metric is a comparative measurement used to report the effectiveness of flows and SLAs',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 04
        {
            text: 'The display sequence is controlled in a Service Catalog Item using which of the following?',
            possibilities: [
                {
                    answer: 'The Default Value field in the Catalog Item form',
                },
                {
                    answer: 'The Sequence field in the Catalog Item form',
                },
                {
                    answer: 'The Order field in the Variable form',
                },
                {
                    answer: 'The Choice field in the Variable form',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 05
        {
            text: 'Reports can be created from which different places in the platform? (Choose two.)',
            possibilities: [
                {
                    answer: 'List column heading',
                },
                {
                    answer: 'Metrics module',
                },
                {
                    answer: 'Statistics module',
                },
                {
                    answer: 'View / Run module',
                },
            ],
            selected: [],
            correct: null // 0, 3
        },
        // 06
        {
            text: 'Knowledge Base Search results can be sorted by which of the following? (Choose three.)',
            possibilities: [
                {
                    answer: 'Most recent update',
                },
                {
                    answer: 'Popularity',
                },
                {
                    answer: 'Relevancy',
                },
                {
                    answer: 'Manager assignment',
                },
                {
                    answer: 'Number of views',
                },
            ],
            selected: [],
            correct: null // 0, 2, 4
        },
        // 07
        {
            text: 'What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?',
            possibilities: [
                {
                    answer: 'RITM (Number)>REQ (Number)>PROCUREMENT (Number)',
                },
                {
                    answer: 'REQ (Number)>RITM (Number)>PROCUREMENT (Number)',
                },
                {
                    answer: 'REQ (Number)>RITM (Number)>TASK (Number)',
                },
                {
                    answer: 'FULFILLMENT (Number)>RITM (Number)>TASK (Number)',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 08
        {
            text: 'Which term refers to application menus and modules which you may want to access quickly and often?',
            possibilities: [
                {
                    answer: 'Breadcrumb',
                },
                {
                    answer: 'Favorite',
                },
                {
                    answer: 'Tag',
                },
                {
                    answer: 'Bookmark',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 09
        {
            text: 'What is generated from the Service Catalog once a user places an order for an item or service?',
            possibilities: [
                {
                    answer: 'A change request',
                },
                {
                    answer: 'An Order Guide',
                },
                {
                    answer: 'A request',
                },
                {
                    answer: 'An SLA',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 10
        {
            text: 'From the User menu, which actions can a user select? (Choose three.)',
            possibilities: [
                {
                    answer: 'Send Notifications',
                },
                {
                    answer: 'Log Out ServiceNow',
                },
                {
                    answer: 'Elevate Roles',
                },
                {
                    answer: 'Impersonate Users',
                },
                {
                    answer: 'Order from Service Catalog',
                },
                {
                    answer: 'Approve Records',
                },

            ],
            selected: [],
            correct: null // 1, 2, 3
        },
        // 11
        {
            text: 'Buttons, form links, and context menu items are all examples of what type of functionality?',
            possibilities: [
                {
                    answer: 'Business Rule',
                },
                {
                    answer: 'UI Action',
                },
                {
                    answer: 'Client Script',
                },
                {
                    answer: 'UI Policy',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 12
        {
            text: 'Which of the following is true of Service Catalog Items in relation to the Service Catalog?',
            possibilities: [
                {
                    answer: 'They run behind the scenes.',
                },
                {
                    answer: 'They are the building blocks.',
                },
                {
                    answer: 'They are optional.',
                },
                {
                    answer: 'They provide options.',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 13
        {
            text: 'Table Access Control rules are processed in the following order:',
            possibilities: [
                {
                    answer: 'any table name (wildcard), parent table name, table name',
                },
                {
                    answer: 'table name, parent table name, any table name (wildcard)',
                },
                {
                    answer: 'parent table name, table name, any table name (wildcard)',
                },
                {
                    answer: 'any table name (wildcard), table name, parent table name',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 14
        {
            text: 'What is the platform name for the User table?',
            possibilities: [
                {
                    answer: 'u_users',
                },
                {
                    answer: 'sys_users',
                },
                {
                    answer: 'x_users',
                },
                {
                    answer: 'sys_user',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 15
        {
            text: 'A REQ number in the Service Catalog represents…',
            possibilities: [
                {
                    answer: 'the order number.',
                },
                {
                    answer: 'the stage.',
                },
                {
                    answer: 'the task to complete.',
                },
                {
                    answer: 'the individual item in the order.',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 16
        {
            text: 'Which would NOT appear in the History section of the Application Navigator?',
            possibilities: [
                {
                    answer: 'Records',
                },
                {
                    answer: 'UI Pages',
                },
                {
                    answer: 'Lists',
                },
                {
                    answer: 'Forms',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 17
        {
            text: 'Which one of the following statements is a recommendation from ServiceNow about Update Sets?',
            possibilities: [
                {
                    answer: 'Avoid using the Default Update set as an Update Set for moving customizations from instance to instance',
                },
                {
                    answer: 'Before moving customizations from instance to instance with Update Sets, ensure that both instances are different versions',
                },
                {
                    answer: 'Use the Baseline Update Set to store the contents of items after they are changed the first time',
                },
                {
                    answer: 'Once an Update Set is closed as “Complete”, change it back to “In Progress” until it is applied to another instance',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 18
        {
            text: 'Which of the following is used to initiate a flow?',
            possibilities: [
                {
                    answer: 'A Trigger',
                },
                {
                    answer: 'Core Action',
                },
                {
                    answer: 'A spoke',
                },
                {
                    answer: 'An Event',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 19
        {
            text: 'For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?',
            possibilities: [
                {
                    answer: 'Service Catalog variables can only be used in Record Producers',
                },
                {
                    answer: 'Service Catalog variables can only be used in Order Guides',
                },
                {
                    answer: 'Service Catalog variables cannot affect the order price',
                },
                {
                    answer: 'Service Catalog variables are global by default',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 20
        {
            text: 'Which one of the following statements is true about Column Context Menus?',
            possibilities: [
                {
                    answer: 'It displays actions such as creating quick reports, configuring the list, and exporting data',
                },
                {
                    answer: 'It displays actions related to filtering options, assigning tags, and search',
                },
                {
                    answer: 'It displays actions related to viewing and filtering the entire list',
                },
                {
                    answer: 'It displays actions such as view form, view related task, and add relationship',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 21
        {
            text: 'Which one statement correctly describes Access Control rule evaluation?',
            possibilities: [
                {
                    answer: 'Rules are evaluated using roles. The role with the most permissions evaluates the rules first',
                },
                {
                    answer: 'If more than one rule applies to a row, the older rule is evaluated first',
                },
                {
                    answer: 'If a row level rule and a field level rule exist, both rules must be true before an operation is allowed',
                },
                {
                    answer: 'Rules are evaluated from the general to the specific, so a table rule must be active to continue',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 22
        {
            text: 'When using the Load Data and Transform Map process, what is the Mapping Assist used for?',
            possibilities: [
                {
                    answer: 'Mapping fields using the Import Log',
                },
                {
                    answer: 'Mapping fields using Transform History',
                },
                {
                    answer: 'Mapping fields using an SLA',
                },
                {
                    answer: 'Mapping fields using a Field Map',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 23
        {
            text: 'Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?',
            possibilities: [
                {
                    answer: 'The CMDB contains data about tangible and intangible business assets',
                },
                {
                    answer: 'The CMDB contains the Business Rules that direct the intangible, configurable assets used by a company',
                },
                {
                    answer: 'The CMDB archives all Service Management PaaS equipment metadata and usage statistics',
                },
                {
                    answer: 'The CMDB contains ITIL process data pertaining to configuration items',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 24
        {
            text: 'In what order should filter elements be specified?',
            possibilities: [
                {
                    answer: 'Field, Operator, then Value',
                },
                {
                    answer: 'Field, Operator, then Condition',
                },
                {
                    answer: 'Operator, Condition, then Value',
                },
                {
                    answer: 'Value, Operator, then Field',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 25
        {
            text: 'Which statement is true about business rules?',
            possibilities: [
                {
                    answer: 'A business rule must run before a database action occurs',
                },
                {
                    answer: 'A business rule can be a piece of Javascript',
                },
                {
                    answer: 'A business rule must not run before a database action occurs',
                },
                {
                    answer: 'A business rule monitors fields on a form',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 26
        {
            text: 'Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)',
            possibilities: [
                {
                    answer: 'onSubmit',
                },
                {
                    answer: 'onUpdate',
                },
                {
                    answer: 'onCellEdit',
                },
                {
                    answer: 'onLoad',
                },
                {
                    answer: 'onEdit',
                },
                {
                    answer: 'onChange',
                },
                {
                    answer: 'onSave',
                },
            ],
            selected: [],
            correct: null // 0, 2, 3, 5
        },
        // 27
        {
            text: 'Which type of tables may be extended by other tables, but do not extend another table?',
            possibilities: [
                {
                    answer: 'Base Tables',
                },
                {
                    answer: 'Core Tables',
                },
                {
                    answer: 'Extended Tables',
                },
                {
                    answer: 'Custom Tables',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 28
        {
            text: 'Which of the following statement describes the purpose of an Order Guide?',
            possibilities: [
                {
                    answer: 'Order Guides restrict the number of items in an order to only one item per request',
                },
                {
                    answer: 'Order Guide provide a list of guidelines for Administrators on how to set up item variables',
                },
                {
                    answer: 'Order Guide provide the ability to order multiple, related items as one request',
                },
                {
                    answer: 'Order Guides take the user directly to the checkout without prompting for information',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 29
        {
            text: 'Which tool is used to have conversations with logged-in users in real-time?',
            possibilities: [
                {
                    answer: 'Connect Chat',
                },
                {
                    answer: 'Now Messenger',
                },
                {
                    answer: 'User Presence',
                },
                {
                    answer: 'Comments',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 30
        {
            text: 'Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)',
            possibilities: [
                {
                    answer: 'Service Processes',
                },
                {
                    answer: 'User Permissions',
                },
                {
                    answer: 'Tables and Fields',
                },
                {
                    answer: 'A Database',
                },
                {
                    answer: 'The Dependency View',
                },
            ],
            selected: [],
            correct: null // 0, 2, 3, 4
        },
        // 31
        {
            text: 'What is a formatter? Select one of the following.',
            possibilities: [
                {
                    answer: 'A formatter allows you to configure applications on your instance',
                },
                {
                    answer: 'A formatter is a form element used to display information that is not a field in the record',
                },
                {
                    answer: 'A formatter allows you to populate fields automatically',
                },
                {
                    answer: 'A formatter is a set of conditions applied to a table to help find and work with data',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 32
        {
            text: 'When searching using the App Navigator search field, what can be returned? (Choose four.)',
            possibilities: [
                {
                    answer: 'Names of Applications and Modules',
                },
                {
                    answer: 'Names of Modules',
                },
                {
                    answer: 'Names of Applications',
                },
                {
                    answer: 'Favorites',
                },
                {
                    answer: 'History Records',
                },
                {
                    answer: 'Titles of Dashboard Gauges',
                },
            ],
            selected: [],
            correct: null // 0, 1, 2, 3
        },
        // 33
        {
            text: 'Which technique is used to get information from a series of referenced fields from different tables?',
            possibilities: [
                {
                    answer: 'Table-Walking',
                },
                {
                    answer: 'Sys_ID Pulling',
                },
                {
                    answer: 'Dot-Walking',
                },
                {
                    answer: 'Record-Hopping',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 34
        {
            text: 'What is a schema map?',
            possibilities: [
                {
                    answer: 'A schema map enables administrators to define records from specific tables as trouble sources for Configuration Items',
                },
                {
                    answer: 'A schema map graphically organizes the visual task boards for the CMDB',
                },
                {
                    answer: 'A schema map graphically displays the Configuration Items that support a business service',
                },
                {
                    answer: 'A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 35
        {
            text: 'Which one of the following statements best describes the purpose of an Update Set?',
            possibilities: [
                {
                    answer: 'An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems',
                },
                {
                    answer: 'By default, an Update Set includes customizations, Business Rules, and homepages',
                },
                {
                    answer: 'An Update Set is a group of customizations that is moved from Production to Development',
                },
                {
                    answer: 'By default, the changes included in an Update Set are visible only in the instance to which they are applied',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 36
        {
            text: 'Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)',
            possibilities: [
                {
                    answer: 'Banner Image',
                },
                {
                    answer: 'Record Number Format',
                },
                {
                    answer: 'Browser Tab Title',
                },
                {
                    answer: 'System Date Format',
                },
                {
                    answer: 'Form Header Size',
                },
            ],
            selected: [],
            correct: null // 0, 2, 3
        },
        // 37
        {
            text: 'What is the function of user impersonation?',
            possibilities: [
                {
                    answer: 'Testing and visibility',
                },
                {
                    answer: 'Activate verbose logging',
                },
                {
                    answer: 'View custom perspectives',
                },
                {
                    answer: 'Unlock Application master list',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 38
        {
            text: 'What information does the System Dictionary contain?',
            possibilities: [
                {
                    answer: 'The human-readable labels and language settings',
                },
                {
                    answer: 'The definition for each table and column',
                },
                {
                    answer: 'The information on how tables relate to each other',
                },
                {
                    answer: 'The language dictionary used for spell checking',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 39
        {
            text: 'When working on a form, what is the difference between Insert and Update operations?',
            possibilities: [
                {
                    answer: 'Insert creates a new record and Update saves changes, both remain on the form',
                },
                {
                    answer: 'Insert creates a new record and Update saves changes, both exit the form',
                },
                {
                    answer: 'Insert saves changes and exits the form, Update saves changes and remains on the form',
                },
                {
                    answer: 'Insert saves changes and remains on the form, Update saves changes and exits the form',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 40
        {
            text: 'How is the Event Log different from the Event Registry?',
            possibilities: [
                {
                    answer: 'Event Log contains generated Events, the Event Registry is a table of Event definitions',
                },
                {
                    answer: 'Event Log is formatted in the Log style, the Event Registry displays different fields',
                },
                {
                    answer: 'Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were triggered during the day (24-hour period)',
                },
                {
                    answer: 'Event Log is the same as the Event Registry',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 41
        {
            text: 'What is a Dictionary Override?',
            possibilities: [
                {
                    answer: 'A Dictionary Override is an incoming customer update in an Update Set which applies to the same objects as a newer local customer update',
                },
                {
                    answer: 'A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT services',
                },
                {
                    answer: 'A Dictionary Override is a task within a flow that requests an action before the flow can continue',
                },
                {
                    answer: 'A Dictionary Override sets field properties in extended tables',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 42
        {
            text: 'Which group of permissions is used to control Application and Module access?',
            possibilities: [
                {
                    answer: 'Access Control Rules',
                },
                {
                    answer: 'UI Policies',
                },
                {
                    answer: 'Roles',
                },
                {
                    answer: 'Assignment Rules',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 43
        {
            text: 'What is a Record Producer?',
            possibilities: [
                {
                    answer: 'A Record Producer is a type of Catalog Item that is used for Requests, not Services',
                },
                {
                    answer: 'A Record Producer creates user records',
                },
                {
                    answer: 'A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests',
                },
                {
                    answer: 'A Record Producer is a type of a Catalog Item that allows users to create task-based records from the Service Catalog',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 44
        {
            text: 'Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?',
            possibilities: [
                {
                    answer: 'They direct the user to a record producer',
                },
                {
                    answer: 'They direct the user to a catalog property',
                },
                {
                    answer: 'They direct the user to a catalog UI policy',
                },
                {
                    answer: 'They direct the user to a catalog client script',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 45
        {
            text: 'What is the Import Set Table?',
            possibilities: [
                {
                    answer: 'A table where data will be placed, post-transformation',
                },
                {
                    answer: 'A table that determines relationships',
                },
                {
                    answer: 'A staging area for imported records',
                },
                {
                    answer: 'A repository for Update Set information',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 46
        {
            text: 'What is a characteristic of importing data into ServiceNow?',
            possibilities: [
                {
                    answer: 'An existing Transform Map can be used one time on the same import set',
                },
                {
                    answer: 'Coalesce fields are used only after running Transform',
                },
                {
                    answer: 'Any user can manage and set up import sets',
                },
                {
                    answer: 'An existing Transform Map can be used multiple times on the same import set',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 47
        {
            text: 'What module in the Service Catalog application does an Administrator access to begin creating a new item?',
            possibilities: [
                {
                    answer: 'Maintain Categories',
                },
                {
                    answer: 'Maintain Items',
                },
                {
                    answer: 'Content Items',
                },
                {
                    answer: 'Items',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 48
        {
            text: 'Which of the following allows a user to edit field values in a list without opening the form?',
            possibilities: [
                {
                    answer: 'Data Editor',
                },
                {
                    answer: 'Edit Menu',
                },
                {
                    answer: 'List Editor',
                },
                {
                    answer: 'Form Designer',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 49
        {
            text: 'Which three Variable Types can be added to a Service Catalog Item?',
            possibilities: [
                {
                    answer: 'True/False, Multiple Choice, and Ordered',
                },
                {
                    answer: 'True/False, Checkbox, and Number List',
                },
                {
                    answer: 'Number List, Single Line Text, and Reference',
                },
                {
                    answer: 'Multiple Choice, Select Box, and Checkbox',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 50
        {
            text: 'How are Workflows moved between instances?',
            possibilities: [
                {
                    answer: 'Workflows are moved using Update Sets',
                },
                {
                    answer: 'Workflows are moved using Transform Maps',
                },
                {
                    answer: 'Workflows are moved using Application Sets',
                },
                {
                    answer: 'Workflows cannot be moved between instances',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 51
        {
            text: 'The baseline Service Catalog homepage contains links to which of the following components?',
            possibilities: [
                {
                    answer: 'Record Producers, Order Guides, and Catalog Items',
                },
                {
                    answer: 'Order Guides, Item Variables, and flows',
                },
                {
                    answer: 'Order Guides, Catalog Items, and flows',
                },
                {
                    answer: 'Record Producers, Order Guides, and Item Variables',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 52
        {
            text: 'Which of the following statements is true when a new table is created by extending another table?',
            possibilities: [
                {
                    answer: 'The new table archives the parent table and assumed its roles in the database',
                },
                {
                    answer: 'The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but none of the existing fields',
                },
                {
                    answer: 'The new table inherits all of the fields of the parent table and can also contain new fields unique to itself',
                },
                {
                    answer: 'The new table inherits all of the fields, but does not inherit Access Control rules, Client Scripts, and UI Policies of the parent table',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 53
        {
            text: 'Where can Admins check which release is running on an ServiceNow instance?',
            possibilities: [
                {
                    answer: 'Memory Stats module',
                },
                {
                    answer: 'Stats module',
                },
                {
                    answer: 'System.upgraded table',
                },
                {
                    answer: 'Transactions log',
                },
            ],
            selected: [],
            correct: null // 1
        },
        // 54
        {
            text: 'A knowledge article must be which of the following states to display to a user?',
            possibilities: [
                {
                    answer: 'Published',
                },
                {
                    answer: 'Drafted',
                },
                {
                    answer: 'Retired',
                },
                {
                    answer: 'Reviewed',
                },
            ],
            selected: [],
            correct: null // 0
        },
        // 55
        {
            text: 'What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?',
            possibilities: [
                {
                    answer: 'Answer Agent',
                },
                {
                    answer: 'live Feed',
                },
                {
                    answer: 'Virtual Agent',
                },
                {
                    answer: 'Connect Chat',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 56
        {
            text: 'What is the purpose of a Related List?',
            possibilities: [
                {
                    answer: 'To create a one-to-many relationship',
                },
                {
                    answer: 'To dot-walk to a core table',
                },
                {
                    answer: 'To present related fields',
                },
                {
                    answer: 'To present related records',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 57
        {
            text: 'Which one of the following statements describes the purpose of a Service Catalog flow?',
            possibilities: [
                {
                    answer: 'A Service Catalog flow generates three basic components: item variable types, tasks, and approvals',
                },
                {
                    answer: 'Although a Service Catalog flow cannot send notifications, the flow drives complex fulfillment processes',
                },
                {
                    answer: 'A Service Catalog flow is used to drive complex fulfillment processes and sends notifications to defined users or groups',
                },
                {
                    answer: 'Service Catalog flow generates three basic components: item variable types, tasks, and notifications',
                },
            ],
            selected: [],
            correct: null // 2
        },
        // 58
        {
            text: 'Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?',
            possibilities: [
                {
                    answer: 'report',
                },
                {
                    answer: 'flow',
                },
                {
                    answer: 'event',
                },
                {
                    answer: 'task',
                },
            ],
            selected: [],
            correct: null // 3
        },
        // 59
        {
            text: 'Which are valid Service Now User Authentication Methods? (Choose three.)',
            possibilities: [
                {
                    answer: 'XML feed',
                },
                {
                    answer: 'Local database',
                },
                {
                    answer: 'LDAP',
                },
                {
                    answer: 'SSO',
                },
                {
                    answer: 'FTP authentication',
                },
            ],
            selected: [],
            correct: null // 1, 2, 3
        },
        // 60
        {
            text: 'Access Control rules may be defined with which of the following permission requirements? (Choose three.)',
            possibilities: [
                {
                    answer: 'Roles',
                },
                {
                    answer: 'Conditional Expressions',
                },
                {
                    answer: 'Assignment Rules',
                },
                {
                    answer: 'Scripts',
                },
                {
                    answer: 'User Criteria',
                },
                {
                    answer: 'Groups',
                },
            ],
            selected: [],
            correct: null // 0, 1, 3
        },
        
    ]

})()

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