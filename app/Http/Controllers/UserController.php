<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $bezeroa = $this->getUser();
        return Inertia::render('Mainfolder/BezeroakAdmin', ['bezeroa' => $bezeroa]);
    }

    public function getUser(){
        $bezeroa = User::withTrashed()->get();
        return $bezeroa;
    }

}
