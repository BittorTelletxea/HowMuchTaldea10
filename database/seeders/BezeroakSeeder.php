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
         'name' => 'Elbicho',
         'email' => 'bichosexual@gmail.com',
         'password' => bcrypt('elbicho7'),
         'mota' => 'Arrunta',
       ]);

       DB::table('bezeroak')->insert([
           'name' => 'ramirosantos',
           'email' => 'ramirosantos@gmail.com',
           'password' => bcrypt('ramirosantos'),
           'mota' => 'Arrunta',
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

   DB::table('produktuak')->insert([
      'name' => 'audi rs 6',
      'price' => '100.000',
      'seller' => '1',
      'rate' => 0,
      'image' => '/storage/images/65a506a8b8708_1705313960.jpg',
     ]);
	

   DB::table('produktuak')->insert([
      'name' => 'iphone 14 pro max',
      'price' => '1250',
      'seller' => '1',
      'rate' => 0,
      'image' => '/storage/images/65a5072d3b710_1705314093.jpg',
     ]);

     DB::table('produktuak')->insert([
      'name' => 'Txapela ferrari 16',
      'price' => '30',
      'seller' => '1',
      'rate' => 0,
      'image' => '/storage/images/65a507470d979_1705314119.jpg',
     ]);

     DB::table('produktuak')->insert([
      'name' => 'Txapela Fernando Alonso',
      'price' => '30',
      'seller' => '1',
      'rate' => 0,
      'image' => '/storage/images/65a507570f9f7_1705314135.jpg',
     ]);

     DB::table('produktuak')->insert([
      'name' => 'iphone 13',
      'price' => '800',
      'seller' => '1',
      'rate' => 0,
      'image' => '/storage/images/65a5079be73f7_1705314203.jpg',
     ]);

     DB::table('produktuak')->insert([
      'name' => 'EBizikleta',
      'price' => '3000',
      'seller' => '1',
      'rate' => 0,
      'image' => '/storage/images/65a5084345580_1705314371.png',
     ]);

     DB::table('produktuak')->insert([
      'name' => 'Eski',
      'price' => '130',
      'seller' => '1',
      'rate' => 0,
      'image' => '/storage/images/65a508db6610b_1705314523.jpg',
     ]);

     DB::table('produktuak')->insert([
      'name' => 'Scooter',
      'price' => '1.000',
      'seller' => '1',
      'rate' => 0,
      'image' => '/storage/images/65a50938725cf_1705314616.png',
     ]);

     DB::table('produktuak')->insert([
      'name' => 'Honda RR',
      'price' => '60.000',
      'seller' => '2',
      'rate' => 0,
      'image' => '/storage/images/65a670a501c27_1705406629.jpg',
     ]);

     DB::table('produktuak')->insert([
      'name' => 'Fernando Alonso',
      'price' => '999.999',
      'seller' => '2',
      'rate' => 0,
      'image' => '/storage/images/65a9175730329_1705580375.jpg',
     ]);
   }
}
