<?php



namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    // Otras funciones relacionadas con la autenticación pueden ir aquí

    protected function redirectTo()
    {
        return '/Logged';
    }}