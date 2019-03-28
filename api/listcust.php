<?php

require './connect.php';

$params   = $_POST['date'];
$checkIn  = new DateTime($params);
$customers = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);



$sql = "SELECT firstName, lastName FROM Customer WHERE phoneNumber IN (SELECT phoneNumber FROM Reservation_Made_By WHERE checkInDate = {$checkIn})";
$cr = 0;
if ($result = mysqli_query($con, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $customers[$cr]['firstName'] = $row['firstName'];
        $customers[$cr]['lastName'] = $row['lastName'];

        $cr++;
    }
}

echo json_encode($customers);
close($con);
