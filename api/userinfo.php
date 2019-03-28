<?php

require '../connect.php';

$user = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);
$phoneNumber = trim($_POST['phoneNumber']);

$sql = "SELECT phoneNumber, firstName AS fname, lastName AS lname, email FROM Customer WHERE phoneNumber='999'";
if ($result = mysqli_query($con, $sql)) {
    if ($row = mysqli_fetch_assoc($result)) {
        $user['phoneNumber'] = $row['phoneNumber'];
        $user['fname'] = $row['fname'];
        $user['lname'] = $row['lname'];
        $user['email'] = $row['email'];
    }
}

echo json_encode($user);

close($con);