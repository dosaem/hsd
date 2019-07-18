<?php

// $servername = "localhost";
// $username = "root";
// $password = "gkstoa1234";

// $conn = new mysqli($servername, $username, $password);
// $conn = mysqli_connect("localhost", "root", "1234");
$conn = mysqli_connect("localhost", "dosaem90", "gkstoa1234");



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";
// echo $conn;

mysqli_select_db($conn, "dosaem90");
