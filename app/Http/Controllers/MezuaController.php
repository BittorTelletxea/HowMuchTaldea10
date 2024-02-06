<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mezua;
use Inertia\Inertia;

class MezuaController extends Controller
{
    
    public function index(){
        $mezuak = $this->getMezuak();
        return Inertia::render('Mainfolder/KontaktuaAdmin', ['mezuak' => $mezuak]);
    }

    public function store(Request $request) {
        
        $validatedata = $request->validate([
            'name' => 'required',
            'lastname' => 'required',
            'email' => 'required',
            'number' => 'required',
            'message' => 'required',
        ]);

        $validatedata['bezeroa'] = auth()->id();

        $mezua = Mezua::create($validatedata);
        return redirect()->route('kontaktua');
    }

    public function getMezuak(){
        $mezua = Mezua::all();
        return $mezua;
    }


}
