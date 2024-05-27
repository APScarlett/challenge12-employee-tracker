USE employee_db
SELECT * FROM department;

SELECT role.id as id, title, name as department, salary
FROM role
LEFT JOIN department
ON role.department_id=department_id;


