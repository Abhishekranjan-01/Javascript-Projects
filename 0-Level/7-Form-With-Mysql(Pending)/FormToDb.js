// Import necessary modules
import mysql from 'mysql2/promise';

// MySQL connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: "mysql@79911",
  database: 'forms',
};


function receivingDataFromForms(firstName,lastName,age){

  // Function to connect to MySQL and perform a sample query
  async function connectToMySQL() {
    // Create a connection pool
    const pool = mysql.createPool(dbConfig);

    try 
    {
      // Get a connection from the pool
      const connection = await pool.getConnection();

      // Perform a sample query
    
      const [rows, fields] = await connection.execute(`INSERT INTO form_1 (FIRST_NAME,LAST_NAME,AGE) VALULES (${firstName},${lastName},${age})`);

      // Log the results
      console.log('Query result:', rows);

      // Release the connection back to the pool
      connection.release();
    } 
    catch (error)
    {
    console.error('Error connecting to MySQL:', error);
    }
    finally
    {
      // Close the pool to free up resources
      pool.end();
    }
  }

  // Call the function to connect to MySQL
  connectToMySQL();
}

export{receivingDataFromForms};



















// // var mysql = require('mysql');
// import {mysql} from ""


// //Code For Connection
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mysql@79911"
// });

// try{
//   console.log("11");
//   con.connect((err)=> {
//     if (err) {
//       throw err;
//     }

    
//     console.log("1");
//     console.log("Connected!");
//   });
// console.log("111");
// }

// catch(err)
// {
//   console.log("2");
//   console.log(err);
// }
// finally{
//   // console.log("3");

//   //     con.end();
//   //     console.log("something");
    
 
//   // console.log("4");
//   // console.log("Disconnected !");
//   // console.log("5");
// }


// //Code For Inserting Record


// con.connect(function(err) {
//   // if (err) throw err;
//   console.log("Connected 2nd");
//   // var sql = "INSERT INTO Form_1 (FIRST_NAME, LAST_NAME) VALUES ('STEVE', 'SMITH')";
//   var sql = "show databases";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//     console.log(result);
//   });
// });
