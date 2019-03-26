<?php

require '../connect.php';

$rooms = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$checkInDate = new DateTime($_POST['date']['checkInDate']);
$checkOutDate = new DateTime($_POST['date']['checkOutDate']);
$cr = 0;

$sql = "SELECT rsi.roomNumber, rsi.numberOfBeds, rsi.cleanliness, rsi.price, rmb.checkInDate, rmb.checkOutDate FROM Room_Stays_In rsi LEFT JOIN Reservation_made_by rmb ON rsi.reservationNumber = rmb.reservationNumber";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $r_checkInDate = new DateTime($row['checkInDate']);
    $r_checkOutDate = new DateTime($row['checkOutDate']);
    if ($r_checkOutDate < $checkInDate || $r_checkInDate > $checkOutDate) {
      $rooms[$cr]['roomNumber'] = $row['roomNumber'];
      $rooms[$cr]['numberOfBeds']  = $row['numberOfBeds'];
      $rooms[$cr]['price']   = $row['price'];
      $cr++;
    }
  }
}

echo json_encode(['data'=>$rooms]);
close($con);