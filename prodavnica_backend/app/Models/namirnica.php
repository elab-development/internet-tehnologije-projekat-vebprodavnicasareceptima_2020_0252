<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class namirnica extends Model
{
    protected $table='namirnica';
    public $timestamps = false;

    use HasFactory;

   

    public function stavkaRecepta(){
        return $this->hasMany(stavka_recept::class);
    }

    public function stavakKorpe(){
        return $this->hasMany(stavka_korpe::class);
    }

    protected $fillable = [
        'id',
        'naziv',
        'opis',
        'cena',
        'velicina_pakovanja',
     
        'slika_path',
        

    ];

   
    
    
}
