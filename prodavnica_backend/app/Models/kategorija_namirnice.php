<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kategorija_namirnice extends Model
{

    protected $table='kategorija_namirnice';
    public $timestamps = false;

    use HasFactory;

    public function namirnica(){
        return $this->hasMany(namirnica::class);
    }
    protected $fillable = [  
        'id',
        'naziv',
    ];


}
