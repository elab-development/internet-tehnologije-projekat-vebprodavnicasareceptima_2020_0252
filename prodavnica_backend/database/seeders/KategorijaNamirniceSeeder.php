<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KategorijaNamirniceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kategorija_namirnice')->insert([
            ['naziv' => 'Piće,kafa,čaj'],
            ['naziv' => 'Voće i Povrće'],
            ['naziv' => 'Meso'],
            ['naziv' => 'Mlečni proizvodi'],
            ['naziv' => 'Organska i zdrava hrana'],
            ['naziv' => 'Slatki i slani konditori'],
            ['naziv' => 'Osnovne namirnice'],
            
        ]);

    
    }
}
