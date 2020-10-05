USE companydata_db;

-- department_info (insert into)

INSERT INTO department_info (department_name)
VALUES 
("Web Development"),
("Sales"),
("Accounting"),
("Legal"),
("Information Technology"),
("Human Resources");

SELECT * FROM department_info;


-- role_info (insert into)

INSERT INTO role_info (title, salary, department_id)
VALUES 
("Web Development Manager", 175000.00, 1),
("Sales Department Manager", 200000.00, 2),
("Accounting Department Manager", 200000.00, 3),
("Legal Team Manager", 200000.00, 4),
("Information Technology Manager", 150000.00, 5),
("Human Resources Manager", 100000.00, 6),
("Web Developer", 85000.00, 1),
("Sales Representative", 70000.00, 2),
("Accountant", 80000.00, 3),
("Lawyer", 100000.00, 4),
("IT Specialist", 70000.00, 5),
("HR Generalist", 70000.00, 6);


SELECT * FROM role_info;

-- Employee Managers (insert into)

INSERT INTO employee_info (first_name, last_name, role_id)
VALUES 
("Lucille", "Luvsthenet", 1),
("Tony", "Revenue", 2),
("Johnny", "Numbers", 3),
("Daisuke", "SueYou", 4),
("Harry", "Helpdesk", 5),
("Patricia", "Peepleperson", 6);


-- Employees With Managers

INSERT INTO employee_info (first_name, last_name, role_id, manager_id)
VALUES 
("Carl", "Codesmith", 7, 1),
("Jennifer", "JavaScript", 7, 1),
("Vincent", "VeeEscode", 7, 1),
("Matthew", "Markup", 7, 1),
("Sharon", "Shmoneymaker", 8, 2),
("Christopher", "Cashflow", 8, 2),
("Jim", "Green", 8, 2),
("Bethany", "BalanceDebooks", 9, 3),
("Tara", "Texasinstrument", 9, 3),
("Darryl", "Divide", 9, 3),
("Carlene", "Counsel", 10, 4),
("Angel", "Advisor", 10, 4),
("Patty", "Procurator", 10, 4),
("Nevin", "Knowstech", 11, 5),
("Ivan", "Install", 11, 5),
("Desi", "Didjureboot", 11, 5),
("Robert", "Relations", 12, 6),
("Peggy", "Payroll", 12, 6),
("Timothy", "Training", 12, 6);


SELECT * FROM employee_info;

