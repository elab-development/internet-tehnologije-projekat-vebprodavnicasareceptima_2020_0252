<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StavkaKorpaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

 
        DB::table('stavka_korpa')->insert([
        [
            'korpa_id' => 1,
            'namirnica_id' => 5,
        ],
        [
            'korpa_id' => 1,
            'namirnica_id' => 13,
        ],
        [
            'korpa_id' => 1,
            'namirnica_id' => 14,
        ],
        [
            'korpa_id' => 1,
            'namirnica_id' => 15,
        ]
        ]);
    }
}
