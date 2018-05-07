<?php
    session_start();

    $json_data = $_POST['json_name'];
    $json = json_decode($json_data, true);

    if ($json['login'] == '1') {
        $connection = new mysqli('localhost', 'root', '', 'miPhone');

        $email = $connection->
        real_escape_string($json['emailPHP']);
        $password = $connection->
        real_escape_string(md5($json['passwordPHP']));

        $tmp = $password;
        $_SESSION['tmp'] = $tmp;

        $date = $connection->query("INSERT INTO users
        VALUES ('', '$email', '$password')");

        if ($date === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $date . "<br>" . $connection->error;
        }
    }
?>