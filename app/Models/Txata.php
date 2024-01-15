<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Txata extends Model
{
    public function bezeroak()
   {
       return $this->belongsToMany(Bezero::class, 'mezuak');
   }


   public function mezuak()
   {
       return $this->hasMany(Mezuak::class);
   }

}
