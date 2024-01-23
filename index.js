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

    const sql = "create table customers (name varchar(255), address varchar(255))";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows);
    });
});

