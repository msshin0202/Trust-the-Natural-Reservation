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
if ($userType == "customer") {
    $escapedEmail = $conn->real_escape_string($email);
    $sql = "SELECT * FROM Customer c WHERE c.email LIKE '{$escapedEmail}'";
    $mysqliResult = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($mysqliResult);
    if ($row == null) {
        $getResult[RESULT_SUCCESS_KEY] = false;
        $getResult[RESULT_MESSAGE_KEY] = "Non-existent Customer.";
    } else {
        $getResult[RESULT_SUCCESS_KEY] = true;
        $getResult[RESULT_MESSAGE_KEY] = "Got Customer Profile";
        $getResult[RESULT_CONTENT_KEY] = $row;
        $getResult[RESULT_USER_TYPE] = $userType;
    }
    echo json_encode($getResult);
} else if ($userType == "employee") {
    $escapedEmail = $conn->real_escape_string($email);
    $sql = "SELECT * FROM Employee e WHERE e.email LIKE '{$escapedEmail}'";
    $mysqliResult = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($mysqliResult);
    if ($row == null) {
        $getResult[RESULT_SUCCESS_KEY] = false;
        $getResult[RESULT_MESSAGE_KEY] = "Non-existent Employee.";
    } else {
        $getResult[RESULT_SUCCESS_KEY] = true;
        $getResult[RESULT_MESSAGE_KEY] = "Got Employee Profile";
        $getResult[RESULT_CONTENT_KEY] = $row;
        $getResult[RESULT_USER_TYPE] = $userType;
    }
    echo json_encode($getResult);
} else {
    $getResult[RESULT_SUCCESS_KEY] = false;
    $getResult[RESULT_MESSAGE_KEY] = "Non-existent Profile.";
    echo json_encode($getResult);
}

close($conn);

?>