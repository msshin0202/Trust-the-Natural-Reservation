<?php
require './connect.php';

$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$tid = mt_rand(1,10000);
$bid = $_POST['bid'];
$amount = $_POST['amount'];
$phoneNumber = $_POST['phoneNumber'];
$isCash = $_POST['isCash'];
$dateOfTransaction = date("Ymd");


if ($isCash) {
  $paymentType = 'Cash';
} else {
  $paymentType = 'Credit Card';
}
$sql1 = "INSERT INTO Transaction VALUES({$tid}, '{$paymentType}', {$dateOfTransaction})";
$sql2 = "INSERT INTO Pays VALUES({$bid}, {$tid}, {$amount})";
if ($result1 = mysqli_query($con, $sql1)) {
  if($result2 = mysqli_query($con, $sql2)){

  } else {

  }
} else {
}

echo json_encode(['data'=>$result1, 'data2'=>$result2]);
close($con);

 ?>

