<?php
require './connect.php';

$popularRooms = [];
$con = connect();
$POPULAR = 2;

$cr = 0;

$poularRoomsQuery = "SELECT r.roomNumber, r.numberOfBeds, r.price FROM Room r
                      WHERE r.roomNumber IN (SELECT rmb.roomNumber FROM Reservation_Made_By rmb
                        GROUP BY rmb.roomNumber HAVING COUNT(*) > $POPULAR)";

if ($result = mysqli_query($con, $poularRoomsQuery)) {
  while($queryResult = mysqli_fetch_assoc($result)) {
    $popularRooms[$cr]['roomNumber'] = $queryResult['roomNumber'];
    $popularRooms[$cr]['numberOfBeds'] = $queryResult['numberOfBeds'];
    $popularRooms[$cr]['price'] = $queryResult['price'];
    $cr++;
  }
}

echo json_encode(['data'=>$popularRooms]);
close($con);


 ?>
