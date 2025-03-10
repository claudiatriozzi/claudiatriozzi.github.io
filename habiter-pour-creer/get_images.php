<?php
$directory = 'slideshow/';
$images = array_values(array_filter(scandir($directory), function($file) use ($directory) {
    return preg_match('/\\.(jpg|jpeg|png|gif)$/i', $file);
}));
header('Content-Type: application/json');
echo json_encode($images);
?>
