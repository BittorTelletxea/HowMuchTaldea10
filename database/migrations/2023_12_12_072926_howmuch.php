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
    Schema::create('langileak', function (Blueprint $table) {
          $table->id();
          $table->string('izena');
          $table->string('email');
          $table->string('pasahitza');
          $table->enum('mota', ['Tasadoreak', 'Administradoreak']);
          $table->timestamps();
      });




      Schema::create('tasadoreak', function (Blueprint $table) {
          $table->id();
          $table->integer('kopurua');
          $table->timestamps();
      });




      Schema::create('administradoreak', function (Blueprint $table) {
          $table->id();
          $table->datetime('mantenduData');
          $table->timestamps();
      });




      Schema::create('bezeroak', function (Blueprint $table) {
          $table->id();
          $table->string('name');
          $table->string('email');
          $table->string('password');
          $table->rememberToken();
          $table->timestamp('email_verified_at')->nullable();
          $table->enum('mota', ['Arrunta', 'Premium', 'VIP']);
          $table->timestamps();
      });




      Schema::create('produktuak', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->decimal('price', 8, 2);
        $table->unsignedBigInteger('seller');
        $table->integer('rate')->default(0);
        $table->string('image');
        $table->timestamps();
    });





      Schema::create('erosketak', function (Blueprint $table) {
          $table->id();
          $table->integer('balioa');
          $table->datetime('erosketaData');
          $table->string('eroslea');
          $table->string('produktua');
          $table->timestamps();
      });




      Schema::create('salmentak', function (Blueprint $table) {
          $table->id();
          $table->integer('balioa');
          $table->datetime('saltzeData');
          $table->string('saltzailea');
          $table->string('produktua');
          $table->timestamps();
      });




      Schema::create('txatak', function (Blueprint $table) {
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
          $table->string('txata');
          $table->datetime('data');
          $table->timestamps();
      });




      Schema::create('komentarioak', function (Blueprint $table) {
          $table->id();
          $table->string('produktua'); 
          $table->string('erabiltzailea');
          $table->string('komentarioa');
          $table->datetime('data');
          $table->timestamps();
      });


      Schema::create('puntuazioak', function (Blueprint $table) {
       $table->id();  
       $table->string('idproduktua');
       $table->string('idbezeroa');
       $table->integer('puntuazioa');
       $table->timestamps();


       });
       Schema::create('tasazioak', function (Blueprint $table) {
        $table->id();  
        $table->string('mota');
        $table->string('marka');
        $table->string('modeloa');
        $table->integer('kilometrajea');
        $table->date('urtea');
        $table->enum('egoera', ['Oso ona', 'Ona', 'Txarra', 'Oso txarra']);



        $table->timestamps();
 
 
        });
  }




  /**
   * Reverse the migrations.
   */
  
  public function down(): void
  {
   Schema::dropIfExists('produktuak');   
  }


};
