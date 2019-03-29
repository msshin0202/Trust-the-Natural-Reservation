<?php
require './connect.php';

const RESULT_SUCCESS_KEY = "success";
const RESULT_MESSAGE_KEY = "message";
const RESULT_CONTENT_KEY = "content";
const POST_USERNAME_KEY = "username";
const POST_PASSWORD_KEY = "password";
const SESSION_USER_KEY = "user";
const COOKIE_SESSION_ID_KEY = "sessionID";
const SESSION_USER_TYPE_KEY = "userType";
const SESSION_USER_CUSTOMER_PHONE_KEY = "phoneNumber";

session_id($_COOKIE[COOKIE_SESSION_ID_KEY]);
session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

function getCustomerReservations ($phoneNumber) {
    $conn;
    $reservations = array();
    try {
        $conn = connect();
        $cr = 0;
        $sqlName = "SELECT c.firstName, c.lastName FROM Customer c WHERE c.phoneNumber = {$phoneNumber}";
        $sql = "SELECT c.firstName, c.lastName, r.reservationNumber, r.roomNumber, r.checkInDate, r.checkOutDate, room.numberOfBeds FROM Customer c, Reservation_Made_By r, Room room WHERE c.phoneNumber = r.phoneNumber AND r.roomNumber = room.roomNumber AND '{$phoneNumber}' = c.phoneNumber";
        if ($mysqliResult = mysqli_query($conn, $sql)) {
            $mysqliResultName = mysqli_query($conn, $sqlName);
            $rowName = mysqli_fetch_assoc($mysqliResultName);
            $reservations["firstName"] = $rowName["firstName"];
            $reservations["lastName"] = $rowName["lastName"];
            while ($row = mysqli_fetch_assoc($mysqliResult)) {
                $reservations["content"][$cr]['firstName'] = $row['firstName'];
                $reservations["content"][$cr]['lastName'] = $row['lastName'];
                $reservations["content"][$cr]['reservationNumber'] = $row['reservationNumber'];
                $reservations["content"][$cr]['roomNumber'] = $row['roomNumber'];
                $reservations["content"][$cr]['checkInDate'] = $row['checkInDate'];
                $reservations["content"][$cr]['checkOutDate'] = $row['checkOutDate'];
                $reservations["content"][$cr]['numberOfBeds'] = $row['numberOfBeds'];
                $cr++;
            }
        } else {
            $reservations[RESULT_SUCCESS_KEY] = false;
            $reservations[RESULT_MESSAGE_KEY] = $e->getMessage();    
        }
    } catch (Exception $e) {
        $reservations[RESULT_SUCCESS_KEY] = false;
        $reservations[RESULT_MESSAGE_KEY] = $e->getMessage();
    } finally {
        close($conn);
    }
    return $reservations;
}

function cancelCustomerReservations ($reservationNumber) {
    try {
        $conn = connect();
        $sql = "DELETE FROM Reservation_Made_By WHERE reservationNumber = {$reservationNumber}";
        mysqli_query($conn, $sql);
        $reservations[RESULT_SUCCESS_KEY] = true;
        $reservations[RESULT_MESSAGE_KEY] = "Reservation has been successfully cancelled.";
    } catch (Exception $e) {
        $reservations[RESULT_SUCCESS_KEY] = false;
        $reservations[RESULT_MESSAGE_KEY] = "stuck here";
    } finally {
        close($conn);
    }
    return $reservations;
}

$userType = $_SESSION[SESSION_USER_TYPE_KEY];
$requestType = $_POST["requestType"];

if ($requestType == "view") {
    if ($userType == "employee") {
        $phoneNumber = $_POST['phoneNumber'];
        $result = getCustomerReservations($phoneNumber);
        echo json_encode($result);
    } else if ($userType == "customer"){
        $phoneNumber = $_SESSION[SESSION_USER_CUSTOMER_PHONE_KEY];
        $result = getCustomerReservations($phoneNumber);
        echo json_encode($result);
    } else {
        $result[RESULT_SUCCESS_KEY] = false;
        $result[RESULT_MESSAGE_KEY] = "Error occurred. Please try again!";
        echo json_encode($result);
    }
} else if ($requestType == "cancel") {
    $result = cancelCustomerReservations($_POST["reservationNumber"]);
    echo json_encode($result);
}




