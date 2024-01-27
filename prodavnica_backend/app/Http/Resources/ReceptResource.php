<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReceptResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'Šifra recepta: ' => $this->id,
            'Naziv: ' => $this->naziv,
            'Tekst recepta: ' => $this->tekst,
          
            'Kategorija recepta: ' => new KategorijaReceptResource($this->kategorijaRecept),
        ];
    }
}
