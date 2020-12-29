<?php
$con=mysqli_connect("localhost","root","","hotel");
mysqli_select_db($con,"hotel");
include "registration.html";
$name=$_POST['uname'];
$email=$_POST['email'];
$pass=$_POST['pass1'];
$pass2=$_POST['pass2'];
$sql="insert into register (name,email,password,confirmed_password) values('$name','$email','$pass','$pass2');";
mysqli_query($con,$sql);
?>
