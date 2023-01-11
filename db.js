const Pool = require("pg").Pool;
var fs = require('fs');

var sql = fs.readFileSync('database.sql').toString();

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "test"
})

pool.connect().then((data, e) => {
    if(data){
        console.log("Connectedd ")
    }else{
        console.log("errror ")
    }
});

// pool.query(sql).then((data, e) => {
//     if(data){
//         console.log("Table Created.. ")
//     }else{
//         console.log("errror ")
//     }
// });

console.log("Database")
module.exports = pool;