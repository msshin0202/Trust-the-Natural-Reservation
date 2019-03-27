<?php

require './connect.php';

$reservation = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$params   = $_POST['params'];
$roomNumber = $params['roomNumber'];
$checkIn  = new DateTime($params['date']['checkInDate']);
$checkOut = new DateTime($params['date']['checkOutDate']);

// $sql = "SELECT phoneNumber FROM Customer WHERE email='jane.doe@gmail.com'";

// get unique reservation number
do {
  $rid = mt_rand(1000, 10000);
  $sql = "SELECT reservationNumber FROM Reservation_Made_By WHERE reservationNumber={$rid}";
  if ($result = mysqli_query($con, $sql)) {
    if (mysqli_num_rows($result) == 0) {
      break;
    }
  }
}
while (true);

$phonenum = 1010283210;

$sql = "INSERT INTO Reservation_Made_By VALUES ({$rid}, {$roomNumber}, '{$phonenum}', '{$checkIn->format('Y-m-d')}', '{$checkOut->format('Y-m-d')}')";

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($result = mysqli_query($con, $sql)) {
  $reservation['rid'] = $rid;
  // TODO: comeback to change this behavior!
  $sql = "UPDATE Room SET reservationNumber={$rid} WHERE roomNumber={$roomNumber}";
} else {
  $reservation['rid'] = 10001;
}

echo json_encode(['data'=>$reservation]);
close($con);