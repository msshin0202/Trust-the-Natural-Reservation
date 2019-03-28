<?php
require './connect.php';

$con = connect();
$CLEAN = 1;
$DIRTY = 0;

$_POST = json_decode(file_get_contents('php://input'), true);
$roomNumber = $_POST['roomNumber'];

$cr = 0;


$updateCleanQuery = "UPDATE Room r SET r.cleanliness = $CLEAN WHERE r.roomNumber = {$roomNumber}";
$newDirtyListQuery = "SELECT r.roomNumber, r.numberOfBeds, r.cleanliness FROM Room r WHERE r.cleanliness = $DIRTY";
$unassignEmployeeQuery = "DELETE FROM Employee_Assigned_to_Room WHERE roomNumber = {$roomNumber}";

mysqli_query($con, $updateCleanQuery);
mysqli_query($con, $unassignEmployeeQuery);
if ($result = mysqli_query($con, $newDirtyListQuery) ) {
  while($queryResult = mysqli_fetch_assoc($result)) {
    $dirtyRooms[$cr]['roomNumber'] = $queryResult['roomNumber'];
    $dirtyRooms[$cr]['numberOfBeds'] = $queryResult['numberOfBeds'];
    $dirtyRooms[$cr]['cleanliness'] = $queryResult['cleanliness'];
    $cr++;
  }
}

echo json_encode(['data'=>$dirtyRooms]);
close($con);


?>
