<?php


use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TasazioaController;
use App\Http\Controllers\LikeController;


Route::get('/', function () {
   return Inertia::render('Mainfolder/App', []);
});

Route::get('/Perfil', function () {
   return Inertia::render('Mainfolder/Perfil', []);
});
Route::get('/Login', function () {
   return Inertia::render('Login', []);
});
Route::get('/login', function () {
   return Inertia::render('Login', []);
});
Route::get('/Signup', function () {
   return Inertia::render('Mainfolder/Signup', []);
});
Route::get('/Logged', function () {
   return Inertia::render('Mainfolder/Logged', []);
});
Route::get('/Perfil', function () {
   return Inertia::render('Mainfolder/Perfil', []);
});
Route::get('/Salmentak', function () {
   return Inertia::render('Mainfolder/Salmentak', []);
});
Route::get('/Erosketak', function () {
   return Inertia::render('Mainfolder/Erosketak', []);
});
Route::get('/Estatistikak', function () {
   return Inertia::render('Mainfolder/Estatistikak', []);
});
Route::get('/Tasazioa', function () {
   return Inertia::render('Mainfolder/tasazioa', []);
});
Route::get('/tasazioab', function () {
   return Inertia::render('Mainfolder/tasazioab', []);
});
Route::get('/Denda', [ProductController::class, 'index']);
Route::get('/Kontaktua', function () {
   return Inertia::render('Mainfolder/kontaktua', []);
});
Route::get('/dashboard', function () {
   return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/gehitu', function() {
   return Inertia::render('Mainfolder/ProduktuaGehitu', []);
});
Route::get('/Pasahitza', function() {
   return Inertia::render('Mainfolder/pasahitza', []);
});
Route::get('/Pasahitza', function() {
   return Inertia::render('Mainfolder/pasahitza', []);
});
Route::get('/editatu/{id}', function() {
   return Inertia::render('Mainfolder/editatu', []);
});
Route::post('/Denda', [ProductController::class, 'store'])->name('produktuak');
Route::post('/Tasazioa', [TasazioaController::class, 'store'])->name('tasazioa');

Route::get('/produktuak', [ProductController::class, 'indexAdmin']);

Route::middleware('auth')->group(function () {
   Route::get('/Perfil', [ProfileController::class, 'edit'])->name('profile.edit');
   Route::patch('/Perfil', [ProfileController::class, 'update'])->name('profile.update');
   Route::delete('/Perfil', [ProfileController::class, 'destroy'])->name('profile.destroy');
   Route::get('/Perfil', [ProfileController::class, 'edit'])->name('profile.edit');
   Route::patch('/Perfil', [ProfileController::class, 'update'])->name('profile.update');
   Route::delete('/Perfil', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::delete('/api/products/{id}', [ProductController::class, 'destroy']);

Route::delete('/user/deleted/{id}', [ProfileController::class, 'forceDeleted'])->name('profile.deleted');
Route::get('/user/restore/{id}', [ProfileController::class, 'restore'])->name('profile.restore');
Route::get('/user/restore/{id}', [ProfileController::class, 'restore'])->name('profile.restore');

Route::get('/Perfil/estatistikak', function(){
   return Inertia::render('Mainfolder/Estatistikak', []);
});

Route::get('/Erosi', function(){
   return Inertia::render('Mainfolder/Erosi', []);
});

Route::delete('/Delete/{productid}', [ProductController::class, 'destroy']);

Route::post('/likeEman', [LikeController::class, 'store'])->name('likeman');
Route::get('/Like', [LikeController::class, 'index']);

require __DIR__.'/auth.php';


