<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kategorija_recept extends Model
{
    protected $table='kategorija_recept';
    public $timestamps = false;

    use HasFactory;

    public function recept(){
        return $this->hasMany(recept::class);
    }
  
    protected $fillable = [
        'id',
        'naziv',
        

    ];

}
