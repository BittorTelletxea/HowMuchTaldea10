<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasazioak extends Model
{
    
   protected $table = 'tasazioak';


   /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = ['mota','marka','modeloa','kilometrajea','urtea','egoera'];
   protected $primaryKey = 'id';
   public $timestamps = false;

}
