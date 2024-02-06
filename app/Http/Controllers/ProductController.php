<?php


namespace App\Http\Controllers;

use App\Http\Requests\ProductUpdateRequest;
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
   public function destroy($id)
{
    try {
        
        $producto = Produktuak::findOrFail($id);

        $producto->delete();
        
        return response()->json(['message' => 'Producto eliminado exitosamente']);
    } catch (\Exception $e) {
       
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
public function update(ProductUpdateRequest $request, $id)
{
    $request->validate([
        'name' => ['string', 'max:255', 'nullable'],
        'price' => ['integer', 'nullable'],
    ]);
    
    $product = Produktuak::findOrFail($id);
    $product->update($request->validated());

    return redirect()->route('produktuak.index'); 
}

   

   public function getProductos()
   {
       $productos = Produktuak::all();

       return $productos;
   }
}
