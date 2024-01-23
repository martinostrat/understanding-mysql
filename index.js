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

    const sql = "insert into customers (name, address) values ('Telia AS', 'Rüütli 3')";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows);
    });
});

