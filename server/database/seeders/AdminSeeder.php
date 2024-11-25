<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = [
            ['firstName' => 'Accounting Clerk', 
            'lastName' => 'Accounting Clerk', 
            'contact' => '09123456789',
            'branch_code' => 'HO',
            'branch' => 'HO',
            'userName' => 'Admin',
            'employee_id' => '123456',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => '123456',
            'position' => 'Admin',
            'signature' => 'none',
            'role' => 'Admin',
            'created_at' => now(), 
            'updated_at' => now()],
      
        ];

        DB::table('users')->insert($admin);
    }
}
