<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\stavka_korpa>
 */
class StavkaKorpaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'korpa_id' => \App\Models\korpa::factory(),
            'namirnica_id' => \App\Models\namirnica::factory()
        ];
    }
}
