<meta charset="utf-8">

<?php session_start(); ?>

<?php

// 값 받아오기
$uid = $_POST["uid"];
$pwd = $_POST["pwd"];
echo $uid . "/" . $pwd;

// DB 연결
include "dbconn.php";

// 쿼리 작성
$sql = "select * from register where uid='$uid';";

// 쿼리 전송
$result = mysqli_query($conn, $sql);

// 결과 리턴 > 로그인  OR  회원가입 유도
// $row_num = mysqli_num_rows($result);
$row = mysqli_fetch_array($result);


if (!$row) { // 반환된 값 없음 = 존재하지 않는 아이디
    echo "
            <script type=\"text/javascript\">
                alert(\"존재하지 않는 아이디입니다.\");
                history.back();
            </script>
        ";
} else { // 아이디 존재하면
    if ($pwd != $row["pwd"]) { // 패스워드가 일치하지 않는 경우
        echo "
                <script type=\"text/javascript\">
                    alert(\"비밀번호가 일치하지 않습니다.\");
                    history.back();
                </script>
            ";
    } else { // 일치하는 경우

        $_SESSION["uid"] = $row["uid"];
        $_SESSION["uname"] = $row["uname"];

        echo "
                <script type=\"text/javascript\">
                    location.href = \"../index.html\";
                </script>
            ";
    }
}
?>