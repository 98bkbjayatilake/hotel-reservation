<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="checka.css">
</head>
<body>
	
	<table class="styled-table">
		<thead>
		<tr>
			<th>Room No</th>
			<th>Room Type</th>
			<th>Rate</th>
			<th>Book Now</th>
		</tr>
	</thead>
<?php
	include "avalability.html";
	$con=mysqli_connect("localhost","root","","hotel");
	$db=mysqli_select_db($con,"hotel");
	if(isset($_POST['search']))
	{
		$checkin=$_POST['checkin'];
		$query="SELECT Room_no,Room_type,Rate FROM room WHERE check_out<='$checkin'";
		$query_run=mysqli_query($con,$query);
		while($row=mysqli_fetch_array($query_run))
		{
			?>
			<tbody>
			<tr>
				<td><?php echo $row['Room_no'];  ?></td>
				<td><?php echo $row['Room_type'];  ?></td>
				<td><?php echo $row['Rate'];  ?></td>
				<td><a href="booking.html">Book Now</a></td>
			</tr>
		</tbody>

			<?php
		}
	}
	
	

?>
</table>

</body>
</html>
