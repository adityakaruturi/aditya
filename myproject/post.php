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
			<li class="current_page_item"><a href="#">Home</a></li>
			<li><a href="Universe.php">Universe</a></li>
			<li><a href="Planets.php">Planets</a></li>
			<li><a href="Gallery.php">Gallery</a></li>
			<li><a href="Contact.php">Contact</li>
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

$title=$_POST["Title"];
$description=$_POST["Description"];
$keywords=$_POST["Keywords"];

$query = "insert into posts (title,description,tags)
 values('$title','$description','$keywords')";
$link = mysql_query($query);

if (!$link) {
 die('query error');
} 
else{
header("location:home.php?err=3");
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
