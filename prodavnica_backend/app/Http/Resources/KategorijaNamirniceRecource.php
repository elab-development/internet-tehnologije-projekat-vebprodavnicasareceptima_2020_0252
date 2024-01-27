<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KategorijaNamirniceRecource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return [
            'ID kategorije namirnice: ' => $this->id,
            'Naziv kategorije namirnice: ' => $this->naziv,
            
        ];
    }
}
