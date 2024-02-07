<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


class LoggedController extends Controller
{

    public function index(Request $request) {
        $email = $request->input('userEmail');
        return Inertia::render('Mainfolder/Logged', ['userEmail' => $email]);
    }

}
