<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tasazioak; // Asegúrate de tener el use correcto para el modelo Tasazioak


class TasazioaController extends Controller
{
   public function index()
   {
       $productos = $this->getProductos();
       return Inertia::render('Konpone/DendaProduktuak', ['productos' => $productos]);
   }


   public function store(Request $request)
   {
       $validatedData = $request->validate([
           'mota' => 'required',
           'marka' => 'required',
           'modeloa' => 'required',
           'kilometrajea' => 'required | numeric',
           'urtea' => 'required',
           'egoera' => 'required',

           ]);




       $tasazioak = Tasazioak::create($validatedData);


       return redirect()->route('tasazioa');
   }


   public function getTasazioa()
   {
       $tasazioak = Tasazioak::all();
       return response()->json($tasazioak);
   }
}
