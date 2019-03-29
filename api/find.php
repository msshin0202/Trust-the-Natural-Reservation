<?php

require './connect.php';

$net = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$reservationNumber = $_POST['reservationNumber'];

if (empty($reservationNumber)) {
  $net['success'] = false;
  $net['message'] = "failed..";
} else {
  // check if reservation with the reservation number exists
  $sql = "SELECT * FROM Reservation_Made_By WHERE reservationNumber={$reservationNumber}";
  if ($result = mysqli_query($con, $sql)) {
    if (mysqli_num_rows($result) == 0) {
      $net['success'] = false;
      $net['message'] = "failed..";
    } else {
      $net['success'] = true;
      $net['message'] = "success!";
    }
  }
}

echo json_encode($net);
close($con);