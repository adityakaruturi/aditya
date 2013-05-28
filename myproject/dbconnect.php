<?php 
 
$hostname = "localhost";

$username = "root";
$password = "";
 

$dbase = "universe"; 

$link = mysql_connect($hostname, $username, $password);
 

if (!$link) {
 
 die('server connection error'); 

}
 

$db_selected = @ mysql_select_db($dbase, $link);

if (!$db_selected) 
{
  die('database error');
}

?>