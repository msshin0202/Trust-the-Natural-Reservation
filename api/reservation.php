<?php

require './connect.php';

$reservation = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$params = $_POST['params'];
$checkIn = $params['date'];
$fname = $params['firstName'];
$lname = $params['lastName'];
$phonenum = $params['phoneNumber'];
$rid = mt_rand(1000, 10000);

$sql = "INSERT INTO Customer VALUES ('{$phoneNumber}', '{$firstName}', '{$lastName}', NULL, NULL)";
if ($result = mysqli_query($con, $sql)) {
  $sql = "INSERT INTO Reservation_Made_By VALUES ({$reservationNumber}, '{$phoneNumber}', {$checkInDate}, NULL)";
  if ($result = mysqli_query($con, $sql)) {
    $reservation['reservationNumber'] = $reservationNumber;
  } else {
    $reservation['reservationNumber'] = 10001;
  }
} else {
  $reservation['reservationNumber'] = 10001;
}

echo json_encode(['data'=>$reservation]);
close($con);
