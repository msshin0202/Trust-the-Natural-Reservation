<?php

const COOKIE_SESSION_ID_KEY = "sessionID";

session_id($_COOKIE[COOKIE_SESSION_ID_KEY]);
session_start();
unset($_SESSION);
session_destroy();
setcookie(COOKIE_SESSION_ID_KEY, null, -1, '/');

echo json_encode(["success" => true, "message" => "Log out successful"]);
?>
