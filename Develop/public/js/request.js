const requestFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the request form
  const rfname = document.querySelector('#first-request').value.trim();
  const rlname = document.querySelector('#last-request').value.trim();
  const afname = document.querySelector('#author-first').value.trim();
  const alname = document.querySelector('#author-last').value.trim();
  const btitle = document.querySelector('#btitle').value.trim();
  const bqty = document.querySelector('#quantity').value.trim();

  Option 1:
  
  <?php
// Make a MySQL Connection
mysql_connect("localhost", "username", "password") or die(mysql_error());
mysql_select_db("aabooks") or die(mysql_error());

// Insert a row of information into the table "user"
mysql_query("INSERT INTO user 
(first_name, last_name, author_firstname, author_lastname, book_title, quantity) VALUES(rfname, rlname, afname, alname, btitle, bqty) ") 
or die(mysql_error());  

echo "Data Inserted!";
?>
  
  Option 2:
  <?php
include "dbConn.php"; // Using database connection file here

if(isset($_POST['submit']))
{		
    $rfname = $_POST['first_name'];
    $rlname = $_POST['last_name'];
  $afname = $_POST['first_name'];
    $alname = $_POST['age'];
  $btitle= $_POST['first_name'];
    $bqty = $_POST['age'];
  

    $insert = mysqli_query($db,"INSERT INTO `tblemp`(`fullname`, `age`) VALUES ('$fullname','$age')");

    if(!$insert)
    {
        echo mysqli_error();
    }
    else
    {
        echo "Records added successfully.";
    }
}

mysqli_close($db); // Close connection
?>

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (rfname && rlname && afname && alname && btitle && bqty) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
