<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DodajBrojTelefonaUKorisnik extends Migration
{
    public function up()
    {
        Schema::table('korisnik', function (Blueprint $table) {
            $table->string('broj_telefona')->nullable()->after('email'); 
        });
    }

    public function down()
    {
        Schema::table('korisnik', function (Blueprint $table) {
            $table->dropColumn('broj_telefona'); 
        });
    }
}
