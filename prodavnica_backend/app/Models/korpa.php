<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class korpa extends Model
{
    protected $table='korpa';
    public $timestamps = false;

    use HasFactory;

    public function stavkaKorpa(){
        return $this->hasMany(stavka_korpa::class);
    }

    public function korisnik(){
        return $this->belongsTo(korisnik::class);
    }
    protected $fillable = [
        'id',
        'korisnik_id',
        'ukupna_cena',
        'created_at',
        'updated_at',

    ];
}
