<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class PromeniNaziveKolonaUVelikaSlova extends Migration
{
    public function up()
    {
        DB::statement('ALTER TABLE korisnik CHANGE ime Ime VARCHAR(255)');
        DB::statement('ALTER TABLE korisnik CHANGE prezime Prezime VARCHAR(255)');
        DB::statement('ALTER TABLE korisnik CHANGE adresa Adresa VARCHAR(255)');
        DB::statement('ALTER TABLE korisnik CHANGE email Email VARCHAR(255)');
    }

    public function down()
    {
        DB::statement('ALTER TABLE korisnik CHANGE Ime ime VARCHAR(255)');
        DB::statement('ALTER TABLE korisnik CHANGE Prezime prezime VARCHAR(255)');
        DB::statement('ALTER TABLE korisnik CHANGE Adresa adresa VARCHAR(255)');
        DB::statement('ALTER TABLE korisnik CHANGE Email email VARCHAR(255)');
    }
}

