USE employee_db
SELECT * FROM department;

SELECT role.id as id, title, name as department, salary
FROM role
LEFT JOIN department
ON role.department_id=department_id;

SELECT employee.id as id, employee.first_name, employee.last_name,title,
name as department, salary,
CONCAT(managerTable.first_name, '',managerTable.last_name) as manager
FROM employee
LEFT JOIN role on employee.role_id = role.id
LEFT JOIN department ON role.department_id=department_id
LEFT JOIN employee as managerTable
ON employee.manager_id=managerTable.id;

SELECT * FROM EMPLOYEE;
