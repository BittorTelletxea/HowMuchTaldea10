<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Erosketak;

class ErosketaController extends Controller
{
    public function index()
   {
       $productos = $this->getProductos();
       return Inertia::render('Konpone/DendaProduktuak', ['productos' => $productos]);
   }


   public function store(Request $request)
   {
       $validatedData = $request->validate([
           'balioa' => 'required',
           'erosketaData' => 'required',
           'eroslea' => 'required',
           'produktua' => 'required',
           ]);




       $erosketak = Erosketak::create($validatedData);


       return redirect()->route('tasazioa');
   }


   public function getTasazioa()
   {
       $erosketak = Erosketak::all();
       return response()->json($erosketak);
   }
}
