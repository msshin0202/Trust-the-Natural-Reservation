<?php

require './connect.php';

$total = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);
$phoneNumber = $_POST['phoneNumber'];

$sql = "SELECT SUM(price) AS total FROM Room WHERE roomNumber IN (SELECT roomNumber FROM Stays WHERE phoneNumber='{$phoneNumber}')";

if ($result = mysqli_query($con, $sql)) {
    $value = mysqli_fetch_assoc($result)['total'];
    $total['total'] = $value == NULL ? 0 : $value;
}

echo json_encode($total);
close($con);