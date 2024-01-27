<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceptTable extends Migration
{
    public function up()
    {
        Schema::create('recept', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->text('tekst');
            $table->unsignedBigInteger('kategorija_recepta_id');
            $table->foreign('kategorija_recepta_id')->references('id')->on('kategorija_recept');
        });
    }

    public function down()
    {
        Schema::dropIfExists('recept');
    }
}
