<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KategorijaReceptSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kategorija_recept')->insert([
            ['naziv' => 'Predjela'],
            ['naziv' => 'Glavna jela'],
            ['naziv' => 'Deserti'],
            ['naziv' => 'Zdravi obroci'],
            ['naziv' => 'Salate'],
           
        ]);
    }
}
