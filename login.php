<?php
$con=mysqli_connect("localhost","root","","hotel");
mysqli_select_db($con,"hotel");
session_start();
    $name    = $_POST['uname2'];
    $password = $_POST['passu'];
$sql="select * from register where name='$name' && password='$password'";
    $result = mysqli_query($con,$sql);
   $num=mysqli_num_rows($result);
if($num==1){
echo "<script>alert('welcome, successfully logged in!');window.location='index.html'</script>";
        header("location:index.html");
 } else {
        header("location:error.html");
    }
?>