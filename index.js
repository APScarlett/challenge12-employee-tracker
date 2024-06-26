const inquirer = require("inquirer")
const { printTable } = require("console-table-printer");
const mysql2 = require("mysql2");
//information needed to connect to the db
const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Desudesu11",
    database:"employee_db",
    port: 3306
})

db.connect(()=>{
    menu()
})
//viw all departments, all roles, all employees, adds a department, a role, an employee and update an employee role
function menu() {
    // used to ask the user a set of questions
    inquirer.prompt([
    {
        type: "list",
        message: "Please select an option!",
        name: "option",
        choices: ["view all departments","view all roles","view all employees","add a department","add a role","add an employee","update an employee role"]

    }
])
    .then(response=>{
        if (response.option ==="view all employees"){
            viewAllEmployees()
        }
        else if (response.option === "view all roles"){
            viewAllRoles()
        }
        else if(response.option === "add an employee"){
            addEmployee()
        }
        else if (response.option === "update an employee role"){
            updateEmployee()
        }
        else if(response.option === "view all departments"){
            viewAllDepartments()
        }
        else if (response.option === "add a department") {
            addDepartment()
        }
        else{
            addRole()
        }
    })
}
//function to update employee titles
function updateEmployee() {
    db.query(`SELECT id as value, title as name from role`, (err, roleData)=>{
        db.query(`SELECT id as value, CONCAT(first_name,'', last_name) as name from employee`,(err, employeeData)=>{
            inquirer.prompt([
                
        
        
            {
                type:"list",
                message:"What is new title for the employee?",
                name: "role_id",
                choices: roleData
            },
            {
                type:"list",
                message:"Which employee do you want to update his or her new title?",
                name: "employee_id",
                choices: employeeData
            }
        ])
        .then(response =>{

            db.query(`UPDATE employee SET role_id=${response.role_id} WHERE id=${response.employee_id} `, (err) => {

                viewAllEmployees()
            })
        })
    })
})
}
//function that adds employees
function addEmployee(){
    db.query(`SELECT id as value, title as name from role`, (err, roleData)  => {

        db.query(`Select id as value, CONCAT(first_name, '', last_name) as name from employee where manager_id is null`, (err, managerData) =>{
            inquirer.prompt([{
                type:"input",
                message:"What is your first name?",
                name:"first_name"
            },
            {
                type:"input",
                message:"What is your last name?",
                name:"last_name"
            },
            {
                type:"list",
                message:"what is your title?",
                name:"title",
                choices: roleData
            },
            {
                type:"list",
                message:"Who is your manager?",
                name:"manager_id",
                choices: managerData
            }
            ])
            .then(response => {
                db.query(`insert into employee(first_name,last_name,role_id, manager_id)values ("${response.first_name}","${response.last_name}","${response.title}","${response.manager_id}")`, (err) => {

                    viewAllEmployees()
                })
            })
        })
    })
}





function viewAllRoles(){
    db.query(`SELECT role.id as id, title, name as department, salary
    FROM role
    LEFT JOIN department
    ON role.department_id=department.id;`, (err,data) =>{
        printTable(data)
        menu()
    })
}

//view all employee function
function viewAllEmployees() {
    db.query(`SELECT employee.id as id, employee.first_name, employee.last_name, title, 
    name as department, salary, 
    CONCAT(managerTable.first_name, ' ',managerTable.last_name) as manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id=department.id
    LEFT JOIN employee as managerTable 
    ON employee.manager_id=managerTable.id;
   `, (err, data) => {

        printTable(data)
        menu()
    })
}

function viewAllDepartments(){
    db.query(`SELECT * FROM department;`,(err, data) => {
         
            printTable(data)
            menu()
        })
}

function addDepartment() {

    db.query(`SELECT * FROM department`, (err, roleData) => 
            {
            inquirer.prompt([{
                type: "input",
                message: "Name of new department",
                name: "department"
            }
            ])
            .then(response => {



                db.query(`INSERT INTO department(name)
                VALUES ("${response.department}")`, (err) => {

                    viewAllDepartments() 
                })

            })

        })
           
    
}

function addRole() {

    db.query(`SELECT tile from role`, (err, roleData) => 
            {
            inquirer.prompt([{
                type: "input",
                message: "Name of new role",
                name: "title"
            },
            {
                type: "input",
                message: "Please input department ID ",
                name: "department_id",
               
            },
            {
                type: "input",
                message: "Salary amount",
                name: "salary"
            }
            ])
            .then(response => {



                db.query(`INSERT INTO role(title, department_id, salary)VALUES ("${response.title}","${response.department_id}","${response.salary}")`, (err) => {

                    viewAllRoles() 
                })

            })

        })
           
    
}