<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKorpaTable extends Migration
{
    public function up()
    {
        Schema::create('korpa', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('korisnik_id');
            $table->foreign('korisnik_id')->references('id')->on('korisnik');
            
            $table->double('ukupna_cena');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('korpa');
    }
}
