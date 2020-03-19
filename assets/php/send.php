<?php
if (empty($_POST["fname"]) || empty($_POST["email"]) || empty($_POST["subject"]) || empty($_POST["message"])) {
    die("All fields are required.");
}

if (!isset($_POST["fname"]) || !isset($_POST["email"]) || !isset($_POST["subject"]) || !isset($_POST["message"])) {
    die("All fields are required.");
}

if (!ctype_alpha($_POST["fname"])) {
    die("First name must contain only letters.");
}

if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

$to_email = 'admin@scriptisle.com';
$subject = $_POST["subject"];
$message = '
<html> 
<head> 
    <title>Contact Form</title> 
</head> 
<body> 
    <h1>Contact Form</h1> 
    <table cellspacing="0" style="border: 2px dashed #FB4314; width: 100%;"> 
        <tr> 
            <th>Name:</th><td>' . $_POST["fname"] . '</td> 
        </tr> 
        <tr> 
            <th>Message:</th><td>' . $_POST["message"] . '</td> 
        </tr> 
    </table> 
</body> 
</html>
';
$headers = 'From: ' . $_POST["email"];
if (mail($to_email, $subject, $message, $headers)) {
    echo "Mail has been sent.";
} else {
    echo "An error occurred, please try again later.";
}
