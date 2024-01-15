<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Produktuak extends Model
{


   /**
    * The table associated with the model.
    *
    * @var string
    */
   protected $table = 'produktuak';


   /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = ['name','price','seller','rate','image'];
   protected $primaryKey = 'id';
   public $timestamps = false;


   protected $rememberTokenName = null;


   public function komentarioak()
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




  public function bezeroak()
  {


      return $this->belongsToMany(Bezeroak::class, 'puntuatu')->withPivot('puntuazioa');
     
  }


}











