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
            
            
            $table->string('slika_path')->nullable(); 
            
        });
    }

    public function down()
    {
        Schema::dropIfExists('namirnica');
    }
}
