<?php 

namespace Models;
use flight;

class Follow {

    public function __construct(
        private ?int $id,
        private ?string $followerId,
        private ?string $followedId,   
    ) {}

    public function getId():string {
        return $this->id;
    }

    public function getFollowerId():string {
        return $this->followerId;
    }

    public function getFollowedId():string {
        return $this->followedId;
    }

    public function setFollowerId($followerId): void {
        $this->followerId = $followerId;
    }

    public function setFollowedId($followedId): void {
        $this->followedId = $followedId;
    }

    public function getAllAttributesAndValues(): array {
        $result = [];
        foreach($this as $key => $value) $result[$key] = $value;
        return $result;
    }
    
    public function getNonNullAttributesAndValues(): array {
        $result = [];
        foreach($this as $key => $value) if(!is_null($value)) $result[$key] = $value;
        return $result;
    }   
}