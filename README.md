# Employee Database SQL tool
GitHub page: https://github.com/tjansson-ui/employeeSQLdb
video demo at https://drive.google.com/file/d/1984FVWboRGcL-LQirCxuW5CQu-wjtJlj/view?usp=drive_link

This is a Command Line Employee Database tool.
Initiate the program with passing the following script in the command line 
```
node default.js
```

You should be greeted with the following Navigation menu
![Navigator](Assets/Navigator.png)

Clicking a menu option should either display the relevant information or prompt for user inputs. 
![Roles Tables](Assets/RolesTable.png)


## Troubleshooting
Please ensure you have installed all the relevant node packages by running
```
npm i
```
You should also ensure your mysql is active. Verify this with your mysql script.
An example may look like 'mysql -u root -p"

feel free to use the seed information 
```
SOURCE ./db/schema.sql
SOURCE ./db/seeds.sql
```


## Additional Info
The table is set up with the following key information
![Key associations](Assets/12-sql-homework-demo-01.png)