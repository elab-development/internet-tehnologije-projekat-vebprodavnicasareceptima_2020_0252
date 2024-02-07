<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('kategorija_recept');
        Schema::dropIfExists('kategorija_namirnice');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
