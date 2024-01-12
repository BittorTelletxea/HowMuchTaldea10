<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tasadoreak extends Model
{
    public function bezeroak()
    {

        return $this->hasMany(Bezeroak::class);

    }

    public function produktuak()
    {

        return $this->hasMany(Produktuak::class);

    }

}
