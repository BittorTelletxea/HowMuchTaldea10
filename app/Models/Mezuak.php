<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mezuak extends Model
{
    public function bezeroak()
   {

       return $this->belongsTo(Bezeroak::class);

   }

   public function txata()
   {

       return $this->belongsTo(Txata::class);

   }

}
