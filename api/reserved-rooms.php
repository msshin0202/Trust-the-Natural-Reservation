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


function getCustomerReservations ($phoneNumber) {
    $conn;
    $reservations = array();
    try {
        $conn = connect();
        $escapedPhoneNumber = $conn->real_escape_string($phoneNumber);
        $sql = "SELECT c.email, r.reservationNumber, r.roomNumber, r.checkInDate, r.checkOutDate, 
        room.numberOfBeds FROM Customer c, Reservation r, Room room WHERE c.phoneNumber = r. phoneNumber
        AND r.phoneNumber = room.phoneNumber AND '{$phoneNumber}' = c.phoneNumber";
        $mysqliResult = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($mysqliResult);
        $reservations[RESULT_SUCCESS_KEY] = true;
        $reservations[RESULT_MESSAGE_KEY] = "Here's the list of reserved rooms!";
        $reservations[RESULT_CONTENT_KEY] = $row;
    } catch (Exception $e) {
        $reservations[RESULT_SUCCESS_KEY] = false;
        $reservations[RESULT_MESSAGE_KEY] = $e->getMessage();
    } finally {
        close($conn);
    }
    return $reservations;
}

$_POST = json_decode(file_get_contents('php://input'), true);

$phoneNumber   = $_POST['phoneNumber'];
$requestType = $_POST['requestType'];

$result = getCustomerReservations($phoneNumber);
echo json_encode($result);



