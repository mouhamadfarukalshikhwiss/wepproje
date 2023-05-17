<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

   
    if (empty($email) || empty($password)) {
        header("Location: login.html");
        exit();
    }

    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: login.html"); 
        exit();
    }

    
    header("Location: giris.php?email=" . urlencode($email));
    exit();
}
?>