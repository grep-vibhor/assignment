# assignment
Richpanel Assignment

Assuming DB is running on localhost, Schema Name is `node`

`node` Schema contains a table called `employee` which has some records. You can use data.sql file to import the data.

Application reads DB configs from env variables `DB\_HOST`, `DB\_USER`, `DB\_PASSOWRD`, `DB\_SCHEMA`

```
export DB\_HOST=localhost
export DB\_USER=root
export DB\_PASSOWRD=root
export DB\_SCHEMA=node
npm i
node index.js

```


It'll start a local node server on port 9090. 

curl localhost:9090/health  -> Health Check URL
curl localhost:9090/employees  ->  URL  to fetch all employees
curl localhost:9090/employee/:id -> URL to fetch an employee with id


