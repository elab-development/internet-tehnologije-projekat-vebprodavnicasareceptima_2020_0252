<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNamirnicaTable extends Migration
{
    public function up()
    {
        Schema::create('namirnica', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->text('opis');
            $table->double('cena');
            $table->unsignedBigInteger('kategorija_namirnica_id');
            $table->foreign('kategorija_namirnica_id')->references('id')->on('kategorija_namirnice');
            
        });
    }

    public function down()
    {
        Schema::dropIfExists('namirnica');
    }
}
