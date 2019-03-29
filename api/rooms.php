<?php

require './connect.php';

$rooms = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$checkInDate = new DateTime($_POST['date']['checkInDate']);
$checkOutDate = new DateTime($_POST['date']['checkOutDate']);
$cr = 0;


$sql = "SELECT Room.roomNumber, Room.numberOfBeds, Room.cleanliness, Room.price FROM Room WHERE Room.roomNumber NOT IN (SELECT DISTINCT rmb.roomNumber FROM Reservation_Made_By rmb WHERE checkOutDate >= '{$checkInDate->format('Y-m-d')}' AND checkInDate <= '{$checkOutDate->format('Y-m-d')}')";

if ($result = mysqli_query($con, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $rooms[$cr]['roomNumber'] = $row['roomNumber'];
        $rooms[$cr]['numberOfBeds'] = $row['numberOfBeds'];
        $rooms[$cr]['price'] = $row['price'];
        $cr++;
    }
}

echo json_encode(['data'=>$rooms]);
close($con);
