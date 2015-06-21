<?php

// Determine local URL for cross-origin permissions
$localUrl = 'http://server.kortalh.com:4200';

// Kickstart RedBean
R::setup('mysql:host=localhost;dbname=wpca', 'user', 'password');
?>