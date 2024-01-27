<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStavkaKorpaTable extends Migration
{
    public function up()
    {
        Schema::create('stavka_korpa', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('korpa_id');
            $table->foreign('korpa_id')->references('id')->on('korpa');
            $table->unsignedBigInteger('namirnica_id');
            $table->foreign('namirnica_id')->references('id')->on('namirnica');
           
        });
    }

    public function down()
    {
        Schema::dropIfExists('stavka_korpa');
    }
}
