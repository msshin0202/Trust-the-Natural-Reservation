<?php
require './connect.php';

$dirtyRooms = [];
$con = connect();
$DIRTY = 0;

$cr = 0;

$sql = "SELECT r.roomNumber, r.numberOfBeds, e.firstName, e.lastName FROM Room r, Employee e, Employee_Assigned_to_Room a
WHERE r.cleanliness = $DIRTY AND a.roomNumber = r.roomNumber AND e.employeeID = a.employeeID";

if ($result = mysqli_query($con, $sql)) {
  while($queryResult = mysqli_fetch_assoc($result)) {
    $dirtyRooms[$cr]['roomNumber'] = $queryResult['roomNumber'];
    $dirtyRooms[$cr]['numberOfBeds'] = $queryResult['numberOfBeds'];
    $dirtyRooms[$cr]['firstName'] = $queryResult['firstName'];
    $dirtyRooms[$cr]['lastName'] = $queryResult['lastName'];
    $cr++;
  }
}

echo json_encode(['data'=>$dirtyRooms]);
close($con);


 ?>
