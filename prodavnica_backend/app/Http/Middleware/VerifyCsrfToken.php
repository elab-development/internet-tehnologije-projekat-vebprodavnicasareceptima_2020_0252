<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'api/registracija',
        'api/login',
        'api/namirnice/dodaj',
        'api/upload-slika',
        'api/namirnice/obrisi/*',
        'api/korpa/transakcija',
        'api/korisnici/izmeni/*',
    ];
}
