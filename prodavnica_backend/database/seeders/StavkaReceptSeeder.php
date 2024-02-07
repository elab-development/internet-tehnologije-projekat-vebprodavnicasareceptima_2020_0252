<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StavkaReceptSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('stavka_recept')->insert([
            [
                'recept_id' => 1, 
                'namirnica_id' => 17, 
                'kolicina_namirnice' => 0.2
            ],
            [
                'recept_id' => 1,
                'namirnica_id' => 15, 
                'kolicina_namirnice' => 0.1
            ],
            [
                'recept_id' => 1, 
                'namirnica_id' => 18, 
                'kolicina_namirnice' => 0.3
            ],
            [
                'recept_id' => 1,
                'namirnica_id' => 19, 
                'kolicina_namirnice' => 0.2
            ],
            [
                'recept_id' => 1,
                'namirnica_id' => 20, 
                'kolicina_namirnice' => 0.2
            ],
            [
                'recept_id' => 1,
                'namirnica_id' => 8, 
                'kolicina_namirnice' => 0.2
            ],
         

            ///////////////////////////////////////////////////////       
            [
                'recept_id' => 2,
                'namirnica_id' => 8, 
                'kolicina_namirnice' => 1

            ],
            [
                'recept_id' => 2, 
                'namirnica_id' => 22, 
                'kolicina_namirnice' => 0.6
            ],
            [
                'recept_id' => 2, 
                'namirnica_id' => 18, 
                'kolicina_namirnice' => 0.1
            ],
            [
                'recept_id' => 2, 
                'namirnica_id' =>20, 
                'kolicina_namirnice' => 0.01

            ],
            [
                'recept_id' => 2, 
                'namirnica_id' => 19, 
                'kolicina_namirnice' => 0.06

            ],
           
/////////////////////////////////////////////////
            [
            'recept_id' => 3, 
            'namirnica_id' => 24, 
            'kolicina_namirnice' => 500
            ],
            [
                 'recept_id' => 3, 
                 'namirnica_id' => 4, 
                 'kolicina_namirnice' => 0.2
             ],

             [
                  'recept_id' => 3, 
                  'namirnica_id' => 6, 
                  'kolicina_namirnice' => 0.2
             ],
             [
                'recept_id' => 3, 
                'namirnica_id' => 19, 
                'kolicina_namirnice' => 0.1
           ],
           [
            'recept_id' => 3, 
            'namirnica_id' => 5, 
            'kolicina_namirnice' => 0.2
           ],
           [
            'recept_id' => 4, 
            'namirnica_id' => 18, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 4, 
            'namirnica_id' => 21, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 4, 
            'namirnica_id' => 23, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 4, 
            'namirnica_id' => 22, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 5, 
            'namirnica_id' => 24, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 5, 
            'namirnica_id' => 10, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 5, 
            'namirnica_id' => 5, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 6, 
            'namirnica_id' => 12, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 6, 
            'namirnica_id' => 13, 
            'kolicina_namirnice' => 1
           ],
           [
            'recept_id' => 6, 
            'namirnica_id' => 25, 
            'kolicina_namirnice' => 1
           ]



            
        ]);
    }
}
