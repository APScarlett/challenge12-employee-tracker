USE employee_db
INSERT INTO department(name)
VALUES
        ('Sales'),
      ('Engineering');
      ('Finance');
      ('Legal');
      


INSERT INTO role(
    title,department_id,salary)
VALUES
    ('Sales lead', 1,100000),
    ('Sales Person', 1,80000),
    ('Lead Engineer', 2,150000);
    ('Software Engineer', 2, 120000);
    ('Account Manager', 3, 160000);
    ('Accountant', 3, 125000);
    ('Legal Team Lead', 4, 250000);
    ('Lawyer', 4, 190000);

INSERT INTO employee(first_name, last_name,role_id)
VALUES ('John','Doe',1),
    ('Mike','Chan',2);
    ('Ashley','Rodriquez',3);
    ('kevin','Tupik',4);
    ('Kunal','Singh',5);
    ('Malia','Brown',6);
    ('Sarah','Lourd' ,7);
    ('Tom','Allen',8);


    UPDATE employee set manager_id=1 where id=2;
    UPDATE employee set manager_id=3 where id=4;
    UPDATE employee set manager_id=5 where id=6;
    UPDATE employee set manager_id=7 where id=8;
    --  DO THE REST OF THE EMPLOYEE NAMES and Engineeringre add legal and finance