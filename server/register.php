<?php
// define variables and set to empty values
$usernameErr = $firstnameErr = $lastnameErr = $birthErr = $genderErr = $emailErr =
$passwordErr = $countryErr = "";
$username = $firstname = $lastname = $birth = $gender = $email = $password = $country = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["username"])) {
    $usernameErr = "Name is required";
  } else {
    $username = test_input($_POST["username"]);
  }

  if (empty($_POST["firstname"])) {
    $firstnameErr = "Name is required";
  } else {
    $firstname = test_input($_POST["firstname"]);
  }

  if (empty($_POST["lastname"])) {
    $lastnameErr = "Name is required";
  } else {
    $lastname = test_input($_POST["lastname"]);
  }

  if (empty($_POST["birth"])) {
    $birthErr = "Name is required";
  } else {
    $birth = test_input($_POST["birth"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format"; 
    }
  }

  if (empty($_POST["password"])) {
    $passwordErr = "Email is required";
  } else {
    $password = test_input($_POST["password"]);
  }

  if (empty($_POST["country"])) {
    $countryErr = "Email is required";
  } else {
    $country = test_input($_POST["country"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

echo "<h2>Your Input:</h2>";
echo $username;
echo "<br>";
echo $firstname;
echo "<br>";
echo $lastname;
echo "<br>";
echo $birth;
echo "<br>";
echo $gender;
echo "<br>";
echo $email;
echo "<br>";
echo $password;
echo "<br>";
echo $country;
echo "<br>";
?>