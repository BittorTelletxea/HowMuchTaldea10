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
      /*  Schema::table('tasadoreak', function (Blueprint $table){
            $table->foreignId('id')->references('id')->on('langileak');
        });

        Schema::table('administradoreak', function (Blueprint $table) {
            $table->foreignId('id')->references('id')->on('langileak');
        });

        Schema::table('produktuak', function (Blueprint $table) {
            $table->foreign('puntuazioa')->references('puntuazioa')->on('puntuazioak');
        });

        Schema::table('produktuak', function (Blueprint $table) {
            $table->foreign('saltzailea')->references('id')->on('bezeroak');
        });

        Schema::table('produktuak', function (Blueprint $table) {
            $table->foreign('produktua')->references('id')->on('produktuak');
        });

        Schema::table('komentarioak', function (Blueprint $table) {
            $table->foreign('tasadorea')->references('id')->on('tasadoreak');
        });

        Schema::table('komentarioak', function (Blueprint $table) {
            $table->foreign('erabiltzailea')->references('id')->on('bezeroak');
        });

        Schema::table('erosketak', function (Blueprint $table) {
            $table->foreign('eroslea')->references('id')->on('bezeroak');
        });

        Schema::table('erosketak', function (Blueprint $table) {
            $table->foreign('produktua')->references('id')->on('produktuak');
        });

        Schema::table('salmentak', function (Blueprint $table) {
            $table->foreign('saltzailea')->references('id')->on('bezeroak');
        });

        Schema::table('salmentak', function (Blueprint $table) {
            $table->foreign('produktua')->references('id')->on('produktuak');
        });

        Schema::table('mezuak', function (Blueprint $table) {
            $table->foreign('erabiltzailea')->references('id')->on('bezeroak');
        });

        Schema::table('mezuak', function (Blueprint $table) {
            $table->foreign('txata')->references('id')->on('txatak');
        });*/

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
