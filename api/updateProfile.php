<?php

require './connect.php';

const COOKIE_SESSION_ID_KEY = "sessionID";
const SESSION_USER_TYPE_KEY = "userType";
const SESSION_USER_KEY = "user";
const RESULT_SUCCESS_KEY = "success";
const RESULT_MESSAGE_KEY = "message";
const RESULT_CONTENT_KEY = "content";
const RESULT_USER_TYPE = "userType";

$conn = connect();

session_id($_COOKIE[COOKIE_SESSION_ID_KEY]);
session_start();

$email = $_SESSION[SESSION_USER_KEY];
$userType = $_SESSION[SESSION_USER_TYPE_KEY];

$_POST = json_decode(file_get_contents('php://input'), true);
$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$password = $_POST["password"];
if ($userType == "customer") {
    $phoneNumber = $_POST["phoneNumber"];
    $escapedEmail = $conn->real_escape_string($email);

    $checkPhoneNumSql = "SELECT * FROM Customer c WHERE c.phoneNumber LIKE '{$phoneNumber}'";
    $mysqliResult = mysqli_query($conn, $checkPhoneNumSql);
    $row = mysqli_fetch_assoc($mysqliResult);
    if ($row != NULL && $escapedEmail != $row["email"]) {
        $updateResult[RESULT_SUCCESS_KEY] = false;
        $updateResult[RESULT_MESSAGE_KEY] = "Existing Customer Phone Number. Please Try Again";
    } else {
        $updateSql = "UPDATE Customer SET phoneNumber = '{$phoneNumber}', firstName = '{$firstName}', lastName = '{$lastName}', password = '{$password}' WHERE email LIKE '{$escapedEmail}'";
        if (($conn->query($updateSql) === TRUE)) {
            $updateResult[RESULT_SUCCESS_KEY] = true;
            $updateResult[RESULT_MESSAGE_KEY] = "Update is Successful!";
        } else if (strlen($phoneNumber) !== 10) {
            $updateResult[RESULT_SUCCESS_KEY] = false;
            $updateResult[RESULT_MESSAGE_KEY] = "Please Enter a Valid Phone Number!";
        } else {
            $updateResult[RESULT_SUCCESS_KEY] = false;
            $updateResult[RESULT_MESSAGE_KEY] = "Update is Unsuccessful!";
        }
    }
} else if ($userType == "employee") {
    $gender = $_POST["gender"];
    $address = $_POST["address"];
    $role = $_POST["role"];

    $escapedEmail = $conn->real_escape_string($email);

    $updateSql = "UPDATE Employee SET gender = {$gender}, firstName = '{$firstName}', lastName = '{$lastName}', password = '{$password}', role = '{$role}', address =  '{$address}' WHERE email LIKE '{$escapedEmail}'";
    if (($conn->query($updateSql) === TRUE)) {
        $updateResult[RESULT_SUCCESS_KEY] = true;
        $updateResult[RESULT_MESSAGE_KEY] = "Update is Successful!";
    } else {
        $updateResult[RESULT_SUCCESS_KEY] = false;
        $updateResult[RESULT_MESSAGE_KEY] = "Update is Unsuccessful!";
    }
}

close($conn);
echo json_encode($updateResult);
