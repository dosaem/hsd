<?php

session_start();

// 세션 삭제
unset($_SESSION["uid"]);
unset($_SESSION["nick"]);

echo "
        <script type=\"text/javascript\">
            location.href=\"../login.html\";
        </script>
    ";
