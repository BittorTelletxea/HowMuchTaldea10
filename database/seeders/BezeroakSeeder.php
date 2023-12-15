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
		DB::table('bezeroak')->insert([
			'izena' => 'Mateu Laoz',
			'email' => 'mateito@gmail.com',
      'pasahitza' => 'mateu', 
      'mota' => 'Arrunta',
      'Ordainketa metodoa' => 'VISA',
		]);
    DB::table('bezeroak')->insert([
      'izena' => 'Filberte',
      'email' => 'fedyson0@ask.com',
      'pasahitza' => 'lacus',
      'mota' => 'Arrunta',
      'Ordainketa metodoa' => 'VISA',
  ]);
  
  DB::table('bezeroak')->insert([
      'izena' => 'Mano',
      'email' => 'mbaumert1@businessweek.com',
      'pasahitza' => 'ante',
      'mota' => 'Premium',
      'Ordainketa metodoa' => 'VISA',
  ]);
  
  DB::table('bezeroak')->insert([
      'izena' => 'Reinhold',
      'email' => 'rcawsby2@nydailynews.com',
      'pasahitza' => 'ultrices',
      'mota' => 'Premium',
      'Ordainketa metodoa' => 'VISA',
  ]);
  
  DB::table('bezeroak')->insert([
      'izena' => 'Alameda',
      'email' => 'aottiwill3@imageshack.us',
      'pasahitza' => 'est lacinia nisi',
      'mota' => 'Arrunta',
      'Ordainketa metodoa' => 'VISA',
  ]);
  
  DB::table('bezeroak')->insert([
      'izena' => 'Giacobo',
      'email' => 'givanyukov4@discuz.net',
      'pasahitza' => 'luctus',
      'mota' => 'Arrunta',
      'Ordainketa metodoa' => 'VISA',
  ]);
  
  DB::table('erosketak')->insert([
      'balioa' => 170,
      'erosketaData' => '2023-08-17',
      'eroslea' => 'Jaime',
  ]);
  DB::table('erosketak')->insert([
    'balioa' => 980,
    'erosketaData' => '2023-02-17',

    'eroslea' => 'Raul',
]);
DB::table('erosketak')->insert([
  'balioa' => 800,
  'erosketaData' => '2023-08-12',

  'eroslea' => 'Ricardo',
]);
DB::table('erosketak')->insert([
  'balioa' => 1700,
  'erosketaData' => '2022-05-12',
  'eroslea' => 'Jaime',
]);
DB::table('erosketak')->insert([
  'balioa' => 760,
  'erosketaData' => '2021-12-10',
  'eroslea' => 'Mateu',
]);
DB::table('komentarioak')->insert([
  'erabiltzailea' => 'Raul',
  'data' => '2023-08-17',
  'komentarioa' => 'Me ha timado el cabron',
]);
DB::table('komentarioak')->insert([
  'erabiltzailea' => 'Fraile',
  'data' => '2023-08-17',
  'komentarioa' => 'Producto horroroso',
]);
DB::table('komentarioak')->insert([
  'erabiltzailea' => 'Manu',
  'data' => '2023-12-07',
  'komentarioa' => 'Decepcion como mi Ponferradina',
]);
DB::table('komentarioak')->insert([
  'erabiltzailea' => 'Jose Luis',
  'data' => '2021-02-23',
  'komentarioa' => 'Coche de mierda, mental boom hermano',
]);
DB::table('komentarioak')->insert([
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
  'idtxata' => 1,
]);
DB::table('mezuak')->insert([
  'erabiltzailea' => 'hugito',
  'data' => '2023-08-17',
  'mezua' => 'Productazo meso',
  'idtxata' => 2,
]);
DB::table('mezuak')->insert([
  'erabiltzailea' => 'DavidSniper',
  'data' => '2023-12-07',
  'mezua' => 'Te detesto cabron',
  'idtxata' => 3,
]);
DB::table('mezuak')->insert([
  'erabiltzailea' => 'Jaimitadas',
  'data' => '2021-02-23',
  'mezua' => 'Nico paz mejor que take kubo',
  'idtxata' => 4,
]);
DB::table('mezuak')->insert([
  'erabiltzailea' => 'Raumin',
  'data' => '2021-11-17',
  'mezua' => 'No creo no?',
  'idtxata' => 5,
]);
DB::table('produktuak')->insert([
  'balioa' => 200,
  'publikatzeData' => '2023-03-12',
  'saltzeData' => '2023-04-12',
  'saltzailea' => 'david',
  'puntuazioa' => 3.9,
  'tasazioData' => '2021-09-12',
]);
DB::table('produktuak')->insert([
  'balioa' => 1200,
  'publikatzeData' => '2022-03-12',
  'saltzeData' => '2023-04-12',
  'saltzailea' => 'Jaime',
  'puntuazioa' => 3.3,
  'tasazioData' => '2021-10-12',
]);
DB::table('produktuak')->insert([
  'balioa' => 8000,
  'publikatzeData' => '2021-03-12',
  'saltzeData' => '2023-09-12',
  'saltzailea' => 'Julian',
  'puntuazioa' => 4.9,
  'tasazioData' => '2020-09-12',
]);
DB::table('produktuak')->insert([
  'balioa' => 600,
  'publikatzeData' => '2021-10-22',
  'saltzeData' => '2023-04-12',
  'saltzailea' => 'Jaime',
  'puntuazioa' => 3.1,
  'tasazioData' => '2021-10-12',
]);
DB::table('produktuak')->insert([
  'balioa' => 990,
  'publikatzeData' => '2023-12-12',
  'saltzeData' => '2023-12-14',
  'saltzailea' => 'Javi',
  'puntuazioa' => 4.4,
  'tasazioData' => '2023-09-12',
]);
	}
}
