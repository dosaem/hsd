<?php
$uid = $_POST["uid"];
$pwd = $_POST["pwd"];
$uname = $_POST["uname"];
$tel = $_POST["tel"];


include "dbconn.php";

$sql = "INSERT INTO register (uid, pwd, uname, tel)";
$sql .= " VALUES('$uid', '$pwd', '$uname', '$tel');";

// echo $sql;

$result = mysqli_query($conn, $sql);

echo "
        <script type=\"text/javascript\">
            location.href=\"../index.html\";
        </script>
    ";


// $id_check_sql = "select uid from members where uid='$uid';";

// $insert_ok = mysqli_query($conn, $id_check_sql);

// if (mysqli_num_rows($insert_ok)) {
//     echo "
//     <script>
//     location.href = \"welcome.html \";
//     </script>
    
//     ";
// } else {
//     echo "
//     <script>
//     location.href = \"index.html \";
//     </script>
//     ";
// }
