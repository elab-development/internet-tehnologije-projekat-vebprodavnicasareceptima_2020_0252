<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\korpa>
 */
class KorpaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'korisnik_id' => \App\Models\korisnik::factory(),
            'ukupna_cena' => $this->faker->randomFloat(2, 10, 1000)
        ];
    }
}
