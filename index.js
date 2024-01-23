const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: "mydb"
});

con.connect(err => {
    if (err) throw err;
    console.log('Connected');

    const sql = "drop table customers";

    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result)
    });
});

