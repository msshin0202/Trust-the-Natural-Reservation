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
  $insertTransaction = "INSERT INTO Transaction VALUES({$tid}, '{$paymentType}', {$dateOfTransaction})";
  $insertPays = "INSERT INTO Pays VALUES({$bid}, {$tid}, {$amount})";
  $checkBill = "SELECT bid FROM Bill b WHERE b.bid = {$bid}";
  $checkMaxBillAmount = "SELECT b.amount FROM Bill b WHERE {$amount} > b.amount";

  $checkBillResult = mysqli_query($con, $checkBill);
  $checkBillNumResult = mysqli_num_rows($checkBillResult);
  $maxBillResult = mysqli_query($con, $checkMaxBillAmount);
  $maxBillNumOfResult = mysqli_num_rows($maxBillResult);
  if (mysqli_query($con, $insertTransaction) && mysqli_query($con, $insertPays)) {
    if ($maxBillNumOfResult !== 0) {
      $submitResult[RESULT_SUCCESS_KEY] = false;
      $maxBillAmount = mysqli_fetch_assoc($maxBillResult);
      $submitResult[RESULT_MESSAGE_KEY] = "{$amount} is more than the bill amount! Please enter an amount of {$maxBillAmount["amount"]} or less.";
    } else {
      $submitResult[RESULT_SUCCESS_KEY] = true;
      $submitResult[RESULT_MESSAGE_KEY] = "Payment has been processed!";
    }
  } else {
    $submitResult[RESULT_SUCCESS_KEY] = false;
    if ($checkBillNumResult === NULL) {
      $submitResult[RESULT_MESSAGE_KEY] = "Please enter a bill id!";
    } else if($checkBillNumResult === 0) {
      $submitResult[RESULT_MESSAGE_KEY] = "{$bid} is not a valid bill id!";
    } else if ($maxBillNumOfResult === NULL) {
      $submitResult[RESULT_MESSAGE_KEY] = "Please enter an amount you wish to pay for the bill!";
    }
  }
} catch (Exception $e){
  $submitResult[RESULT_SUCCESS_KEY] = false;
  $submitResult[RESULT_MESSAGE_KEY] = "$e";
} finally {
  close($con);
}


echo json_encode($submitResult);

 ?>
