
<!DOCTYPE html>

<head>

<meta name="keywords" content="universe" />
<meta name="description" content="" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

<title>Our Universe</title>
<link href="style.css" rel="stylesheet" type="text/css" media="screen" />
</head>

<body>

<div id="menu-wrapper">
	<div id="menu">
			<ul>
			<li class="current_page_item"><a href="#">Home</a></li>
			<li><a href="Universe.php">Universe</a></li>
			<li><a href="Planets.php">Planets</a></li>
			<li><a href="Gallery.php">Gallery</a></li>
			<li><a href="contact.php">Contact</a></li>
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
	
	
	<!-- end #header -->
	<div id="page">
	<div id="page-bgtop">
	<div id="page-bgbtm">
		<div id="sidebar">
		<ul>
			<a href="logout.php"><li> Logout </li></a>
					</ul>
					<br><br>
				</div>
				<div id="content">
					<div class="post">
				<h2 class="title"><a href="#">POST</a></h2>
					   <div style="clear: both;">&nbsp;</div>
						<div class="entry">
						<form name="tag" method="post" action="post.php">
<?php

$err = $_REQUEST['err'];

if($err==3)
{
echo "<tr><td colspan=2 align=center><font color=green>Your post has been successfully submitted !!</font></td></tr><tr></tr>";
echo "<br>";
}

?>

<br>

<table width="450px">
 <td valign="top">
  <label for="Title:">Title</label>
 </td>
<tr>
 <td valign="top">
  <input  type="text" name="Title" maxlength="80" size="30" placeholder="Title" required/>
 </td>
</tr>
 <td valign="top">
 <label for="Description:">Description</label>
 </td>
 <tr>
 <td valign="top">
  <textarea  name="Description"  cols="60" rows="20" placeholder="Description" required/></textarea>
</tr>
<td valign="top">
  <label for="Keywords:">Keywords</label>
 </td>
<tr>
 <td valign="top">
  <input  type="text" name="Keywords" maxlength="80" size="30" placeholder="Keywords" required/>
 </td>
</tr>
<tr>
 <td colspan="2"><br>
  <input type="submit" value="Submit" onclick="success">  
 
 </td>
</tr>
</table>
</form>
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
