<?php
session_start();
?>

<html>
<title>Our Universe</title>

<?php

include("dbconnect.php");

$login=$_POST['username'];
$pwd=$_POST['password'];


$pwdmd5 = md5($pwd);
$qry = "Select * from users ".
        " where email='$login' and password='$pwd'";
     
$result = mysql_query($qry);
     
if(!$result || mysql_num_rows($result) <= 0){
header( "Location:index.php?err=1" ) ;
}
else{
$_SESSION['usr']=$login;
echo <script language=Javascript> Congratulations!!! You are logged in</script>




</html>
