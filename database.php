<?php
//vamos a realizar una conexion a base de datos
   $connection =  mysqli_connect(
    'localhost',
    'root',
    '1234',
    'tasks-app'
  ); 
 if($connection){
echo"Database is connected";
} 

/* $servername = "localhost";
$database = "tasks-app";
$username = "root";
$password = "1234";

$connection =  mysqli_connect($servername,$database,$username,$password);
 */




?>