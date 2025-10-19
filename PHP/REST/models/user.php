<?php 

namespace Models;
use flight;

class User {

    public function __construct(
        private string $name,
        private string $surname,
        private string $user_name,
        private string $birth_date,
        private string $gender,
        private bool $is_premium,
        private string $email,
        private string $password,
        private string $created_at,
        private string $updated_at,
        private string $deleted_at    
    ) {}
    

    // public function __construct(
    //     string $name,
    //     string $surname,
    //     string $user_name,
    //     string $birth_date,
    //     string $gender,
    //     bool $is_premium,
    //     string $email,
    //     string $password,
    //     string $created_at,
    //     string $updated_at,
    //     string $deleted_at
    // ) {
    //     $this->name = $name;
    //     $this->surname = $surname;
    //     $this->user_name = $user_name;
    //     $this->birth_date = $birth_date;
    //     $this->gender = $gender;
    //     $this->is_premium = $is_premium;
    //     $this->email = $email;
    //     $this->password = $password;
    //     $this->created_at = $created_at;
    //     $this->updated_at = $updated_at;
    //     $this->deleted_at = $deleted_at;
    // }
    
}