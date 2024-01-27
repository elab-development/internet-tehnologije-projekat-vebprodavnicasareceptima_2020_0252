<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\stavka_recept>
 */
class StavkaReceptFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'recept_id' => recept::factory(),
            'namirnica_id' => namirnica::factory(),
            'kolicina_namirnice' => $this->faker->randomNumber(2)
        ];
    }
}
