<?php

require './connect.php';

$rooms = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);
$phoneNumber = trim($_POST['phoneNumber']);
$cr = 0;
$sql = "SELECT r.roomNumber, r.price FROM Room r JOIN Stays s ON r.roomNumber = s.roomNumber WHERE s.phoneNumber='{$phoneNumber}'";
if ($result = mysqli_query($con, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $rooms[$cr]['roomNumber'] = $row['roomNumber'];
        $rooms[$cr]['price'] = $row['price'];
        $cr++;
    }
}

echo json_encode($rooms);

close($con);
