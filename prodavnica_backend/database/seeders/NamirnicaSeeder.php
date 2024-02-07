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
              
                'slika_path'=>'assets/jabuke.jpg'
            ],
            [
                'naziv' => 'Krompir',
                'opis' => 'Beli krompir za kuvanje',
                'cena' => 109.99,
                'velicina_pakovanja' => '1 kg',
              
                'slika_path'=>'assets/krompir.jpg'
            ],
            [
                'naziv' => 'Krastavac',
                'opis' => 'Krastavac dugi komad',
                'cena' => 109.99,
                'velicina_pakovanja' => '350g',
               
                'slika_path'=>'assets/krastavac.jpg' 
            ],
            [
                'naziv' => 'Zelena salata',
                'opis' => 'Sveža, oprana',
                'cena' =>   70.99,
                'velicina_pakovanja' => '150g',
               
                'slika_path'=>'assets/salata.jpg' 
            ],

           [
                'naziv' => 'Luk crveni',
                'opis' => 'Domaći luk',
                'cena' =>   89.99,
                'velicina_pakovanja' => '1 kg',
               
                'slika_path'=>'assets/luk.jpg' 
            ],
            [
                'naziv' => 'Paradajz',
                'opis' => 'Svež, opran',
                'cena' =>   249.99,
                'velicina_pakovanja' => '1 kg',
               
                'slika_path'=>'assets/paradajz.jpg' 
            ],
          
         
            [
                'naziv' => 'Pavlaka',
                'opis' => 'Kisela pavlaka 20%',
                'cena' => 92,
                'velicina_pakovanja' => '180 g',
             
                'slika_path'=>'assets/pavlaka.jpg' 
            ],
            [
                'naziv' => 'Mleko',
                'opis' => 'Sveže mleko 2.8%',
                'cena' => 154.99,
                'velicina_pakovanja' => '1 l',
             
                'slika_path'=>'assets/mleko.jpg'
            ],
            [
                'naziv' => 'Beli sir',
                'opis' => 'Beli polumasni sir',
                'cena' => 359.99,
                'velicina_pakovanja' => '500 g',
             
                'slika_path'=>'assets/sir.jpg'
            ], 
            [
                'naziv' => 'Pirinač',
                'opis' => 'Pirinač dugo zrno',
                'cena' => 200,
                'velicina_pakovanja' => '500 g',
             
                'slika_path'=>'assets/pirinac.jpg'

               
            ] ,
            [
                'naziv' => 'Testenina',
                'opis' => 'Testenina Fusilli',
                'cena' => 200,
                'velicina_pakovanja' => '500 g',
             
                'slika_path'=>'assets/testenina.jpg'

               
            ] ,
            [
                'naziv' => 'Ovsene pahuljice',
                'opis' => 'Ovsene pahuljice dr Oetker',
                'cena' => 300,
                'velicina_pakovanja' => '750 g',
            
                'slika_path'=>'assets/ovsene.jpg'
            ],
            [
                'naziv' => 'Bademovo mleko',
                'opis' => 'Sveže bademovo mleko',
                'cena' => 444.99,
                'velicina_pakovanja' => '1 l',
             
                'slika_path'=>'assets/bademovo.jpg'
            ],
            [
                'naziv' => 'Puter od kikirikija',
                'opis' => 'Organski puter od kikirikija',
                'cena' => 299.99,
                'velicina_pakovanja' => '150g',
           
                'slika_path'=>'assets/kikiriki.jpg'
            ],  
            [
                'naziv' => 'Mlevena plazma',
                'opis' => 'Keks mlevena plazma',
                'cena' => 254.99,
                'velicina_pakovanja' => '300 g',
              
                'slika_path'=>'assets/mlevena.jpg'
            ],
            [
                'naziv' => 'Cokolada za kuvanje',
                'opis' => 'Cokolada za kuvanje',
                'cena' => 232.99,
                'velicina_pakovanja' => '200 g',
             
                'slika_path'=>'assets/cokolada.jpg'
            ],
            [
                'naziv' => 'Čokoladni krem',
                'opis' => 'Čokoladni krem sa lešnikfom',
                'cena' => 779.99,
                'velicina_pakovanja' => '700 g',
            
                'slika_path'=>'assets/cokoladnikrem.jpg'
            ],
            [
                'naziv' => 'Brašno',
                'opis' => 'Brašno tip 500',
                'cena' => 50.99,
                'velicina_pakovanja' => '1 kg',
              
                'slika_path'=>'assets/brasno.jpg'
            ],
            [
                'naziv' => 'Jaja',
                'opis' => '10 svežih jaja',
                'cena' => 234.99,
                'velicina_pakovanja' => '10 komada',
             
                'slika_path'=>'assets/jaja.jpg'
            ],
            
            [
                'naziv' => 'Ulje',
                'opis' => 'Suncokretovo ulje',
                'cena' => 234.99,
                'velicina_pakovanja' => '1 l',
               
                'slika_path'=>'assets/ulje.jpg'
            ],
            [
                'naziv' => 'Prašak za pecivo',
                'opis' => 'Kesica praška za pecivo',
                'cena' => 52.99,
                'velicina_pakovanja' => '10 g',
               
                'slika_path'=>'assets/prasak.jpg'

            ],
            [
                'naziv' => 'Šećer',
                'opis' => 'Beli kristal šećer',
                'cena' => 114.99,
                'velicina_pakovanja' => '1 kg',
               
                'slika_path'=>'assets/secer.jpg'

            ],
            [
                'naziv' => 'So',
                'opis' => 'Kuhinjska so kutija',
                'cena' => 71.99,
                'velicina_pakovanja' => '1 kg',
      
                'slika_path'=>'assets/so.jpg'

            ],
            
            [
                'naziv' => 'Pileci file',
                'opis' => 'Svezi pileći file',
                'cena' => 385.00,
                'velicina_pakovanja' => '500 g',
      
                'slika_path'=>'assets/pilecifile.jpg'

            ],
            [
                'naziv' => 'Banane',
                'opis' => 'Sveže banane',
                'cena' => 189.00,
                'velicina_pakovanja' => '1 kg',
      
                'slika_path'=>'assets/Banane.jpg'

            ]


            
        ]);
    }
}
