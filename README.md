# Employee Content Management System‏‏‎
‎‎![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen) 
  

  ---
  
  <p>&nbsp;<p>
    

## Description 

<p>&nbsp;<p>

<strong><em>What is this project? Why did you make this project? How did you make this project?</strong></em>

<p>&nbsp;<p>

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. This command line application is useful for managing company's employees of all sizes using  using `Node,js`, `inquirer npm`, and `MySQL`. A user can view their entire employee roster, view all departments, view all roles, add roles, add departments, add employees, and update existing employee roles.

<p>&nbsp;<p>


View the application usage demo here =>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏[`DEMO`](https://drive.google.com/drive/folders/1kfNFaUwkdvxojVr8zGOiAcjgzGF-zaW8)


<p>&nbsp;<p>


---

<p>&nbsp;<p>


## Table of Contents: 

<p>&nbsp;<p>

* [Installation](#installation)
* [Usage](#usage)
* [Schema](#schema)
* [License](#license)
* [Credits](#credits)
* [Questions](#questions)

<p>&nbsp;<p>

---


<p>&nbsp;<p>


## Installation


<p>&nbsp;<p>


<strong><em>What are the steps required to install this project?</strong></em>


<p>&nbsp;<p>


To make use of this application, you must first download the repo, and then run `npm install` within the terminal to begin the install of `inquirer``MySQL`, & `console.table` dependencies. These required dependencies are already provided within the included `package.json` file. 

<p>&nbsp;<p>



<p>&nbsp;<p>


---


<p>&nbsp;<p>


## Usage


<p>&nbsp;<p>


<strong><em>Instructions and examples for usage:</strong></em>

<p>&nbsp;<p>

You can begin using this command line content management system by running `node app.js` within the terminal. A welcome screen along with menu items for actions is presented. The given code is already attached to an SQL file database with multiple tables that will allow a user to interact with, update, and add employees it.

<p>&nbsp;<p>




View a video overview on usage here:

[![IMAGE](assets/video_screengrab.png)](https://drive.google.com/file/d/1ZZDiMGKPhI6_6DlrZGxzadJAeplmerOB/view?usp=sharing) 


<p>&nbsp;<p>


---


<p>&nbsp;<p>


<p align= "center"><img src="assets/interface_tall.png" alt="interface" /></p>

<p>&nbsp;</p>


---

<p>&nbsp;<p>


## Schema

<p>&nbsp;<p>


![IMAGE](assets/schema.png)

<p>&nbsp;</p>

**MySQL Database Layout**:

<p>&nbsp;</p>

* **Department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **Role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **Employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. 


<p>&nbsp;</p>

---


<p>&nbsp;<p>


## License


<p>&nbsp;<p>


This project is covered under the MIT license. 


<p>&nbsp;<p>


---


<p>&nbsp;<p>


## Credits


<p>&nbsp;<p>


<strong><em>Third party assets:</strong></em>


<p>&nbsp;<p>

`Node.js` =>‏‏‎ ‎ ‏‏‎ ‎[An asynchronous event-driven runtime built on Chrome's V8 JavaScript engine.](https://nodejs.org/en/)


<p>&nbsp;‏‏‎‏‏‎ ‎<strong>+</strong></p>


`MySQL` =>‏‏‎ ‎ ‏‏‎ ‎[The world's most popular open source database ](hhttps://www.mysql.com/)


<p>&nbsp;‏‏‎‏‏‎ ‎<strong>+</strong></p>


`MySQL npm` =>‏‏‎ ‎ ‏‏‎ ‎[A pure Node.js JavaScript Client implementing the MySQL protocol.](https://www.npmjs.com/package/mysql)


<p>&nbsp;‏‏‎‏‏‎ ‎<strong>+</strong></p>


`console.table` =>‏‏‎ ‎ ‏‏‎ ‎[Adds console.table method within node for convenience.](https://www.npmjs.com/package/console.table)


<p>&nbsp;‏‏‎‏‏‎ ‎<strong>+</strong></p>


`dotenv npm` =>‏‏‎ ‎ ‏‏‎ ‎[Shhhhhh!](https://www.npmjs.com/package/dotenv)


<p>&nbsp;<p>



---


<p>&nbsp;<p>



## Questions?


<p>&nbsp;<p>


Shoot me an e-mail! => jonathan@jonathanschimpf.com

<p>&nbsp;<p>


Check out more of my work here on =>
[GitHub](http://github.com/jonathanschimpf)

<p>&nbsp;<p>



