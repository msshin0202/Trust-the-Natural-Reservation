<?php

require './connect.php';


$customers = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);



$checkIn = new DateTime($_POST['date']);
$result = $checkIn->format('Y-m-d');

// echo json_encode($checkIn->format('Y-m-d'));
// echo $result;



$sql = "SELECT c.firstName, c.lastName, rmb.roomNumber, rmb.checkOutDate FROM Customer c, Reservation_Made_By rmb WHERE c.phoneNumber = rmb.phoneNumber AND rmb.checkInDate = '{$result}'";
$cr = 0;
if ($result = mysqli_query($con, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $customers[$cr]['firstName'] = $row['firstName'];
        $customers[$cr]['lastName'] = $row['lastName'];
        $customers[$cr]['checkOutDate'] = $row['checkOutDate'];
        $customers[$cr]['roomNumber'] = $row['roomNumber'];

        $cr++;
    }
}


echo json_encode($customers);
close($con);
