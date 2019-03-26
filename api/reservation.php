<?php

require '../connect.php';

$reservation = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$params   = $_POST['params'];
$checkIn  = new DateTime($params['date'].checkInDate);
$checkOut = new DateTime($params['date'].checkOutDate);

$sql = "SELECT phoneNumber FROM Customer WHERE email='jane.doe@gmail.com'";

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

$sql = "INSERT INTO Reservation_made_by VALUES ({$rid}, '{$phonenum}', '{$checkIn->format('Y-m-d')}', '{$checkOut->format('Y-m-d')}')";

if ($result = mysqli_query($con, $sql)) {
  $reservation['rid'] = $rid;
} else {
  $reservation['rid'] = 10001;
}

echo json_encode(['data'=>$reservation]);
close($con);