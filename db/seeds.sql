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
    ('Accoount Manager', 3, 125000);
    ('');
    ('');
    ('');

INSERT INTO employee(first_name, last_name,role_id)
VALUES ('John','Doe',1),
    ('Mike','Chan',2);


    UPDATE employee set manager_id=1 where id=2;
    --  DO THE REST OF THE EMPLOYEE NAMES and Engineeringre add legal and finance