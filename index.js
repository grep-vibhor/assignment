const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());


var mysqlConnection = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_SCHEMA,
multipleStatements: true
});


mysqlConnection.connect((err)=> {
if(!err)
console.log('Connection Established Successfully');
else{
console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
process.exit(1);}
});


//Creating /health GET Route for health check
app.get('/health' , (req, res) => {
res.send('Hello from App');
} );





//Creating /employees GET Router to fetch all the employee details from the mysql
app.get('/employees' , (req, res) => {
mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );




//Creating /employees:id GET Router to fetch a particular employee with ID

app.get('/employee/:id' , (req, res) => {
mysqlConnection.query('SELECT * FROM employees WHERE id = ?',[req.params.id], (err, rows, fields) => {
if (!err)
res.send(rows);
else
console.log(err);
})
} );






const port = process.env.PORT || 9090;
app.listen(port, () => console.log(`Listening on port ${port}..`));
