<?php

require './connect.php';


$customers = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);
$params   = $_POST['date'];
$checkIn  = new DateTime($params);


$sql = "SELECT c.firstName, c.lastName FROM Customer c WHERE c.phoneNumber IN (SELECT rmb.phoneNumber FROM Reservation_Made_By rmb WHERE rmb.checkInDate = {$checkIn})";
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
