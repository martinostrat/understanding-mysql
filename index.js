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

    const sql = "select * from customers where id between 2 and 5";

    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result)
    });
});

