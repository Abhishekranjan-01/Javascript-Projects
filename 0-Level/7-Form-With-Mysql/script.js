var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: " root@localhost",
  password: "mysql@79911"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});