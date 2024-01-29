<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasazioak extends Model
{
    
   protected $table = 'erosketak';


   /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = ['balioa','erosketaData','eroslea','produktua'];
   protected $primaryKey = 'id';
   public $timestamps = false;

}