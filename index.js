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

    const sql = "update customers set name = 'Uus Peeter' where id = 4";

    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result)
    });
});

