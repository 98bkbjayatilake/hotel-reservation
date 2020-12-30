<?php
$con=mysqli_connect("localhost","root","","hotel");
mysqli_select_db($con,"hotel");
include "registration.html";
$name=$_POST['uname'];
$email=$_POST['email'];
$pass=$_POST['pass1'];
$pass2=$_POST['pass2'];
$sql="select * from register where name='$name'";
$res=mysqli_query($con,$sql);
$num=mysqli_num_rows($res);
if($num==1){
echo "<script>alert('this user name already exists');window.location='registration.html'</script>";
}
else{
$string="insert into register(name,email,password,confirmed_password) values('$name','$email','$pass','$pass2')";
$result=mysqli_query($con,$string);
echo "<p><script>alert('you have successfully registerd');window.location='registration.html'</script>;</p>";
}
mysqli_close($con);
?>
