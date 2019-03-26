<?php

require './connect.php';

$reservation = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$params = $_POST['params'];
$checkIn = new DateTime($params['date']);
$fname = $params['fname'];
$lname = $params['lname'];
$phonenum = $params['phonenum'];
$rid = mt_rand(1000, 10000);

if ($result = mysqli_query($con, $sql)) {
  $sql = "INSERT INTO Reservation_made_by VALUES ({$rid}, '{$phonenum}', '{$checkIn->format('Y-m-d')}', NULL)";
  if ($result = mysqli_query($con, $sql)) {
    $reservation['rid'] = $rid;
  } else {
    $reservation['rid'] = 10001;
  }
} else {
  $reservation['rid'] = 10001;
}

echo json_encode(['data'=>$reservation]);
close($con);
