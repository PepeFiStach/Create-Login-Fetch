<?php
    session_start();

    if (!isset($_SESSION['loggedIN'])) {
        header('Location: index.html');
        exit();
    }

    $str = "Hello";
    $str2 = "8b1a9953c4611296a827abf8c47804d7";
    // echo md5($str);
    if (md5($str) === $str2) {
        echo $str;
    }

    echo $_SESSION['email'];
?>
<a href="logout.php">Log Out</a>
You are Logged IN!