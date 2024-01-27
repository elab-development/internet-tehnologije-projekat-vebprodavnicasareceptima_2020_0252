<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class namirnica extends Model
{
    protected $table='namirnica';
    public $timestamps = false;

    use HasFactory;

    public function kategorijaNamirnica(){
        return $tnis->belongsTo(kategorija_namirnice::class);
    }

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
        'kategorija_namirnica_id',
        

    ];

   
    
    
}
