<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Langileak extends Model
{
    public function tasadoreak()
    {

        return $this->hasOne(Tasadoreak::class);

    }
    
    public function administradoreak()
    {

        return $this->hasOne(Administradoreak::class);

    }
}

