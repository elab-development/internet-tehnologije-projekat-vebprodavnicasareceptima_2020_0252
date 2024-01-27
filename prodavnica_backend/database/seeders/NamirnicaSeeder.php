<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NamirnicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('namirnica')->insert([
            [
                'naziv' => 'Jabuka',
                'opis' => 'Sveže crvene jabuke',
                'cena' => 90,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 2 
            ],
            [
                'naziv' => 'Krompir',
                'opis' => 'Beli krompir za kuvanje',
                'cena' => 109.99,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 2 
            ],
            [
                'naziv' => 'Krastavac',
                'opis' => 'Krastavac dugi komad',
                'cena' => 109.99,
                'velicina_pakovanja' => 0.35,
                'kategorija_namirnica_id' => 2 
            ],
            [
                'naziv' => 'Pavlaka',
                'opis' => 'Kisela pavlaka 20%',
                'cena' => 92,
                'velicina_pakovanja' => 0.18,
                'kategorija_namirnica_id' => 4 
            ],
            [
                'naziv' => 'Mleko',
                'opis' => 'Sveže mleko 2.8%',
                'cena' => 154.99,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 4 
            ],
            [
                'naziv' => 'Feta sir',
                'opis' => 'Somborska feta',
                'cena' => 359.99,
                'velicina_pakovanja' => 0.5,
                'kategorija_namirnica_id' => 4
            ],  
            [
                'naziv' => 'Ovsene pahuljice',
                'opis' => 'Ovsene pahuljice dr Oetker',
                'cena' => 300,
                'velicina_pakovanja' => 0.75,
                'kategorija_namirnica_id' => 5 
            ],
            [
                'naziv' => 'Bademovo mleko',
                'opis' => 'Sveže bademovo mleko',
                'cena' => 444.99,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 5
            ],
            [
                'naziv' => 'Puter od kikirikija',
                'opis' => 'Organski puter od kikirikija',
                'cena' => 299.99,
                'velicina_pakovanja' => 0.17,
                'kategorija_namirnica_id' => 5
            ],  
            [
                'naziv' => 'Mlevena plazma',
                'opis' => 'Keks mlevena plazma',
                'cena' => 254.99,
                'velicina_pakovanja' => 0.3,
                'kategorija_namirnica_id' => 6 
            ],
            [
                'naziv' => 'Cokolada za kuvanje',
                'opis' => 'Menaž čokolada za kuvanje',
                'cena' => 232.99,
                'velicina_pakovanja' => 0.2,
                'kategorija_namirnica_id' => 6
            ],
            [
                'naziv' => 'Nutella',
                'opis' => 'krem od lešnika Nutella',
                'cena' => 779.99,
                'velicina_pakovanja' => 0.7,
                'kategorija_namirnica_id' => 6
            ],
            [
                'naziv' => 'Brašno',
                'opis' => 'Brašno tip 500',
                'cena' => 50.99,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 7
            ],
            [
                'naziv' => 'Jaja',
                'opis' => '10 svežih jaja',
                'cena' => 234.99,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 7
            ],
            
            [
                'naziv' => 'Ulje',
                'opis' => 'Suncokretovo ulje',
                'cena' => 234.99,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 7
            ],
            [
                'naziv' => 'Kvasac',
                'opis' => 'Kesica kvasca',
                'cena' => 52.99,
                'velicina_pakovanja' => 0.01,
                'kategorija_namirnica_id' => 7

            ],
            [
                'naziv' => 'Šećer',
                'opis' => 'Beli kristal šećer',
                'cena' => 114.99,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 7

            ],
            [
                'naziv' => 'So',
                'opis' => 'Kuhinjska so kutija',
                'cena' => 71.99,
                'velicina_pakovanja' => 1,
                'kategorija_namirnica_id' => 7

            ],


            
        ]);
    }
}
