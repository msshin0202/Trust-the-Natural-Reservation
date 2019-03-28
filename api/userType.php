<?php
# Return user type ('customer' or 'employee') if logged in. Otherwise, return 'unknown'
const COOKIE_SESSION_ID_KEY = "sessionID";
const SESSION_USER_TYPE_KEY = "userType";
const SUCCESS_KEY = "success";
const MESSAGE_KEY = "message";

$sessionID = $_COOKIE[COOKIE_SESSION_ID_KEY];
$result = [];
$result[SUCCESS_KEY] = true;
$result[MESSAGE_KEY] = "unknown";

if (!empty($sessionID)) {
    session_id($sessionID);
    session_start();
    $result[SUCCESS_KEY] = true;
    $userType = $_SESSION[SESSION_USER_TYPE_KEY];
    $result[MESSAGE_KEY] = empty($userType) ? 'unknown' : $userType;
}

echo json_encode($result);
?>