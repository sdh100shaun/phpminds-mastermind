<?php


namespace ShaunHare;


class MasterMind
{

    private array $sequence;

    public int $numberOfChances;
        private int $turn = 0;
        public array $result = [];

    private function __construct() {}

    public static function getInstance(): MasterMind
    {
        static $instance = null;
        if ($instance === null) {
            $instance = new MasterMind();
        }
        return $instance;
    }
    public function reset(int $numberOfChances): void
    {
        $this->numberOfChances = $numberOfChances;
    }

    private function generateSequence()
    {
        if(empty($this->getSequence())) {
            $gamePegs = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
            $this->sequence = [];
            shuffle($gamePegs);
            for ($i = 0; $i < 4; $i++) {
                $this->sequence[$i] = array_pop($gamePegs);
            }
        }
    }

    /**
     * @return int
     */
    public function getTurn(): int
    {
        return $this->turn;
    }

    /**
     * @return array
     */
    public function getSequence(): array
    {
        return $this->sequence;
    }

    /**
     * @return array
     */
    public function getSequenceCode(): array
    {
        return array_map(function ($item) {
            return bin2hex($item[0]);
        }, $this->getSequence());
    }
    public function play(array $guess): array
    {
        $correct = [];

        foreach ($guess as $index => $item) {
            $correct[$index] = '';

            if($this->sequence[$index -1] === $item){
                $correct[$index] = 1;
            }
            elseif ( in_array($item, $this->sequence) ){
                $correct[$index] = 0;
            }
        }

        $this->turn++;

        if($this->turn > $this->numberOfChances)
        {
            return [];
        }
        shuffle($correct);
        $this->result = ['sequence' => $this->getSequenceCode(), 'turn'=>$this->turn, 'correct' =>$correct, 'guess' => $guess];
        if($this->turn === 6) {
            $this->turn =0;
            $this->generateSequence();
        }
        return  $this->result;
    }

    /**
     * @param array $sequence
     * @return MasterMind
     */
    public function setSequence(array $sequence): MasterMind
    {
        $this->sequence = $sequence;
        return $this;
    }
}