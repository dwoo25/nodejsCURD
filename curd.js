var mysql = require('mysql');
var pool =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'bat'
});

var createTable = "CREATE TABLE driver_status(id int(11) NOT NULL AUTO_INCREMENT,"+
    "driverName varchar(20) DEFAULT NULL,"+
    "customer  varchar(20) DEFAULT NULL,"+
    "pickup  varchar(20) DEFAULT NULL,"+
    "drop  varchar(20) DEFAULT NULL,"+
    "cost  varchar(20) DEFAULT NULL,"+
    "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8";

var insertRecord = 'INSERT INTO driver_status(driverName,customer,pickup,drop,cost) VALUE(?,?,?,?,?)';

var readTable = 'SELECT * FROM driver_status';


pool.getConnection(function(err, connection){
  //Create a table called driver_status
  connection.query(createTable,  function(err){
    if(err) throw err;
    else {
        console.log('Table created!');
    }
  });

  //Incsert a record.
  connection.query(insertRecord,['Dewo','paijo','jl.godean km 33','janti','300.000'], function(err,res){
    if(err) throw err;
    else {
        console.log('A new order has been added.');
    }
  });

  //Read table.
  connection.query(readTable, function(err, rows){
    if(err) throw err;
    else {
        console.log(rows);
    }
  });

  connection.release();//release the connection
});
