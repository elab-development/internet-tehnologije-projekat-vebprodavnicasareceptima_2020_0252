<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\namirnica>
 */
class NamirnicaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'naziv' => $this->faker->word,
            'opis' => $this->faker->sentence,
            'cena' => $this->faker->randomFloat(2, 100, 1000), 
            'velicina_pakovanja' => $this->faker->randomFloat(2, 0, 1),
            'kategorija_namirnica_id' => \App\Models\kategorija_namirnice::factory()
        ];
    }
}
