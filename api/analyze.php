<?php

require './connect.php';

$user = [];
$con = connect();

// $_POST = json_decode(file_get_contents('php://input'), true);
// $phoneNumber = trim($_POST['phoneNumber']);

$cr = 0;
$sql = "SELECT c.phoneNumber, c.firstName AS fname, c.lastName AS lname, c.email FROM Customer c WHERE NOT EXISTS (SELECT * FROM Room r WHERE NOT EXISTS (SELECT * FROM Reservation_Made_By rmb WHERE rmb.roomNumber = r.roomNumber and c.phoneNumber = rmb.phoneNumber))";
// $sql = "SELECT phoneNumber, firstName AS fname, lastName AS lname, email FROM Customer WHERE phoneNumber='{$phoneNumber}'";
if ($result = mysqli_query($con, $sql)) {
    while ($row = mysqli_fetch_assoc($result)) {
        $user[$cr]['phoneNumber'] = $row['phoneNumber'];
        $user[$cr]['fname'] = $row['fname'];
        $user[$cr]['lname'] = $row['lname'];
        $user[$cr]['email'] = $row['email'];
        $cr++;
    }
}

// echo json_encode(['data'=>$user]);
echo json_encode($user);

close($con);
