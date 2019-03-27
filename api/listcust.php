<?php

require './connect.php';

$params   = $_POST['params'];
$customers = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);



$sql = "SELECT firstName, lastName FROM Customer WHERE phoneNumber IN (SELECT phoneNumber FROM Reservation_Made_By WHERE checkInDate = {$params}) ";
$cr = 0;
// if ($result = mysqli_query($con, $sql)) {
//     while ($row = mysqli_fetch_assoc($result)) {
//         $room[$cr]['roomNumber'] = $row['roomNumber'];
//         // if (isset($row['reservationNumber'])) {
//         //     $room[$cr]['status']  = "Occupied";
//         // } else {
//         //     $room[$cr]['status'] = "Available";
//         // }
//
//         $room[$cr]['numberOfBeds']   = $row['numberOfBeds'];
//         $room[$cr]['cleanliness']   = $row['cleanliness'];
//         $room[$cr]['price']   = $row['price'];
//         $cr++;
//     }
// }
echo $params
//echo json_encode($customers);
close($con);
