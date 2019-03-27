<?php

require './connect.php';

$room = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

//$id = $_POST['id'];

$sql = "SELECT roomNumber, numberOfBeds, cleanliness, price FROM Room ";
$cr = 0;
if ($result = mysqli_query($con, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $room[$cr]['roomNumber'] = $row['roomNumber'];
        // if (isset($row['reservationNumber'])) {
        //     $room[$cr]['status']  = "Occupied";
        // } else {
        //     $room[$cr]['status'] = "Available";
        // }

        $room[$cr]['numberOfBeds']   = $row['numberOfBeds'];
        $room[$cr]['cleanliness']   = $row['cleanliness'];
        $room[$cr]['price']   = $row['price'];
        $cr++;
    }
}

echo json_encode($room);
close($con);
