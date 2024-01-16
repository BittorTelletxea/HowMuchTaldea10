{{-- resources/views/emails/authentication.blade.php --}}

<p>¡Bienvenido! Haga clic en el botón a continuación para completar la autenticación:</p>

@component('mail::button', ['url' => $authenticationUrl])
    Autenticar
@endcomponent

<p>¡Gracias!</p>
