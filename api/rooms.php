<?php

require '../connect.php';

$rooms = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$date = new DateTime($_POST['date']);
$cr = 0;
$sql = "SELECT roomnum, rid, nobeds, cleanliness, price FROM vacancy";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $rooms[$cr]['roomnum'] = $row['roomnum'];
    $rooms[$cr]['nobeds']  = $row['nobeds'];
    $rooms[$cr]['price']   = $row['price'];
    $cr++;
  }
}
$sql = "SELECT v.roomnum, v.nobeds, v.cleanliness, v.price, r.checkOutDate FROM vacancy v, stays s, reservations r WHERE r.rid = v.rid AND v.roomnum = s.roomnum";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $checkOutDate = new DateTime($row['checkOutDate']);
    if ($checkOutDate < $date) {
      $rooms[$cr]['roomnum'] = $row['roomnum'];
      $rooms[$cr]['nobeds']  = $row['nobeds'];
      $rooms[$cr]['price']   = $row['price'];
      $cr++;
    }
  }
}

echo json_encode(['data'=>$rooms]);
close($con);