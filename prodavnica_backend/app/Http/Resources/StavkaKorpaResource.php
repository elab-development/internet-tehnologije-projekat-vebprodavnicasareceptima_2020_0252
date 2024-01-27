<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StavkaKorpaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'Šifra stavke korpe: ' => $this->id,
            'Šifra korpe: ' => $this->korpa_id,
            
           
            'Namirnica: ' => new NamirnicaResource($this->namirnica->naziv),
            'Količina: ' => new NamirnicaResource($this->namirnica->velicina_pakovanja),
        ];
    }
}
