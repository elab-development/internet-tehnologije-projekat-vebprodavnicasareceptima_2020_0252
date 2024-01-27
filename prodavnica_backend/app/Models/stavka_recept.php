<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stavka_recept extends Model
{
    protected $table='stavka_recept';
    public $timestamps = false;

    use HasFactory;

    public function recept(){
        return $this->belongsTo(recept::class, 'recept_id');
    }

    public function namirnica(){
        return $this->belongsTo(namirnica::class, 'namirnica_id');
    }
    protected $fillable = [
        'id',
        'recept_id',
        'namirnica_id',
        'kolicina_namirnice',

    ];
}
