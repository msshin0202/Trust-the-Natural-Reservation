<?php

require '../connect.php';

const RESULT_SUCCESS_KEY = "success";
const RESULT_MESSAGE_KEY = "message";
const POST_USERNAME_KEY = "username";
const POST_PASSWORD_KEY = "password";
const SESSION_USER_KEY = "user";

function login($email, $password)
{
    $conn;
    $loginResult = array();
    try {
        $conn = connect();
        $escapedEmail = $conn->real_escape_string($email);
        $sql = "SELECT e.email, e.password FROM Employee e WHERE e.email LIKE '{$escapedEmail}'";
        $mysqliResult = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($mysqliResult);
        if ($row == null) {
            $loginResult[RESULT_SUCCESS_KEY] = false;
            $loginResult[RESULT_MESSAGE_KEY] = "Employee information does not exist. Please sign up.";
        } elseif ($password == $row[POST_PASSWORD_KEY]) {
            session_start();
            $_SESSION[SESSION_USER_KEY] = $email;
            $loginResult[RESULT_SUCCESS_KEY] = true;
            $loginResult[RESULT_MESSAGE_KEY] = "Login Successful!";
        } else {
            $loginResult[RESULT_SUCCESS_KEY] = false;
            $loginResult[RESULT_MESSAGE_KEY] = "Employee has failed to log in. Please try again.";
        }
    } catch (Exception $e) {
        $loginResult[RESULT_SUCCESS_KEY] = false;
        $loginResult[RESULT_MESSAGE_KEY] = $e->getMessage();
    } finally {
        close($conn);
    }

    return $loginResult;
}

$_POST = json_decode(file_get_contents('php://input'), true);
$result = array();
$result[RESULT_SUCCESS_KEY] = false;
$result[RESULT_MESSAGE_KEY] = "Employee has failed to log in. Please try again.";

if (isset($_POST) && !empty($_POST)) {
    $result = login($_POST["username"], $_POST["password"]);
}

echo json_encode($result);
