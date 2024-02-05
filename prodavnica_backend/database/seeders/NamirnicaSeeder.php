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
                'velicina_pakovanja' => '1 kg',
                'kategorija_namirnica_id' => 2 ,
                'slika_path'=>'assets/jabuke.jpg'
            ],
            [
                'naziv' => 'Krompir',
                'opis' => 'Beli krompir za kuvanje',
                'cena' => 109.99,
                'velicina_pakovanja' => '1 kg',
                'kategorija_namirnica_id' => 2,
                'slika_path'=>'assets/krompir.jpg'
            ],
            [
                'naziv' => 'Krastavac',
                'opis' => 'Krastavac dugi komad',
                'cena' => 109.99,
                'velicina_pakovanja' => '350g',
                'kategorija_namirnica_id' => 2,
                'slika_path'=>'assets/jabuke.jpg' 
            ],
            [
                'naziv' => 'Pavlaka',
                'opis' => 'Kisela pavlaka 20%',
                'cena' => 92,
                'velicina_pakovanja' => '180 g',
                'kategorija_namirnica_id' => 4,
                'slika_path'=>'assets/jabuke.jpg' 
            ],
            [
                'naziv' => 'Mleko',
                'opis' => 'Sveže mleko 2.8%',
                'cena' => 154.99,
                'velicina_pakovanja' => '1 l',
                'kategorija_namirnica_id' => 4,
                'slika_path'=>'assets/mleko.jpg'
            ],
            [
                'naziv' => 'Beli sir',
                'opis' => 'Beli polumasni sir',
                'cena' => 359.99,
                'velicina_pakovanja' => '500 g',
                'kategorija_namirnica_id' => 4,
                'slika_path'=>'assets/sir.jpg'
            ],  
            [
                'naziv' => 'Ovsene pahuljice',
                'opis' => 'Ovsene pahuljice dr Oetker',
                'cena' => 300,
                'velicina_pakovanja' => '750 g',
                'kategorija_namirnica_id' => 5,
                'slika_path'=>'assets/jabuke.jpg'
            ],
            [
                'naziv' => 'Bademovo mleko',
                'opis' => 'Sveže bademovo mleko',
                'cena' => 444.99,
                'velicina_pakovanja' => '1 l',
                'kategorija_namirnica_id' => 5,
                'slika_path'=>'assets/jabuke.jpg'
            ],
            [
                'naziv' => 'Puter od kikirikija',
                'opis' => 'Organski puter od kikirikija',
                'cena' => 299.99,
                'velicina_pakovanja' => '150g',
                'kategorija_namirnica_id' => 5,
                'slika_path'=>'assets/jabuke.jpg'
            ],  
            [
                'naziv' => 'Mlevena plazma',
                'opis' => 'Keks mlevena plazma',
                'cena' => 254.99,
                'velicina_pakovanja' => '300 g',
                'kategorija_namirnica_id' => 6 ,
                'slika_path'=>'assets/jabuke.jpg'
            ],
            [
                'naziv' => 'Cokolada za kuvanje',
                'opis' => 'Cokolada za kuvanje',
                'cena' => 232.99,
                'velicina_pakovanja' => '200 g',
                'kategorija_namirnica_id' => 6,
                'slika_path'=>'assets/cokolada.jpg'
            ],
            [
                'naziv' => 'Čokoladni krem',
                'opis' => 'Čokoladni krem sa lešnikfom',
                'cena' => 779.99,
                'velicina_pakovanja' => '700 g',
                'kategorija_namirnica_id' => 6,
                'slika_path'=>'assets/cokoladnikrem.jpg'
            ],
            [
                'naziv' => 'Brašno',
                'opis' => 'Brašno tip 500',
                'cena' => 50.99,
                'velicina_pakovanja' => '1 kg',
                'kategorija_namirnica_id' => 7,
                'slika_path'=>'assets/brasno.jpg'
            ],
            [
                'naziv' => 'Jaja',
                'opis' => '10 svežih jaja',
                'cena' => 234.99,
                'velicina_pakovanja' => '10 komada',
                'kategorija_namirnica_id' => 7,
                'slika_path'=>'assets/jaja.jpg'
            ],
            
            [
                'naziv' => 'Ulje',
                'opis' => 'Suncokretovo ulje',
                'cena' => 234.99,
                'velicina_pakovanja' => '1 l',
                'kategorija_namirnica_id' => 7,
                'slika_path'=>'assets/ulje.jpg'
            ],
            [
                'naziv' => 'Prašak za pecivo',
                'opis' => 'Kesica praška za pecivo',
                'cena' => 52.99,
                'velicina_pakovanja' => '10 g',
                'kategorija_namirnica_id' => 7,
                'slika_path'=>'assets/prasak.jpg'

            ],
            [
                'naziv' => 'Šećer',
                'opis' => 'Beli kristal šećer',
                'cena' => 114.99,
                'velicina_pakovanja' => '1 kg',
                'kategorija_namirnica_id' => 7,
                'slika_path'=>'assets/secer.jpg'

            ],
            [
                'naziv' => 'So',
                'opis' => 'Kuhinjska so kutija',
                'cena' => 71.99,
                'velicina_pakovanja' => '1 kg',
                'kategorija_namirnica_id' => 7,
                'slika_path'=>'assets/so.jpg'

            ],


            
        ]);
    }
}
