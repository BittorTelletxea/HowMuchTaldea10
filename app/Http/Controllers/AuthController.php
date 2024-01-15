<?php



namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    // Otras funciones relacionadas con la autenticación pueden ir aquí

    protected function redirectTo()
    {
        return '/Logged';
    }
    public function login(Request $request)
{
    // Lógica de autenticación...

    // Enviar correo electrónico de autenticación
    $user = Auth::user(); // Obtener el usuario autenticado
    $user->sendEmailVerificationNotification();

    return inertia('/Logged'); // Redirigir o retornar la respuesta adecuada
}
}
    