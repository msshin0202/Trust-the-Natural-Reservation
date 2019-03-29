<?php

require './connect.php';

const COOKIE_SESSION_ID_KEY = "sessionID";
const SESSION_USER_TYPE_KEY = "userType";
const SESSION_USER_KEY = "user";
const RESULT_SUCCESS_KEY = "success";
const RESULT_MESSAGE_KEY = "message";
const RESULT_CONTENT_KEY = "content";
const RESULT_USER_TYPE = "userType";

$con = connect();

$reservation = [];

session_id($_COOKIE[COOKIE_SESSION_ID_KEY]);
session_start();

$email = $_SESSION[SESSION_USER_KEY];
$phoneNum = $_SESSION['phoneNumber'];

$_POST = json_decode(file_get_contents('php://input'), true);

$params   = $_POST['params'];
$roomNumber = $params['roomNumber'];
$checkIn  = new DateTime($params['date']['checkInDate']);
$checkOut = new DateTime($params['date']['checkOutDate']);

// TODO: either get user info from the current session, or verify their email
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

$escapedEmail = $con->real_escape_string($email);
$sql1 = "SELECT c.phoneNumber FROM Customer c WHERE c.email LIKE '{$escapedEmail}'";
$mysqliResult1 = mysqli_query($con, $sql1);
$row = mysqli_fetch_assoc($mysqliResult1);
$phoneNum = $row["phoneNumber"];

$sql = "INSERT INTO Reservation_Made_By VALUES ({$rid}, {$roomNumber}, '{$phoneNum}', '{$checkIn->format('Y-m-d')}', '{$checkOut->format('Y-m-d')}')";

if ($result = mysqli_query($con, $sql)) {
  $reservation['rid'] = $rid;
} else {
  $reservation['rid'] = -1;
}

echo json_encode(['data'=>$reservation]);
close($con);