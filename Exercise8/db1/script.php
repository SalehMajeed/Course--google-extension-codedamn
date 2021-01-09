<pre>
<?php
    $name = mysql_real_escape_string($_POST['name']);
    $email =  mysql_real_escape_string($_POST['email']);
    if(!isset($_POST['submit'])){
        echo 'Thank You For Your Submission.';
        die();
    }
    $bridge = mysqli_connect('localhost', 'root', '', 'ids');
    $query = "INSERT INTO information (Name, Email) VALUES ('$name', '$email')";
    if($bridge->query($query)){
        echo 'WEW';
    }
?>
</pre>