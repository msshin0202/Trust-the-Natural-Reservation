<?php
require './connect.php';

$room = [];
$con = connect();
//
// $_POST = json_decode(file_get_contents('php://input'), true);
//
// $id = $_POST['id'];
//
// $sql = "SELECT roomnum, rid, nobeds, cleanliness, price FROM room WHERE roomnum = {$id}";
// if ($result = mysqli_query($con, $sql)) {
//   $row = mysqli_fetch_assoc($result);
//   $room['roomnum'] = $row['roomnum'];
//   $room['nobeds']  = $row['nobeds'];
//   $room['price']   = $row['price'];
// }
//
echo json_encode(['data'=>$room]);
close($con);

 ?>
