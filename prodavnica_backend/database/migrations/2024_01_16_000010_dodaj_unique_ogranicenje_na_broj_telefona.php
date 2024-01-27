<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DodajUniqueOgranicenjeNaBrojTelefona extends Migration
{
    public function up()
    {
        Schema::table('korisnik', function (Blueprint $table) {
           
            $table->unique('broj_telefona', 'unique_broj_telefona');
        });
    }

    public function down()
    {
        Schema::table('korisnik', function (Blueprint $table) {
           
            $table->dropUnique('unique_broj_telefona');
        });
    }
}
