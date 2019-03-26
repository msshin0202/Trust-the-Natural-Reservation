<?php
    function connect() {
        $dbhost = "localhost:8889";
        $dbuser = "root";
        $dbpass = "n39JKmvul2fJejWB";
        $db = "hotel";
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or
        die("Connect failed: %s\n". $conn -> error);
        return $conn;
    }
    function close($conn) {
        $conn -> close();
    }
?>