INSERT INTO departments (name) VALUES
("Operations"),
("Research"),
("Marketing"),
("Sales"),
("IT"),
("Finance"),
("HR");

INSERT INTO roles (title, salary, department_id) VALUES
("Production Associate", 55550.00, 1),
("Scientist", 64980.00, 2),
("Research Supervisor", 75000.00, 2),
("Sales Manager", 92000.00, 4),
("Sales Associate", 44680.00, 4),
("Tech Support Analyst", 63800.00, 5),
("HR Business Partner", 68880.00, 7),
("VP of Customer Outreach", 195880.00, 4),
("Chief Finance Officer", 275640.00, 6),
("Marketing Director", 152010.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
("Bob", "Igler", 9, null),
("Beff", "Jezos", 7, 1),
("Rhapsody", "Blue", 2, 1),
("Frank", "Enstein", 1, 3),
("Nicole", "Tesle", 5, 2),
("Thomas", "Foolery", 4, 5),
("Space", "Ghost", 8, 3),
("Minion", "Despic", 1, 4),
("Chester", "Cheetoh", 1, 4),
("Capin", "Krunz", 1, 4),
("Coun", "Tchockula", 1, 4),
("North", "Carolina", 7, 2);