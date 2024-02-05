<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mezua extends Model
{
    use HasFactory;

    protected $table = 'kontaktua';

    protected $fillable = ['name','lastname','email','number','message','bezeroa']; 
    protected $primaryKey = 'id';
    public $timestamps = false; 

    protected $rememberTokenName = null; 
}
