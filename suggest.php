<?php

    /*
     *  Usage: suggest.php?part=[partial word for suggestion]
     *
     *  Response
     *  ---------
     *  Type: JSON
     *  Data:
     *  {
     *      'words' : ['word1','word2','word3']
     *  }
     *
     */

   // Get the word
     $part = $_GET['part'].'%';

  // Connect to the database
  include('config.php');

  $con = mysql_connect($host,$user,$pass);

  if (!$con){
              echo "Unable to connect";
             }
  mysql_select_db($dbname,$con);

  $response = array();
  $words = array();

  $query = mysql_query("SELECT * FROM raw_words WHERE word LIKE '{$part}'");
  while($row=mysql_fetch_array($query))
       {
             $title=$row['word'];
             $words[] = $title;
        } 
   $response['words'] = $words;
   header("Content-type: application/json");
   echo json_encode($response);

?>
