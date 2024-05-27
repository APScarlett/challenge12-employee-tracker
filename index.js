const inquirer = require("inquirer")
const { printTable } = require("console-table-printer")
const mysql2 = require("mysql2")
//information needed to connect to the db
const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Desudesu11",
    database:"employee_db",
    port: 3306
})

db.connect(()=>{
    menubar()
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
    })
}