<?php

$connect = mysqli_connect("localhost", "root", "", "task");

if(isset($_POST["email"])){
    $query = "SELECT * FROM users WHERE email='".$_POST["email"]."' and pw='".$_POST["password"]."'";
    $result = mysqli_query($connect, $query);
    if(mysqli_num_rows($result) > 0){
        $_SESSION["email"] = $_POST["email"];
        echo "Yes";
    }
    else{
        echo "No";
    }
}