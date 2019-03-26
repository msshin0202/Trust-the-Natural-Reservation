<?php

require './connect.php';

$rooms = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$date = new DateTime($_POST['date']);
$cr = 0;
$sql = "SELECT roomNumber, reservationNumber, numberOfBeds, cleanliness, price FROM Room";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $rooms[$cr]['roomNumber'] = $row['roomNumber'];
    $rooms[$cr]['numberOfBeds']  = $row['numberOfBeds'];
    $rooms[$cr]['price']   = $row['price'];
    $cr++;
  }
}
$sql = "SELECT r.roomNumber, r.numberOfBeds, r.cleanliness, r.price, rv.checkOutDate FROM Room r, Stays s, Reservation_Made_By rv WHERE rv.reservationNumber = r.reservationNumber AND r.roomNumber = s.roomNumber";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $checkOutDate = new DateTime($row['checkOutDate']);
    if ($checkOutDate < $date) {
      $rooms[$cr]['roomNumber'] = $row['roomNumber'];
      $rooms[$cr]['numberOfBeds']  = $row['numberOfBeds'];
      $rooms[$cr]['price']   = $row['price'];
      $cr++;
    }
  }
}

echo json_encode(['data'=>$rooms]);
close($con);
