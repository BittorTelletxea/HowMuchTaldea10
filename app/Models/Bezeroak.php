<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bezeroak extends Model
{

    public function Komentarioak()
   {

       return $this->hasMany(Komentarioak::class);

   }


   public function erosketak()
   {

       return $this->hasMany(Erosketak::class);

   }


   public function salmentak()
   {

       return $this->hasMany(Salmentak::class);

   }


   public function produktuakbaloratu()
   {

       return $this->belongsToMany(Produktu::class, 'idproduktua');

   }


   public function txata()
   {

       return $this->belongsToMany(Txata::class, 'txata');

   }


   public function mezuak()
   {

       return $this->hasMany(Mezuak::class);

   }

}
