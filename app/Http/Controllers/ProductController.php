<?php


namespace App\Http\Controllers;


use App\Models\Produktuak;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{
   public function index()
   {
    $productos = $this->getProductos();
    return Inertia::render('Mainfolder/denda', ['productos' => $productos]);
   }
   public function indexAdmin()
   {
    $productos = $this->getProductos();
    return Inertia::render('Mainfolder/dendaAdmin', ['productos' => $productos]);
   }


   public function store(Request $request)
   {
       $validatedData = $request->validate([
           'name' => 'required',
           'price' => 'required|numeric',
           'seller' => '',
           'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
       ]);


       $validatedData['seller'] = auth()->id();

       $imageName = uniqid() . '_' . time() . '.' . $request->file('image')->extension();

       $request->file('image')->storeAs("public/images", $imageName);

       $image = "/storage/images/{$imageName}";

       $validatedData["image"] = $image;

       $product = Produktuak::create($validatedData);


       return redirect()->route('produktuak');
   }


   public function getProductos()
   {
       $productos = Produktuak::all();

       return $productos;
   }
}
