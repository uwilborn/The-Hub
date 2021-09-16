<?php
include "connector.js"; // Using database connection file here

if(isset($_POST['submit']))
{		
    $fullname = $_POST['fname & lname'];
    $age = $_POST['age'];

    $insert = mysqli_query($db,"INSERT INTO `tblemp`(`fullname`, `age`) VALUES ('$fullname','$age')");

    if(!$insert)
    {
        echo mysqli_error();
    }
    else
    {
        echo "Thank you for donating a book! Please ship the book to us!";
    }
}

mysqli_close($db); // Close connection
?>

