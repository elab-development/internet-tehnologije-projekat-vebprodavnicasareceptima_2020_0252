<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stavka_korpa extends Model
{
    protected $table='stavka_korpa';
    public $timestamps = false;

    use HasFactory;

    public function korpa(){
        return $this->belogsTo(korpa::class, 'korpa_id');
    }

    public function namirnica(){
        return $this->belongsTo(namirnica::class, 'namirnica_id');
    }
    protected $fillable = [
        'id',
        'korpa_id',
        'namirnica_id',

    ];
}
