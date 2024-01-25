<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;

class ProfileController extends Controller
{
    use SoftDeletes;
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Mainfolder/Perfil', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function restore($id) {

        User::withTrashed()->find($id)->restore();

        return Redirect::to('/')->with('success', 'Erabiltzailea berreskuratu da');
    } 

    public function forceDeleted($id){

        try {
            
            $user = User::withTrashed()->find($id);

            
            if ($user) {
                
                $user->delete();
                
                \Log::info('Usuario eliminado con éxito');
                return redirect('/')->with('success', 'Erabiltzailea ezabatu da');

            } else {
              
                return Redirect::to('/')->with('error', 'Erabiltzailea ez da aurkitu.');
            }
        } catch (\Exception $e) {
            
            return Redirect::to('/')->with('error', 'Error al restaurar el usuario: ' . $e->getMessage());
        }
    }
}
