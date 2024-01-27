<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KorpaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'Sifra korpe: ' => $this->id,
            'ID korisnika: ' => $this->korisnik_id,
            'Ukupna cena: ' => $this->ukupna_cena,
            'Napravljena: ' => $this->created_at,
            'Promenjena: ' => $this->updated_at,
            
            'Sadržaj korpe: ' => StavkaKorpaResource::collection($this->stavkaKorpa),
        ];
    }
}
