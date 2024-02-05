<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use App\Models\Produktuak;
use Inertia\Inertia;

class LikeController extends Controller
{
    

    public function index() {
        $product = $this->getProducts();
        return Inertia::render('Mainfolder/Like', ['productos' => $product]);
    }

    public function store(Request $request) {
        
        $validatedata = $request->validate([
            'produktua' => 'required',
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
        $likes = $this->getLikes(); 
        foreach ($likes as $like){
            if ($like['bezeroa'] == $id){ 
                $returnLike[] = $like['produktua'];
                
            }
        }
        return $returnLike;
        
    }

    public function getProducts(){
        $productid = $this->userLikes();
        $products = Produktuak::all();
        foreach ($products as $product) {
            foreach ($productid as $id){
                if ($product['id'] == $id){
                    $produktua[] = $product;
                }
            }
        }
        return $produktua;
    }
}
