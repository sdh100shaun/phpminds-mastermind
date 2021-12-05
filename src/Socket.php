<?php


namespace ShaunHare;

use Ratchet\{MessageComponentInterface, ConnectionInterface};

class Socket implements MessageComponentInterface {

    private MasterMind $masterMind;

    public function __construct(
        protected ?\SplObjectStorage $clients
    )
    {
        $this->clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn) {
        // Store the new connection to send messages to later
        $this->clients->attach($conn);
        $this->masterMind = new MasterMind(6);

    }

    public function onMessage(ConnectionInterface $from, $msg) {
        if ($msg === '__ping__') {
            $from->send('__pong__');
        } else {
            foreach ($this->clients as $client) {
                if ($from === $client) {
                    $this->masterMind->play(json_decode($msg, true));
                }
            }
            $this->updateClients($from);
        }
    }

    private function updateClients(ConnectionInterface $from):void
    {
        foreach ($this->clients as $client) {
            if ($from === $client) {
                $client->send(json_encode($this->masterMind->result + ['player' => true]));

            }else {
                $client->send(json_encode($this->masterMind->result));
            }

        }
    }

    public function onClose(ConnectionInterface $conn) {
        // The connection is closed, remove it, as we can no longer send it messages
        $this->clients->detach($conn);
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        trigger_error("An error has occurred: {$e->getMessage()}\n", E_USER_WARNING);

        $conn->close();
    }


}