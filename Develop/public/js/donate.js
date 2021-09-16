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

<div class="row">
 <div class="col-auto">
    <h2>Donate a Book</h2>
    <h2>Welcome, {{name}}!</h2>
  </div>
</div>


<div class="row mt-4">
  <div class="col-md-6">
    <h3>Which book are you donating:</h3>
    <form class="form give-form">
      
      <div class="form-group">
        <label for="first-donate">Donator's First Name:</label>
        <input class="form-input" type="text" id="first-donate" />
      </div>
      
      <div class="form-group">
        <label for="last-donate">Requester's Last Name:</label>
        <input class="form-input" type="text" id="last-donate" />
      </div>
      
      <div class="form-group">
        <label for="first-author">Author First Name:</label>
        <input class="form-input" type="text" id="first-author" />
      </div>
      
      <div class="form-group">
        <label for="last-author">Author Last Name:</label>
        <input class="form-input" type="text" id="last-author" />
      </div>
      
      <div class="form-group">
        <label for="title">Book Title:</label>
        <input class="form-input" type="text" id="title" />
      </div>

      <div class="form-group">
        <label for="quantity">Quantity:</label>
        <input class="form-input" type="number" id="quantity" />
      </div>
      
      <div class="form-group">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
     </form>
     </div>
     </div>
     
      {{#if request.length}}
  <div class="col-md-6 project-list">
    <h3>Current Requests:</h3>

    {{#each requests as |request|}}
    <div class="row mb-2">
      <div class="col-md-8">
        <h4><a href="/request/{{book.id}}">{{book.name}}</a></h4>
      </div>
      <div class="col-md-4">
        <button class="btn btn-sm btn-danger" data-id="{{book.id}}">DELETE</button>
      </div>

      <script src="./js/donate.js"></script>
      
      
