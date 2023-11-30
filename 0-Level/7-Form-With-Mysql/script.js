
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql@79911"
});

try{
  console.log("11");
  con.connect((err)=> {
    if (err) {
      throw err;
    }

    
    console.log("1");
    console.log("Connected!");
  });
console.log("111");
}

catch(err)
{
  console.log("2");
  console.log(err);
}
finally{
  console.log("3");

      con.end();
      console.log("something");
    
 
  console.log("4");
  console.log("Disconnected !");
  console.log("5");
}