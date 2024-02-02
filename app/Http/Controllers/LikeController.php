<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use App\Models\Produktuak;

class LikeController extends Controller
{
    public function index() {
        $product = getProducts();
        return Inertia::render('Mainfolder/Like', ['productos' => $product]);
    }

    public function store(Request $request) {
        
        $validatedata = $request->validate([
            'produktua' => 'required',
            'bezeroa' => 'nullable'
        ]);

        $validatedata['bezeroa'] = auth()->id();

        $like = Like::create($validatedata);
        return redirect()->route('produktuak');
    }

    public function getLikes() {

        $likes = Like::all();
        return $likes;
    }

    public function userLikes(){
        $id = auth()->id();
        $likes = getLikes();
        foreach ($likes as $product){
            if ($product['bezeroa'] == $id){ 
                $returnLike = $product['produktua'];
            }
        }
        return $returnLike;
    }

    public function getProducts(){
        $productid = userLikes();
        $products = Produktuak::all();
        foreach ($products as $product) {
            foreach ($productid as $id){
                if ($product['id'] == $id){
                    $produktua = $product;
                }
            }
        }
        return $produktua;
    }
}
