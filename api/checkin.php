<?php

require './connect.php';

const RESULT_SUCCESS_KEY = "success";
const RESULT_MESSAGE_KEY = "message";

$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);
$reservationNumber = trim($_POST['reservationNumber']);
$agreementNumber = mt_rand(1000, 10000);
$success = array();
$success[RESULT_SUCCESS_KEY] = false;
$success[RESULT_MESSAGE_KEY] = "something went wrong123";
$finalResult = array();

$reservationNumberQuery = "SELECT rmb.roomNumber, rmb.phoneNumber, r.numberOfBeds, r.price, rmb.checkInDate, rmb.checkOutDate
FROM Reservation_Made_By rmb, Room r WHERE r.roomNumber = rmb.roomNumber AND rmb.reservationNumber = '{$reservationNumber}'";
if ($result = mysqli_query($con, $reservationNumberQuery)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $checkIn = new DateTime($row['checkOutDate']);
        $checkOut = new DateTime($row['checkInDate']);
        $duration = ($checkIn->diff($checkOut))->format('%d');
        $reservationExistsQuery = mysqli_num_rows($result);
        if ($reservationExistsQuery >= 1) {
            $insertAgreementQuery = "INSERT INTO Creates_Hotel_Agreement VALUES('{$agreementNumber}', '{$reservationNumber}')";
            mysqli_query($con, $insertAgreementQuery);
            $insertStaysQuery = "INSERT INTO Stays VALUES('{$row['roomNumber']}', '{$row['phoneNumber']}')";
            mysqli_query($con, $insertStaysQuery);
            $success[RESULT_SUCCESS_KEY] = true;
            $success[RESULT_MESSAGE_KEY] = "Successfully checkedin customer";
            $finalResult['roomNumber'] = $row['roomNumber'];
            $finalResult['numberOfBeds'] = $row['numberOfBeds'];
            $finalResult['price'] = $row['price'];
            $finalResult['duration'] = $duration;
        } else {
            $success[RESULT_MESSAGE_KEY] = "in else";
        }
    }
}
echo json_encode($finalResult);
close($con);
