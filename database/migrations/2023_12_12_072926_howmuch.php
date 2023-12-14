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
     /* Schema::create('langileak', function (Blueprint $table) {
           $table->id();
           $table->string('izena');
           $table->string('email');
           $table->enum('mota', ['Tasadoreak', 'Administradoreak']);
           $table->timestamps();
       });*/


       /*Schema::create('tasadoreak', function (Blueprint $table) {
           $table->id();
           $table->integer('kopurua');
           $table->timestamps();
       });


       Schema::create('administradoreak', function (Blueprint $table) {
           $table->id();
           $table->datetime('mantenduData');
           $table->timestamps();
       });

*/
       Schema::create('bezeroak', function (Blueprint $table) {
           $table->id();
           $table->string('izena');
           $table->string('email');
           $table->string('pasahitza');
           $table->enum('mota', ['Arrunta', 'Premium', 'VIP']);
           $table->string('Ordainketa metodoa');
           $table->timestamps();
       });

/*
       Schema::create('produktuak', function (Blueprint $table) {
           $table->id();
           $table->integer('balioa');
           $table->datetime('publikatzeData');
           $table->datetime('saltzeData');
           $table->string('saltzailea');
           $table->integer('puntuazioa');
           $table->datetime('tasazioData');
           $table->timestamps();
       });


       Schema::create('erosketak', function (Blueprint $table) {
           $table->id();
           $table->integer('balioa');
           $table->datetime('erosketaData');
           $table->string('eroslea');
           $table->timestamps();
       });*/

/*
       Schema::create('salmentak', function (Blueprint $table) {
           $table->id();
           $table->integer('balioa');
           $table->datetime('saltzeData');
           $table->string('saltzailea');
           $table->timestamps();
       });


       Schema::create('txata', function (Blueprint $table) {
           $table->id();
           $table->string('saltzailea');
           $table->string('eroslea');
           $table->datetime('sortzeData');
           $table->timestamps();
       });


       Schema::create('mezuak', function (Blueprint $table) {
           $table->id();
           $table->string('erabiltzailea');
           $table->string('mezua');
           $table->string('idtxata');
           $table->datetime('data');
           $table->timestamps();
       });


       Schema::create('komentarioak', function (Blueprint $table) {
           $table->id();   
           $table->string('erabiltzailea');
           $table->string('komentarioa');
           $table->datetime('data');
           $table->timestamps();
       });*/
   }


   /**
    * Reverse the migrations.
    */
    
   public function down(): void
   {
    Schema::dropIfExists('bezeroak');

   }

};
