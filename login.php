<?php
    session_start();

    if (isset($_SESSION['loggedIN'])) {
        header('Location: hidden.php');
        exit();
    }

    $json_data = $_POST['json_name'];
    $json = json_decode($json_data, true);

    if ($json['login'] == '1') {
        $connection = new mysqli('localhost', 'root', '', 'miPhone');

        $email = $connection->
        real_escape_string($json['emailPHP']);
        $password = $connection->
        real_escape_string($json['passwordPHP']);

        $t = $_SESSION['tmp'];

        $date = $connection->query("SELECT id FROM users
        WHERE email='$email' AND password='$t'");

        if ($date->num_rows > 0) {
            $_SESSION['loggedIN'] = '1';
            $_SESSION['email'] = $email;
            exit('success');
        } else {
            exit('failled');
        }
    }
?>