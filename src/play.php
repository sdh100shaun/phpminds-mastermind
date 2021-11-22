<?php

use ShaunHare\MasterMind;

require __DIR__ . '/../vendor/autoload.php';

$game = new MasterMind(3);
var_dump($game->getSequence());
var_dump($game->play(['yellow', 'green', 'blue', 'purple'],1));
var_dump($game->getSequence());
var_dump($game->getSequenceCode());
var_dump($game->play(['yellow', 'green', 'blue', 'purple'],2));
var_dump($game->getSequence());
var_dump($game->getSequenceCode());
var_dump($game->play(['yellow', 'green', 'blue', 'purple'],3));
var_dump($game->play(['yellow', 'green', 'blue', 'purple'],4));