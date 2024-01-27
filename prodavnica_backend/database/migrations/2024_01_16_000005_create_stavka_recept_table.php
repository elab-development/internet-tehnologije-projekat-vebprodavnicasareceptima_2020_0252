<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStavkaReceptTable extends Migration
{
public function up()
{
Schema::create('stavka_recept', function (Blueprint $table) {
$table->id();
$table->unsignedBigInteger('recept_id');
$table->foreign('recept_id')->references('id')->on('recept');
$table->unsignedBigInteger('namirnica_id');
$table->foreign('namirnica_id')->references('id')->on('namirnica');
$table->double('kolicina_namirnice');

});
}
public function down()
{
    Schema::dropIfExists('stavka_recept');
}

}