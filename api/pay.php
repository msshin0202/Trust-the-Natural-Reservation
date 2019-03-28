<?php
require './connect.php';

const COOKIE_SESSION_ID_KEY = "sessionID";

$con = connect();

session_id($_COOKIE[COOKIE_SESSION_ID_KEY]);
session_start();

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
  $insertTransactionQuery = "INSERT INTO Transaction VALUES({$tid}, '{$paymentType}', {$dateOfTransaction})";
  $insertPaysQuery = "INSERT INTO Pays VALUES({$bid}, {$tid}, {$amount})";
  $checkBillQuery = "SELECT bid, amount FROM Bill b WHERE b.bid = {$bid}";
  $checkMaxBillAmountQuery = "SELECT b.amount FROM Bill b WHERE b.bid = {$bid} AND {$amount} > b.amount";
  $totalAmountPaidQuery = "SELECT SUM(p.amount) AS totalAmount FROM Pays p WHERE p.bid = {$bid} GROUP BY p.bid";

  $checkBillResult = mysqli_query($con, $checkBillQuery);
  $checkBillNumResult = mysqli_num_rows($checkBillResult);
  $checkBill = mysqli_fetch_assoc($checkBillResult);

  $maxBillResult = mysqli_query($con, $checkMaxBillAmountQuery);
  $maxBillNumOfResult = mysqli_num_rows($maxBillResult);
  $maxBillAmount = mysqli_fetch_assoc($maxBillResult);

  $totalAmountPaidResult = mysqli_query($con, $totalAmountPaidQuery);
  $totalAmountPaid = mysqli_fetch_assoc($totalAmountPaidResult);

$remainingBill = $checkBill["amount"] - $totalAmountPaid["totalAmount"];

  $submitResult[RESULT_SUCCESS_KEY] = false;
  if ($checkBillNumResult === NULL) {
    $submitResult[RESULT_MESSAGE_KEY] = "Please enter a bill id!";
  } else if($checkBillNumResult === 0) {
    $submitResult[RESULT_MESSAGE_KEY] = "{$bid} is not a valid bill id!";
  } else if ($maxBillNumOfResult === NULL) {
    $submitResult[RESULT_MESSAGE_KEY] = "Please enter an amount you wish to pay for the bill!";
  } else {
    if ($totalAmountPaid["totalAmount"] >= $checkBill["amount"]) {
      $submitResult[RESULT_MESSAGE_KEY] = "bill {$bid} has already been paid in full!";
      //need to handle case where the amount enetered will add to more than max
    } else if ($amount > $checkBill["amount"] || $amount > $remainingBill) {
      $submitResult[RESULT_MESSAGE_KEY] = "\${$amount} is more than the bill amount! Please enter an amount of \${$remainingBill} or less.";
    } else if (mysqli_query($con, $insertTransactionQuery) && mysqli_query($con, $insertPaysQuery)) {
        $submitResult[RESULT_SUCCESS_KEY] = true;
        $submitResult[RESULT_MESSAGE_KEY] = "Payment has been processed!";
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
