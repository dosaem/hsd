<?php
$uid = $_GET['uid'];

// $connect = mysqli_connect("localhost", "root", "1234");
$connect = mysqli_connect("localhost", "dosaem90", "gkstoa1234");
mysqli_select_db($connect, "dosaem90");

$sql = "select * from register where uid='$uid'";
$result = mysqli_query($connect, $sql);
$num_match = mysqli_num_rows($result);

if (!$num_match) {
    echo "N";
} else {
    echo "Y";
}
