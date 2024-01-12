<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class BezeroakSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run() {
      // DB::table('bezeroak')->insert([
      //   'izena' => 'Mateu Laoz',
      //   'email' => 'mateito@gmail.com',
      //   'password' => bcrypt('mateulaoz1'),
      //   'mota' => 'Arrunta',
      //   'Ordainketa metodoa' => 'VISA',
      // ]);
     
      $pass= bcrypt('ramirosantos');
      $email= bcrypt('ramiro@gmail.com');

    
   
    DB::table('produktuak')->insert([
      'balioa' => 200,
      'publikatzeData' => '2023-03-12',
      'saltzailea' => 'david',
      'puntuazioa' => 3.9,
      'tasadorea' => '1',
    ]);
    DB::table('produktuak')->insert([
      'balioa' => 1200,
      'publikatzeData' => '2022-03-12',
      'saltzailea' => 'Jaime',
      'puntuazioa' => 3.3,
      'tasadorea' => '2',
    ]);
    DB::table('produktuak')->insert([
      'balioa' => 8000,
      'publikatzeData' => '2021-03-12',
      'saltzailea' => 'Julian',
      'puntuazioa' => 4.9,
      'tasadorea' => '3',
    ]);
    DB::table('produktuak')->insert([
      'balioa' => 600,
      'publikatzeData' => '2021-10-22',
      'saltzailea' => 'Jaime',
      'puntuazioa' => 3.1,
      'tasadorea' => '4',
    ]);
    DB::table('produktuak')->insert([
      'balioa' => 990,
      'publikatzeData' => '2023-12-12',
      'saltzailea' => 'Javi',
      'puntuazioa' => 4.4,
      'tasadorea' => '5',
    ]);
     DB::table('erosketak')->insert([
        'balioa' => 170,
        'erosketaData' => '2023-08-17',
        'eroslea' => 'Jaime',
        'produktua' => '1',
    ]);
    DB::table('erosketak')->insert([
      'balioa' => 980,
      'erosketaData' => '2023-02-17',
      'eroslea' => 'Raul',
      'produktua' => '2',
   ]);
   DB::table('erosketak')->insert([
    'balioa' => 800,
    'erosketaData' => '2023-08-12',
    'eroslea' => 'Ricardo',
    'produktua' => '3',
   ]);
   DB::table('erosketak')->insert([
    'balioa' => 1700,
    'erosketaData' => '2022-05-12',
    'eroslea' => 'Jaime',
    'produktua' => '4',
   ]);
   DB::table('erosketak')->insert([
    'balioa' => 760,
    'erosketaData' => '2021-12-10',
    'eroslea' => 'Mateu',
    'produktua' => '5',
   ]);
   DB::table('komentarioak')->insert([
    'produktua' => 1,
    'erabiltzailea' => 'Raul',
    'data' => '2023-08-17',
    'komentarioa' => 'Me ha timado el cabron',
   ]);
   DB::table('komentarioak')->insert([
    'produktua' => 2,
    'erabiltzailea' => 'Fraile',
    'data' => '2023-08-17',
    'komentarioa' => 'Producto horroroso',
   ]);
   DB::table('komentarioak')->insert([
    'produktua' => 3,
    'erabiltzailea' => 'Manu',
    'data' => '2023-12-07',
    'komentarioa' => 'Decepcion como mi Ponferradina',
   ]);
   DB::table('komentarioak')->insert([
    'produktua' => 4,
    'erabiltzailea' => 'Jose Luis',
    'data' => '2021-02-23',
    'komentarioa' => 'Coche de mierda, mental boom hermano',
   ]);
   DB::table('komentarioak')->insert([
    'produktua' => 5,
    'erabiltzailea' => 'Rubiales',
    'data' => '2021-11-17',
    'komentarioa' => 'Un pikito?',
   ]);
   DB::table('langileak')->insert([
    'izena' => 'Jaime Latre',
    'email' => 'jaimito@gmail.com',
    'pasahitza' => 'ja',
    'mota' => 'Tasadoreak',
   ]);
   DB::table('langileak')->insert([
    'izena' => 'Tamudo Gomez',
    'email' => 'tamu@ask.com',
    'pasahitza' => 'lacus',
    'mota' => 'Administradoreak',
   ]);
   
   
   DB::table('langileak')->insert([
    'izena' => 'George Messi',
    'email' => 'messi@businessweek.com',
    'pasahitza' => 'ante',
    'mota' => 'Tasadoreak',
   ]);
   
   
   DB::table('langileak')->insert([
    'izena' => 'Manu Gomes',
    'email' => 'gomi@nydailynews.com',
    'pasahitza' => 'ultrices',
    'mota' => 'Tasadoreak',
   ]);
   
   
   DB::table('langileak')->insert([
    'izena' => 'Kai Havertz',
    'email' => 'aottiwill3@imageshack.us',
    'pasahitza' => 'kia',
    'mota' => 'Tasadoreak',
   ]);
   
   
   DB::table('langileak')->insert([
    'izena' => 'Jacobo Smith',
    'email' => 'jacos@discuz.net',
    'pasahitza' => 'moro',
    'mota' => 'Tasadoreak',
   ]);
   DB::table('mezuak')->insert([
    'erabiltzailea' => 'Ronda',
    'data' => '2023-08-17',
    'mezua' => 'Si hombre, como 33?',
    'txata' => 1,
   ]);
   DB::table('mezuak')->insert([
    'erabiltzailea' => 'hugito',
    'data' => '2023-08-17',
    'mezua' => 'Productazo meso',
    'txata' => 2,
   ]);
   DB::table('mezuak')->insert([
    'erabiltzailea' => 'DavidSniper',
    'data' => '2023-12-07',
    'mezua' => 'Te detesto cabron',
    'txata' => 3,
   ]);
   DB::table('mezuak')->insert([
    'erabiltzailea' => 'Jaimitadas',
    'data' => '2021-02-23',
    'mezua' => 'kubo mejor que Nico Williams',
    'txata' => 4,
   ]);
   DB::table('mezuak')->insert([
    'erabiltzailea' => 'Raumin',
    'data' => '2021-11-17',
    'mezua' => 'No creo no?',
    'txata' => 5,
   ]);
   
	}
}
