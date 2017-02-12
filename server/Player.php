<?php 
class Player {
    public $playerName = "";
    public $position = "";
    public $stacksize = "";

    public function __construct($playerName, $position, $stacksize) {
        $this->playerName = $playerName;
        $this->position = $position;
        $this->stacksize = $stacksize;
    }
}
