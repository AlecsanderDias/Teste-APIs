<?php 

namespace Models;
use flight;

class Post {

    public function __construct(
        private ?int $id,
        private ?string $postId,
        private ?string $userId,  
    ) {}

    public function getId():string {
        return $this->id;
    }

    public function getPostId():string {
        return $this->postId;
    }

    public function getUserId():string {
        return $this->userId;
    }

    public function setPostId($postId): void {
        $this->postId = $postId;
    }

    public function setUserId($userId): void {
        $this->userId = $userId;
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