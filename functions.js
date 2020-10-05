
// require inquirer for prompts..

const inquirer = require("inquirer");

// require console.table for table layout
// replace when running console.log

require("console.table");


// *************
// add functions
// *************


function addNewDepartment(connection, mainMenu) {

    connection.query()

    mainMenu();

};


function addNewEmployee(connection, mainMenu) {

    connection.query()

    mainMenu();

};


function addNewEmployeeRole(connection, mainMenu) {

    connection.query()

    mainMenu();

};



// **************
// view functions
// **************


function allEmployees(connection, mainMenu) {

    connection.query()

    mainMenu();

};


function allEmployeesByDepartment(connection, mainMenu) {

    connection.query()

    mainMenu();

};


function allDepartments(connection, mainMenu) {

    connection.query()

    mainMenu();

};


function allEmployeeRoles(connection, mainMenu) {

    connection.query()

    mainMenu();

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