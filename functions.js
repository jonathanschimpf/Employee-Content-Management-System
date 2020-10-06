
// require inquirer for prompts..

const inquirer = require("inquirer");

// require console.table for table layout
// replace when running console.log

require("console.table");

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


            if (err) throw err;

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

        ])

        .then(function (response) {

            connection.query("INSERT INTO role_info SET ?", response, (err, res) => {
    
    
                if (err) throw err;
    
                console.log("\n\n");
                console.log("Your new department has been successfully created.");
                console.log("\n\n");
    
                mainMenu();
    
            });
    
    
        })
    })

    // mainMenu();

};



function addNewEmployee(connection, mainMenu) {

    connection.query()

    mainMenu();

};






// **************
// view functions
// **************


function allEmployees(connection, mainMenu) {

    connection.query("SELECT employee_info.id, employee_info.first_name, employee_info.last_name, role_info.title, role_info.salary, department_info.department_name AS department_info, manager_alias.first_name AS manager FROM employee_info LEFT JOIN employee_info AS manager_alias ON manager_alias.id = employee_info.manager_id JOIN role_info ON employee_info.role_id = role_info.id JOIN department_info ON role_info.department_id = department_info.id ORDER BY employee_info.id ", (err, res) => {

        if (err) throw err;

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

        if (err) throw err;

        console.log("\n\n");
        console.table(res);
        console.log("\n\n");


        mainMenu();

    })

};


function allEmployeeRoles(connection, mainMenu) {

    connection.query("SELECT * FROM role_info", (err, res) => {

        if (err) throw err;

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

    connection.query()

    mainMenu();
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