<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        
        $this->call(KorisnikSeeder::class);
        $this->call(KategorijaNamirniceSeeder::class);
        $this->call(KategorijaReceptSeeder::class);
        $this->call(NamirnicaSeeder::class);
        $this->call(ReceptSeeder::class);
        $this->call(StavkaReceptSeeder::class);
        $this->call(KorpaSeeder::class);
        $this->call(StavkaKorpaSeeder::class);
        

    }
}
