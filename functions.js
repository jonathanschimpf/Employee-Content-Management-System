

// require inquirer for prompts..

const inquirer = require("inquirer");

// require console.table for table layout

require("console.table");

// shout out to the app.js file

require("./app.js");


// *************
// add functions
// *************


function addNewDepartment(connection, mainMenu) {

    inquirer.prompt([

        {
            type: "input",
            name: "department_name",
            message: "What type of new department would you like to create?",
            default: "Data Analysis",
            validate: function (response) {

                if (response.length < 1) {

                    return console.log("That is not a valid department name. Please try again.");

                }

                return true;

            }
        }

    ]).then(function (response) {

        connection.query("INSERT INTO department_info (department_name) VALUES (?)", response.department_name, (err, res) => {

            if (err)
                throw err;

            console.log("\n\n");
            console.log("Your new department has been successfully created.");
            console.log("\n\n");

            mainMenu();

        });

    })

};


function addNewEmployeeRole(connection, mainMenu) {


    connection.query("SELECT * FROM department_info", function (err, res) {

        const departmentChoices = res.map(row => {

            const choice = {

                name: row.department_name,
                value: row.id

            };

            return choice

        })
        inquirer.prompt([

            {
                type: "input",
                name: "title",
                message: "What type of role would you like to create?",
                default: "Data Analyst",
                validate: function (response) {

                    if (response.length < 1) {

                        return console.log("That is not a valid role. Please try again");

                    }

                    return true;

                }

            },

            {

                type: "input",
                name: "salary",
                message: "What is the starting salary for this new role?",
                default: "75000.00",
                validate: function (response) {

                    if (response.length < 1) {

                        return console.log("That is not a valid Salary. Please try again");

                    }

                    return true;

                }

            },

            {

                type: "list",
                name: "department_id",
                choices: departmentChoices,
                message: "What department will this role be a part of?"

            }

        ]).then(function (response) {

            connection.query("INSERT INTO role_info SET ?", response, (err, res) => {

                if (err)
                    throw err;

                console.log("\n\n");
                console.log("Your new department has been successfully created.");
                console.log("\n\n");

                mainMenu();

            });

        })

    })

};




function addNewEmployee(connection, mainMenu) {

    const newHire = {};

    connection.query("SELECT * FROM role_info", function (err, res) {

        if (err)
            throw err;

        inquirer.prompt([

            {
                type: "input",
                name: "first_name",
                message: "What is the first name of your newly hired employee?",
                default: "John",
                validate: function (response) {

                    if (response.length < 1) {

                        return console.log("That is not a first name. Please try again");

                    }

                    return true;

                }

            },

            {
                type: "input",
                name: "last_name",
                message: "What is the last name of your newly hired employee?",
                default: "Doe",
                validate: function (response) {

                    if (response.length < 1) {

                        return console.log("That is not a valid last name. Please try again");

                    }

                    return true;

                }

            },

            {

                type: "list",
                name: "role_id",
                message: "What role will this newly hired employee be filling?",
                default: "Web Developer",
                choices: function () {

                    const choice = [];

                    for (var i = 0; i < res.length; i++) {

                        choice.push(res[i].title);

                    }

                    return choice;

                },

            },


        ]).then(function (response) {

            newHire.first_name = response.first_name;
            newHire.last_name = response.last_name;

            connection.query("SELECT * FROM role_info WHERE title = ?", response.role_id, function (err, res) {

                if (err)
                    throw err;

                newHire.role_id = res[0].id;

                connection.query("SELECT * from employee_info", (err, res) => {

                    if (err) throw err;

                    inquirer.prompt([

                        {
                            type: "list",
                            name: "manager_name",
                            message: "Who is this newly hired employee's manager?",
                            choices: function () {

                                let choice = [];

                                for (var i = 0; i < res.length; i++) {

                                    choice.push(res[i].first_name);
                                }

                                return choice;

                            },
                        }

                    ])

                        .then(function (response) {

                            connection.query("SELECT id FROM employee_info WHERE first_name = ?", response.manager_name, function (err, res) {

                                if (err)
                                    throw err;

                                newHire.manager_id = res[0].id;


                                connection.query("INSERT INTO employee_info SET ?", newHire, (err, res) => {

                                    if (err) throw err;

                                    console.log("\n\n");
                                    console.log("Your new employee has been successfully created.");
                                    console.log("\n\n");

                                    mainMenu();

                                })

                            })

                        });

                });

            });

        });

    });

};




// **************
// view functions
// **************


function allEmployees(connection, mainMenu) {

    connection.query("SELECT employee_info.id, employee_info.first_name, employee_info.last_name, role_info.title, role_info.salary, department_info.department_name AS department_info, manager_alias.first_name AS manager FROM employee_info LEFT JOIN employee_info AS manager_alias ON manager_alias.id = employee_info.manager_id JOIN role_info ON employee_info.role_id = role_info.id JOIN department_info ON role_info.department_id = department_info.id ORDER BY employee_info.id ", (err, res) => {

        if (err)
            throw err;

        console.log("\n\n");
        console.table(res);
        console.log("\n\n");

        mainMenu();

    })

};


function allEmployeesByDepartment(connection, mainMenu) {

    connection.query()

    mainMenu();

};


function allDepartments(connection, mainMenu) {

    connection.query("SELECT * FROM department_info", (err, res) => {

        if (err)
            throw err;

        console.log("\n\n");
        console.table(res);
        console.log("\n\n");


        mainMenu();

    })

};


function allEmployeeRoles(connection, mainMenu) {

    connection.query("SELECT * FROM role_info", (err, res) => {

        if (err)
            throw err;

        console.log("\n\n");
        console.table(res);
        console.log("\n\n");


        mainMenu();

    })

};



// *****************************
// updating & deleting functions
// *****************************


function updateEmployeeRole(connection, mainMenu) {

    connection.query()

    mainMenu();
};


function updateEmployeeManager(connection, mainMenu) {

    connection.query()

    mainMenu();
};


function removeEmployee(connection, mainMenu) {

    connection.query()

    mainMenu();

};


function removeDepartment(connection, mainMenu) {

    connection.query()

    mainMenu();

};


function removeEmployeeRole(connection, mainMenu) {


    
    };








// **************
// module exports
// **************


module.exports = {


    // view

    allEmployees: allEmployees,
    allEmployeesByDepartment: allEmployeesByDepartment,
    allDepartments: allDepartments,
    allEmployeeRoles: allEmployeeRoles,


    // add

    addNewEmployee: addNewEmployee,
    addNewDepartment: addNewDepartment,
    addNewEmployeeRole: addNewEmployeeRole,


    // updating + deleting

    updateEmployeeRole: updateEmployeeRole,
    updateEmployeeManager: updateEmployeeManager,
    removeEmployee: removeEmployee,
    removeDepartment: removeDepartment,
    removeEmployeeRole: removeEmployeeRole,


};












// function addNewEmployee(connection, mainMenu) {

//     const newHire = {};

//     connection.query("SELECT * FROM role_info", function (err, res) {

//         if (err)
//             throw err;

//         inquirer.prompt([

//             {
//                 type: "input",
//                 name: "first_name",
//                 message: "What is the first name of your newly hired employee?",
//                 default: "John",
//                 validate: function (response) {

//                     if (response.length < 1) {

//                         return console.log("That is not a first name. Please try again");

//                     }

//                     return true;

//                 }

//             },

//             {
//                 type: "input",
//                 name: "last_name",
//                 message: "What is the last name of your newly hired employee?",
//                 default: "Doe",
//                 validate: function (response) {

//                     if (response.length < 1) {

//                         return console.log("That is not a valid last name. Please try again");

//                     }

//                     return true;

//                 }

//             },

//             {

//                 type: "list",
//                 name: "role_id",
//                 message: "What role will this newly hired employee be filling?",
//                 default: "Web Developer",
//                 choices: function () {

//                     const choice = [];

//                     for (var i = 0; i < res.length; i++) {

//                         choice.push(res[i].title);

//                     }

//                     return choice;

//                 },

//             },


//         ]).then(function (response) {

//             newHire.first_name = response.first_name;
//             newHire.last_name = response.last_name;

//             connection.query("SELECT * FROM role_info WHERE title = ?", response.role_id, function (err, res) {

//                 if (err)
//                     throw err;

//                 newHire.role_id = res[0].id;

//                 connection.query("SELECT * from employee_info", (err, res) => {

//                     if (err) throw err;

//                     inquirer.prompt([

//                         {
//                             type: "list",
//                             name: "manager_name",
//                             message: "Who is this newly hired employee's manager?",
//                             choices: function () {

//                                 let choice = [];

//                                 for (var i = 0; i < res.length; i++) {

//                                     choice.push(res[i].first_name);
//                                 }

//                                 return choice;

//                             },
//                         }

//                     ])

//                 }).then(function (response) {

//                     connection.query("SELECT id FROM employee_info WHERE first_name = ?", response.manager_name, function (err, res) {

//                         if (err)
//                             throw err;

//                         newHire.manager_id = res[0].id;


//                         connection.query("INSERT INTO employee_info SET ?", newHire, (err, res) => {

//                             if (err) throw err;

//                             console.log("\n\n");
//                             console.log("Your new employee has been successfully created.");
//                             console.log("\n\n");

//                             mainMenu();

//                         })

//                     })

//                 });

//             });

//         });

//     });

// };



