<!DOCTYPE html>

<head>

<meta name="keywords" content="universe" />
<meta name="description" content="" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

<title>Our Universe</title>
<link href="style_nosidebar.css" rel="stylesheet" type="text/css" media="screen" />
</head>

<body>

<div id="menu-wrapper">
	<div id="menu">
			<ul>
			<li><a href="index.php">Home</a></li>
			<li><a href="Universe.php">Universe</a></li>
			<li><a href="Planets.php">Planets</a></li>
			<li><a href="Gallery.php">Gallery</a></li>
			<li class="current_page_item"><a href="#">Contact</a></li>
		</ul>
		
	</div> 
</div>

<div id="banner"><a href="#"><img src="images/img02.jpg" width="1000" height="300" alt="" /></a></div>

<div id="header-wrapper">
	<div id="header">
	
<div id="logo">
</div>
	
	</div>
</div>


<div id="wrapper"> 

	<div id="page">
		<div id="page-bgtop">
			<div id="page-bgbtm">
				<div id="content">
					<div class="post">	
	
<?php

include("dbconnect.php");

$fname=$_POST["Firstname"];
$lname=$_POST["Lastname"];
$address=$_POST["Address"];
$town=$_POST["Town"];
$postcode=$_POST["Postcode"];
$email=$_POST["E-mail"];
$password=$_POST["Password"];
//$encr=md5($password);

$query = "insert into users (fname,lname,address,town,postcode,email,password)
 values('$fname','$lname','$address','$town','$postcode','$email','$password')";
$link = mysql_query($query);

if (!$link) {
 die('query error');
} 
else{
// header("location:index.html");
echo("<p>You have been successfully registered. </p>");
}
?>		
									
	</div>
	</div>
		
	<div style="clear: both;">&nbsp;</div>
	</div>
		<div style="clear: both;">&nbsp;</div>
	</div>
	</div>
	</div>
</div>
<div id="footer">
	<p>Media|Corporate|Access|Careers</p>
</div>
</body>
</html>
