<?php


use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return inertia('Login');
    }

    public function login(Request $request)
    {
        // Valida las credenciales del usuario
        $request->validate([
            'email' => 'required|email',
            'pasahitza' => 'required',
        ]);

        $credentials = $request->only('email', 'pasahitza');

        // Intenta autenticar al usuario
        if (Auth::attempt($credentials)) {
            // Autenticación exitosa
            return redirect()->intended('/');
        }

        // Autenticación fallida
        return back()->withErrors(['email' => 'Las credenciales no son válidas']);
    }

    public function logout(Request $request)
    {
        // Cerrar sesión del usuario
        Auth::logout();
        return redirect('/');
    }
}
