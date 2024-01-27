<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NamirnicaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'Šifra namirnice: ' => $this->id,
            'Naziv:' => $this->naziv,
            'Opis: ' => $this->opis,
            'Cena: ' => $this->cena,
            'Veličina pakovanja: ' => $this->velicina_pakovanja,
            'Kategorija namirnice: ' => new KategorijaNamirniceResource($this->kategorijaNamirnice),
            
        ];
    }
}
