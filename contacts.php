<?php
$conn=mysqli_connect("localhost","root","","hotel");
if($con){
echo "connected successfully";}
$db=mysqli_select_db($con,"hotel");
include "contact.html";
$name=$_POST['fname'];
$cont=$_POST['phone'];
$country=$_POST['country'];
$em=$_POST['email'];
$inq=$_POST['comments'];
$sql="insert into contacts (name,contact_number,country,email,inquiries) values('$name',$cont,'$country','$em','$inq');";
mysqli_query($conn,$sql);
echo $res;
?>
