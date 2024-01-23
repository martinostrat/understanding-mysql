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

    const sql = "select * from customers order by address";

    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result)
    });
});

