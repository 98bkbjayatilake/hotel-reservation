<?php

$con=mysqli_connect("localhost","root","","hotel");
mysqli_select_db($con,"hotel");
session_start();
    $name    = $_POST['uname2'];
    $password = $_POST['passu'];
    $result = mysqli_query($mysqli, "select name,password from register
        where name='$name' and password='$password'");
    $user_matched = mysqli_num_rows($result);
    if ($user_matched > 0) {
        header("location:index.html");
    } else {
        header("location:error.html");
    }
?>