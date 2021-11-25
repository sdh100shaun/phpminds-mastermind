<?php


namespace ShaunHare;

use Ratchet\{MessageComponentInterface, ConnectionInterface};

class Socket implements MessageComponentInterface {

    private MasterMind $masterMind;

    public function __construct(
        public ?\SplObjectStorage $clients = null
    )
    {
        $this->clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn) {
        // Store the new connection to send messages to later
        $this->clients->attach($conn);
        $this->masterMind = new MasterMind(10);

    }

    public function onMessage(ConnectionInterface $from, $msg) {
        foreach ($this->clients as $client) {
            if ($from === $client) {
                $sequence = explode(',', $msg);
                $result = $this->masterMind->play($sequence);
                $client->send(json_encode($result, JSON_THROW_ON_ERROR));
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