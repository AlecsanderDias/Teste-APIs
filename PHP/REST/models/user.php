<?php 
class User {

    private $db;
    private string $name;
    private string $surname;
    private string $user_name;
    private DateTime $birth_date;
    private string $gender;
    private bool $is_premium;
    private string $email;
    private string $password;
    private DateTime $created_at;
    private DateTime $updated_at;
    private DateTime $deleted_at;

    public function __construct(
        $db,
        string $name,
        string $surname,
        string $user_name,
        DateTime $birth_date,
        string $gender,
        bool $is_premium,
        string $email,
        string $password,
        DateTime $created_at,
        DateTime $updated_at,
        DateTime $deleted_at
    ) {
        $this->db = $db;
        $this->name = $name;
        $this->surname = $surname;
        $this->user_name = $user_name;
        $this->birth_date = $birth_date;
        $this->gender = $gender;
        $this->is_premium = $is_premium;
        $this->email = $email;
        $this->password = $password;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
        $this->deleted_at = $deleted_at;
    }

    public function getUsers() {
        try {
            $users = Flight::db()->fetchAll("SELECT * FROM users;");
            foreach ($users as $user) {
                echo $user->name;
            }
            return Flight::json([
                'message' => 'Grande sucesso',
                'Resultado' => $users
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}