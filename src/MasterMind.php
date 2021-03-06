<?php


namespace ShaunHare;


class MasterMind
{

    private array $sequence;

    public function __construct(
        public int $numberOfChances,
        private int $turn = 0
    ) {
        $gamePegs = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        $this->sequence = [];
        shuffle($gamePegs);
        for ( $i = 0 ; $i < 4 ; $i++ ) {
            $this->sequence[$i] = array_pop($gamePegs);
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

            if($this->sequence[$index] === $item){
                $correct[$index] = 1;
            }
            elseif ( in_array($item, $this->sequence) ){
                $correct[$index] = 0;
            }
        }

        $this->turn++;

        if($this->turn >= $this->numberOfChances)
        {
            return [];
        }
        shuffle($correct);
        return ['sequence' => $this->getSequenceCode(), 'turn'=>$this->turn, 'correct' =>$correct];
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