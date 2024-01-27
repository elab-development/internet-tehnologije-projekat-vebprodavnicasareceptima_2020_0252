<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\korisnik;

class KorisnikSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        korisnik::factory()->times(5)->create();

        DB::table('korisnik')->insert([
            [
                'Ime' => 'Milutin',
                'Prezime' => 'Mirković',
                'Adresa' => 'Luke Vukalovica 7',
                'Email' => 'milutin.mirkovic1.mm@gmail.com',
                //'broj_telefona' => '0640854858',
                'password' => 'ninomi'
            ],
            [
                'Ime' => 'Nina',
                'Prezime' => 'Omerović',
                'Adresa' => 'Tršćanska 13',
                'Email' => 'ninicomerovic2@gmail.com',
                //'broj_telefona' => '0631201217',
                'password' => 'ninomi'
            ],
        ]);
    }
}
