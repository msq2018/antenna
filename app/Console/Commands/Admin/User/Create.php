<?php

namespace App\Console\Commands\Admin\User;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User\User;

class Create extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:user:create {--admin-user= : (Required) Admin user} {--admin-email= : (Required) Admin user email} {--admin-password= : (Required) Admin password} {--admin-firstname= : (Required) Admin firstname} {--admin-lastname= : (Required) Admin lastname}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a admin user';


    private $fieldsMatch = ['admin-user' => 'name', 'admin-email' => 'email', 'admin-password' => 'password', 'admin-firstname' => 'firstname', 'admin-lastname' => 'lastname'];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $options = $this->options();
        $userInfos = [];
        foreach ($options as $option => $value){
            if (!in_array($option,array_keys($this->fieldsMatch))){
                continue;
            }
            if (empty($value)){
                $ask = str_replace("-"," ",ucfirst($option));
                $value = $this->ask($ask);
            }
            $userInfos[$this->fieldsMatch[$option]] =$value;
        }
        if ($this->validate($userInfos)){
            $userInfos['password'] = Hash::make($userInfos['password']);
            $user = User::create($userInfos);
            if ($user!==false){
                $this->info("user \"{$user->name}\" created");
            }
        };
    }

    private function validate($data)
    {
        $validator = Validator::make($data,[
            'name'       => 'required|min:4|unique:users,name',
            'email'      => 'required|email|unique:users,email',
            'password'   => 'required|min:8',
            'firstname'  => 'required|min:2',
            'lastname'   => 'required|min:2'
        ],[
            'name.required' => 'Username is required',
            'name.min'=>'Username is less than 5 characters',
            'name.unique'=>'User already exists',
            'email.required'  => 'Email is required',
            'email.email'   =>'email format error',
            'email.unique'=>'Email has been registered',
            'password.required'=> 'Password is required',
            'password.min'=>'Password is less than 8 characters',
            'firstname.required'=>'Firstname is required',
            'firstname.min'=>'Password is less than 2 characters',
            'lastname.required'=>'Lastname is required',
            'lastname.min'=>'Password is less than 2 characters',
        ]);
        if ($validator->fails()){
            foreach ( $validator->errors()->all() as $error){
                $this->error($error);
            }
            return false;
        }
        return true;
    }
}
