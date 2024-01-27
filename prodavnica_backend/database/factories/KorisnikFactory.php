<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\korisnik>
 */
class KorisnikFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        //za definisanje random domena
        $nizDomena = array('gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com');
        $domen = $this->faker->randomElement($nizDomena);

        //za generianje random username-a za email adresu
        $userName = $this->faker->userName();
        

        return [
            'Ime' => $this->faker->name(),
            'Prezime' => $this->faker->lastname(),
            'Adresa' => $this->faker->streetAddress(),
            //pravljenje random emaila na osnovu generisanog user name-a i random domena
            'Email' => "$userName@$domen",
            //'broj_telefona' => $this->faker->phoneNumber(),
            'password' => password_hash(Str::random(12), PASSWORD_BCRYPT),
                 
        ];

        
    }
}
