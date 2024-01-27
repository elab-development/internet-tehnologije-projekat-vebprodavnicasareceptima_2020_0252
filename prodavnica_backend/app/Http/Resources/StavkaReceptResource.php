<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StavkaReceptResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            
            
            'Namirnica: ' => new NamirnicaResource($this->namirnica->naziv),
            
            'Količina namirnice: ' => $this->kolicina_namirnice,
           
           
            
        ];
    }
}
