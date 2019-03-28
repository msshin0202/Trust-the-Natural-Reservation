<?php

require './connect.php';

$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);
$phoneNumber = trim($_POST['phoneNumber']);

// drops a view if exists: To_Be_Paid
$sql = "DROP VIEW IF EXISTS To_Be_Paid";
if ($result = mysqli_query($con, $sql)) {
    // creats a view: To_Be_Paid
    // TODO: comeback
    $sql = "CREATE VIEW To_Be_Paid(value) AS SELECT amount FROM Bill WHERE phoneNumber = '{$phoneNumber}'";
    if ($result = mysqli_query($con, $sql)) {
        // get total amount to be paid
        $sql = "SELECT SUM(value) AS total FROM To_Be_Paid";
        if ($result = mysqli_query($con, $sql)) {
            $value = mysqli_fetch_assoc($result)['total'];
            $net['total'] = $value == NULL ? 0 : $value;
            // get total amount that has been paid
            $sql = "SELECT SUM(amount) AS paid FROM Pays p WHERE p.bid IN (SELECT b.bid From Bill b WHERE b.phoneNumber = '{$phoneNumber}')";
            if ($result = mysqli_query($con, $sql)) {
                $value = mysqli_fetch_assoc($result)['paid'];
                $net['paid'] = $value == NULL ? 0 : $value;
            }
        }
    }
}

// drops a view if exists: To_Be_Paid
mysqli_query($con, "DROP VIEW IF EXISTS To_Be_Paid");

echo json_encode($net);
close($con);