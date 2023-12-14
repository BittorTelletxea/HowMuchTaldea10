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
	}
}
