<?php

$hostname = 'localhost';
$username = 'generic';
$password='pass';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=evgeni",$username,$password);
	}
	
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
	
?>