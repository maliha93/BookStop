<?php
DEFINE ('DB_USER', 'bookstop');
DEFINE ('DB_PASSWORD', 'bookstop');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'bookstop');

$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
OR die('Could not connect to MySQL: ' .
mysqli_connect_error());

?>
