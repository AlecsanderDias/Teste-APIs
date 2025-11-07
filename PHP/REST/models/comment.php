<?php 

namespace Models;
use flight;

class Comment {

    public function __construct(
        private ?int $id,
        private ?string $content,
        private ?string $tags,
        private ?string $created_at,
        private ?string $updated_at,
        private ?string $deleted_at    
    ) {}

    public function getId():string {
        return $this->id;
    }

    public function getContent():string {
        return $this->content;
    }

    public function getTags():string {
        return $this->tags;
    }

    public function getCreatedAt():string {
        return $this->created_at;
    }

    public function getUpdatedAt():string {
        return $this->updated_at;
    }
   
    public function getDeletedAt():string {
        return $this->deleted_at;
    }

    public function setContent($content): void {
        $this->content = $content;
    }

    public function setTags($tags): void {
        $this->tags = $tags;
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