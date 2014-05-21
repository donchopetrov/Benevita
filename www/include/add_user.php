<?

if(isset($_GET['get_users']))
{

	$result = mysql_query("SELECT * FROM api_test WHERE 1");
	$locations = array();
	while($location = mysql_fetch_array($result, MYSQL_ASSOC)) {
	$locations[] = array('users'=>$location);
	}
	echo json_encode($locations);
}
else if (isset($_GET['set_user']))
{
	$user_name=$_GET['user_name'];
	$user_email=$_GET['user_name'];
	$user_pass=$_GET['user_password'];

	$result = mysql_query("INSERT INTO api_test (user_name,user_email,user_pass)
				VALUES ('$user_name','$user_email','$user_pass')");
	echo 'Succesfully inserted';
}

?>