const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"Liam&Luna201417$4",
    host:"localhost",
    port:5432,
    database:"perntodo"
});

//export the db

module.export = pool;