<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class korisnik extends Authenticatable
{

    use HasApiTokens, HasFactory, Notifiable;

    protected $table='korisnik';
    public $timestamps = false;

    use HasFactory;

    public function korpa(){
        return $this->hasMany(korpa::class);
    }
    protected $fillable = [
        'id',
        'Ime',
        'Prezime',
        'Adresa',
        'Email',
        'broj_telefona',
        'password',
    ];
}


