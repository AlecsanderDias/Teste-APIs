<?php 

namespace Models;
use flight;

class User {

    public function __construct(
        private ?int $id,
        private ?string $name,
        private ?string $surname,
        private ?string $user_name,
        private ?string $birth_date,
        private ?string $gender,
        private ?bool $is_premium,
        private ?string $email,
        private ?string $password,
        private ?string $created_at,
        private ?string $updated_at,
        private ?string $deleted_at    
    ) {}

    public function getId():string {
        return $this->id;
    }

    public function getName():string {
        return $this->name;
    }

    public function getSurname():string {
        return $this->surname;
    }

    public function getUserName():string {
        return $this->user_name;
    }

    public function getBirthDate():string {
        return $this->birth_date;
    }

    public function getGender():string {
        return $this->gender;
    }

    public function getIsPremium():bool {
        return $this->is_premium;
    }

    public function getEmail():string {
        return $this->email;
    }

    public function getPassword():string {
        return $this->password;
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

    public function setName($name): void {
        $this->name = $name;
    }

    public function setSurname($surname): void {
        $this->surname = $surname;
    }

    public function setUserName($user_name): void {
        $this->user_name = $user_name;
    }

    public function setBirthDate($birth_date): void {
        $this->birth_date = $birth_date;
    }

    public function setGender($gender): void {
        $this->gender = $gender;
    }

    public function setIsPremium($is_premium): void {
        $this->is_premium = $is_premium;
    }

    public function setEmail($email): void {
        $this->email = $email;
    }

    public function setPassword($password): void {
        $this->password = $password;
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