<?php
$conn=mysqli_connect("localhost","root","","hotel");
$db=mysqli_select_db($conn,"hotel");
include "booking.html";
$name=$_POST['uname'];
$add=$_POST['address'];
$add2=$_POST['address2'];
$cont=$_POST['phone'];
$em=$_POST['email'];
$arrival=$_POST['arival'];
$departure=$_POST['depature'];
$adults=$_POST['adults'];
$kids=$_POST['kids'];
$night=$_POST['nights'];
$view=$_POST['view'];
$room=$_POST['room'];
$pay=$_POST['payment'];
$sql="insert into booking (full_name,street_address,street_address2,phone_number,email,arrive_date,departure_date,number_of_adults,number_of_kids,number_of_nights,packages,room_packages,payment_methods) values('$name','$add','$add2',$cont,'$em','$arrival','$departure',$adults,$kids,$night,'$view','$room','$pay');";
mysqli_query($conn,$sql);
?>