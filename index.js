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

    const sql = "alter table customers add column id int auto_increment primary key";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows);
    });
});

