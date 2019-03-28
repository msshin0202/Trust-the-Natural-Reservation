<?php

require './connect.php';


$customers = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);


$string = new DateTime($_POST['date']['checkInDate']);
$checkIn  = $string->format('Y-m-d');



$sql = "SELECT c.firstName, c.lastName, rmb.checkOutDate FROM Customer c, Reservation_Made_By rmb WHERE c.phoneNumber = rmb.phoneNumber AND rmb.checkInDate = {$checkIn}";
$cr = 0;
if ($result = mysqli_query($con, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $customers[$cr]['firstName'] = $row['firstName'];
        $customers[$cr]['lastName'] = $row['lastName'];
        $checkOutDate = new DateTime($row['checkOutDate']);
        $customers[$cr]['checkOutDate'] = $checkOutDate->format('Y-m-d');

        $cr++;
    }
}


echo json_encode($customers);
close($con);
