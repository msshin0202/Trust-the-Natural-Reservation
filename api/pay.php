<?php
require './connect.php';

$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

const RESULT_SUCCESS_KEY = "success";
const RESULT_MESSAGE_KEY = "message";

$tid = mt_rand(1,10000);
$bid = $_POST['bid'];
$amount = $_POST['amount'];
$phoneNumber = $_POST['phoneNumber'];
$isCash = $_POST['isCash'];
$dateOfTransaction = date("Ymd");
$submitResult = array();


if ($isCash) {
  $paymentType = 'Cash';
} else {
  $paymentType = 'Credit Card';
}

try {
  $sql1 = "INSERT INTO Transaction VALUES({$tid}, '{$paymentType}', {$dateOfTransaction})";
  $sql2 = "INSERT INTO Pays VALUES({$bid}, {$tid}, {$amount})";
  if (mysqli_query($con, $sql1)) {
    $submitResult[RESULT_SUCCESS_KEY] = true;
    $submitResult[RESULT_MESSAGE_KEY] = "Payment has been processed!";
    if (!mysqli_query($con, $sql2)) {
      $submitResult[RESULT_SUCCESS_KEY] = false;
      $submitResult[RESULT_MESSAGE_KEY] = "Oops! {$bid} is not a valid bill id";
    }
  } else {
    $submitResult[RESULT_SUCCESS_KEY] = false;
    $submitResult[RESULT_MESSAGE_KEY] = "Oops! Something went wrong!";
  }
} catch (Exception $e){
  $submitResult[RESULT_SUCCESS_KEY] = false;
  $submitResult[RESULT_MESSAGE_KEY] = "$e";
} finally {
  close($con);
}


echo json_encode($submitResult);

 ?>
