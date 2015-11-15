<?php
 	//This is the start of the api call.
  // create curl resource
  $ch = curl_init();
  // set url
  curl_setopt($ch, CURLOPT_URL, " https://itunes.apple.com/us/rss/topalbums/limit=100/json");
  //return the transfer as a string
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  // $output contains the output string
  $output = curl_exec($ch);
  $raw_data = json_decode($output);
  //This is the end of the api call.
	$full_api = $raw_data->{'feed'};

	var_dump($output);
  curl_close($ch);
?>
