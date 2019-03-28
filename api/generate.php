<?php

require './connect.php';

$net = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);
$phoneNumber = trim($_POST['phoneNumber']);
$roomNumber = trim($_POST['roomNumber']);

$bid = 0;

do {
    $bid = mt_rand(1000, 10000);
    $sql = "SELECT bid FROM Bill WHERE bid={$bid}";
    if ($result = mysqli_query($con, $sql)) {
        if (mysqli_num_rows($result) == 0) {
        break;
        }
    }
}
while (true);

// delete stays associated to phone number and room number
$sql = "DELETE FROM Stays WHERE phoneNumber='{$phoneNumber}' AND roomNumber={$roomNumber}";
if ($result = mysqli_query($con, $sql)) {
    // get price info associated to room number
    $sql = "SELECT price FROM Room where roomNumber={$roomNumber}";
    if ($result = mysqli_query($con, $sql)) {
        $amount = mysqli_fetch_assoc($result)['price'];
        // create a bill with given user info
        $sql = "INSERT INTO Bill VALUES ({$bid}, {$amount}, '{$phoneNumber}')";
        if ($result = mysqli_query($con, $sql)) {
            $net['id'] = $bid;
        }
    }
}

echo json_encode($net);

close($con);