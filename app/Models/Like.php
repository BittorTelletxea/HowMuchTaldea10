<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $table = 'like';

    protected $fillable = ['produktua','bezeroa']; 
    protected $primaryKey = 'id';
    public $timestamps = false; 

    protected $rememberTokenName = null; 

}
