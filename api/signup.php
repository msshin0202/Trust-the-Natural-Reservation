<?php

require './connect.php';

const RESULT_SUCCESS_KEY = "success";
const RESULT_MESSAGE_KEY = "message";
const RESULT_EMAIL = "email";
const POST_USERNAME_KEY = "username";
const POST_PASSWORD_KEY = "password";
const SESSION_USER_KEY = "user";
const COOKIE_SESSION_ID_KEY = "sessionID";
const SESSION_USER_TYPE_KEY = "userType";

function employeeSignup($firstName, $lastName, $email, $password, $passwordConfirm, $gender, $role, $address)
{
    $conn;
    $signupResult = array();
    try {
        $conn = connect();
        $escapedFirstName = $conn->real_escape_string($firstName);
        $escapedLastName = $conn->real_escape_string($lastName);
        $escapedEmail = $conn->real_escape_string($email);
        $escapedPassword = $conn->real_escape_string($password);
        $escapedPasswordConfirm = $conn->real_escape_string($passwordConfirm);
        $escapedAddress = $conn->real_escape_string($address);
        $sql = "SELECT e.email FROM Employee e WHERE e.email LIKE '{$escapedEmail}'";
        $mysqliResult = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($mysqliResult);
        if ($row != null) {
            $signupResult[RESULT_SUCCESS_KEY] = false;
            $signupResult[RESULT_MESSAGE_KEY] = "Employee with given email already exists. Please try again.";    
        } elseif ($escapedPassword != $escapedPasswordConfirm) {
            $signupResult[RESULT_SUCCESS_KEY] = false;
            $signupResult[RESULT_MESSAGE_KEY] = "Passwords do not match. Please try again.";    
        } else {
            $sqlInsert = "INSERT INTO Employee (firstName, lastName, gender, role, address, email, password)
            VALUES ('{$escapedFirstName}', '{$escapedLastName}', {$gender}, '{$role}', 
            '{$escapedAddress}', '{$escapedEmail}','{$escapedPassword}');"; 
            if ($conn->query($sqlInsert) === TRUE) {
                $signupResult[RESULT_SUCCESS_KEY] = true;
                $signupResult[RESULT_MESSAGE_KEY] = "Signup is Successful!";  
                $signupResult[RESULT_EMAIL] = $escapedEmail;
                session_start();
                $_SESSION[SESSION_USER_TYPE_KEY] = 'employee';
                $_SESSION[SESSION_USER_KEY] = $escapedEmail;
            } else {
                $signupResult[RESULT_SUCCESS_KEY] = false;
                $signupResult[RESULT_MESSAGE_KEY] = "Error occurred during signup. Please try again.";    
            }
        }
    } catch (Exception $e) {
        $signupResult[RESULT_SUCCESS_KEY] = false;
        $signupResult[RESULT_MESSAGE_KEY] = $e->getMessage();
    } finally {
        close($conn);
    }
    return $signupResult;
}

function customerSignup($firstName, $lastName, $email, $phoneNumber, $password, $passwordConfirm)
{
    $conn;
    $signupResult = array();
    try {
        $conn = connect();
        $escapedFirstName = $conn->real_escape_string($firstName);
        $escapedLastName = $conn->real_escape_string($lastName);
        $escapedEmail = $conn->real_escape_string($email);
        $escapedPhoneNumber = $conn->real_escape_string($phoneNumber);
        $escapedPassword = $conn->real_escape_string($password);
        $escapedPasswordConfirm = $conn->real_escape_string($passwordConfirm);
        $sql = "SELECT c.phoneNumber, c.email FROM Customer c WHERE c.email LIKE '{$escapedEmail}' 
        OR c.phoneNumber LIKE '{$escapedPhoneNumber}'";
        $mysqliResult = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($mysqliResult);
        if ($row != null) {
            $signupResult[RESULT_SUCCESS_KEY] = false;
            $signupResult[RESULT_MESSAGE_KEY] = "Customer with given information already exists. Please try again.";    
        } elseif ($escapedPassword != $escapedPasswordConfirm) {
            $signupResult[RESULT_SUCCESS_KEY] = false;
            $signupResult[RESULT_MESSAGE_KEY] = "Passwords do not match. Please try again.";    
        } else {
            $sqlInsert = "INSERT INTO Customer (phoneNumber, firstName, lastName, email, password)
            VALUES ('{$escapedPhoneNumber}', '{$escapedFirstName}', '{$escapedLastName}', 
            '{$escapedEmail}', '{$escapedPassword}');";
            if ($conn->query($sqlInsert) === TRUE) {
                $signupResult[RESULT_SUCCESS_KEY] = true;
                $signupResult[RESULT_MESSAGE_KEY] = "Signup is Successful!";  
                $signupResult[RESULT_EMAIL] = $escapedEmail;
                session_start();
                $_SESSION[SESSION_USER_TYPE_KEY] = 'customer';
                $_SESSION[SESSION_USER_KEY] = $escapedEmail;
            } else {
                $signupResult[RESULT_SUCCESS_KEY] = false;
                $signupResult[RESULT_MESSAGE_KEY] = "Error occurred during signup. Please try again.";    
            }
        }
    } catch (Exception $e) {
        $signupResult[RESULT_SUCCESS_KEY] = false;
        $signupResult[RESULT_MESSAGE_KEY] = $e->getMessage();
    } finally {
        close($conn);
    }
    return $signupResult;
}

$_POST = json_decode(file_get_contents('php://input'), true);
$result = array();
$result[RESULT_SUCCESS_KEY] = false;
$result[RESULT_MESSAGE_KEY] = "Signup Failed. Please try again.";

if (isset($_POST) && !empty($_POST)) {
    if ($_POST["signupKind"] == "employee") {
        $result = employeeSignup($_POST["firstName"], $_POST["lastName"], $_POST["email"],
        $_POST["password"], $_POST["passwordConfirm"], $_POST["gender"], $_POST["role"], 
        $_POST["address"]);
    } else if ($_POST["signupKind"] == "customer") {
        $result = customerSignup($_POST["firstName"], $_POST["lastName"], $_POST["email"],
        $_POST["phoneNumber"], $_POST["password"], $_POST["passwordConfirm"]);
    }
}

setcookie(COOKIE_SESSION_ID_KEY, session_id(), 0, '/');
echo json_encode($result);
?>