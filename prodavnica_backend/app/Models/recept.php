<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class recept extends Model
{
    protected $table='recept';
    public $timestamps = false;

    use HasFactory;

    public function kategorijaRecept(){
        return $this->belongsTo(kategorija_recept::class);
    }

    public function stavkaRecept(){
        return $this->hasMany(stavka_recept::class);
    }
    protected $fillable = [
        'id',
        'naziv',
        'tekst',
            
        'kategorija_recepta_id',    

    ];

}
