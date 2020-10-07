
// requirements for application.

// requirements for dotenv security feature

require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");

// calling requiring the functions page, making the connection.

var functions = require("./functions.js");


// connection to MySQL database

var connection = mysql.createConnection({

  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASS,
  database: "companydata_db"

});

connection.connect(function (err) {

  if (err) throw err;

  // console.log("Connected as ID# " + connection.threadId + "\n");

  console.log("\n")
  console.log("\n")
  console.log("---------------------------------------------------")
  console.log("\nWelcome To Your Employee Content Management System!\n")
  console.log("---------------------------------------------------")
  console.log("\n")
  console.log("\n")

  mainMenu();

});


// main menu options for the application:
// the user can choose from a variety of content management options.

function mainMenu() {

  inquirer.prompt({

    type: "list",
    message: "What would you like to do?\n\n",
    name: "selection",
    choices:

      [
        //commented out means incomplete as of now.

        "View All Of The Employees",
        // "View All Employees By Department",
        // "View All Employees By Manager",
        "View All Of The Departments",
        "View All Of The Employee Roles",
        "Add A New Department",
        "Add A New Employee Role",
        "Add A New Employee",
        "Update An Employee's Role",
        // "Update An Employee's Manager",
        // "Remove An Existing Employee",
        // "Remove An Existing Department",
        // "Remove An Existing Employee Role",
        "Exit The Application"

      ]

  })

    // once an option is selected, we switch to the function..
    // .. that drives that selected option. each case below calls on a function.

    .then(function (response) {

      switch (response.selection) {

        // view 

        // tested & working
        case "View All Of The Employees":
          functions.allEmployees(connection, mainMenu);
          break;


        // case "View All Employees By Department":
        //   functions.allEmployeesByDepartment(connection, mainMenu);
        //   break;


        // case "View All Employees By Manager":
        //   functions.allEmployeesByManager(connection, mainMenu);
        //   break;

        // tested & working
        case "View All Of The Departments":
          functions.allDepartments(connection, mainMenu);
          break;

        // tested & working
        case "View All Of The Employee Roles":
          functions.allEmployeeRoles(connection, mainMenu);
          break;


        // add 

        // tested & working
        case "Add A New Department":
          functions.addNewDepartment(connection, mainMenu);
          break;

        //tested & working
        case "Add A New Employee":
          functions.addNewEmployee(connection, mainMenu);
          break;

        // tested & working
        case "Add A New Employee Role":
          functions.addNewEmployeeRole(connection, mainMenu);
          break;



        // update 
        //tested & working
        case "Update An Employee's Role":
          functions.updateEmployeeRole(connection, mainMenu);
          break;


        // case "Update An Employee's Manager":
        //   functions.updateEmployeeManager(connection, mainMenu);
        //   break;


        // remove 

        // case "Remove An Existing Employee":
        //   functions.removeEmployee(connection, mainMenu);
        //   break;


        // case "Remove An Existing Department":
        //   functions.removeDepartment(connection, mainMenu);
        //   break;

        //not working
        // case "Remove An Existing Employee Role":
        //   functions.removeEmployeeRole(connection, mainMenu);
        //   break;


        // exit

        case "Exit The Application":
          console.log("\n");
          console.log("---------");
          console.log("\nGood Bye!\n");
          console.log("---------");
          console.log("\n");
          connection.end();
          break;

      }

    })

};