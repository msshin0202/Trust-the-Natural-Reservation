<?php
/**
 * Returns the list of cars.
 */

require '../connect.php';
    
$rooms = [];
$sql = "SELECT pnumber, fname, lname FROM customers";
$con = connect();

if ($result = mysqli_query($con, $sql)) {
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $rooms[$cr]['pnumber'] = $row['pnumber'];
    $rooms[$cr]['fname']   = $row['fname'];
    $rooms[$cr]['lname']   = $row['lname'];
    $cr++;
  }
    
  echo json_encode(['data'=>$rooms]);
}
else
{
  http_response_code(404);
}
close($con);