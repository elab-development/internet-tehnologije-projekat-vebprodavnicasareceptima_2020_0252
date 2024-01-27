<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\korisnik;


class AuthController extends Controller
{
    //
    public function registracija(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Ime' => 'required|string',
            'Prezime' => 'required|string',
            'Adresa' => 'required|string',
            'Email' => 'required|email|unique:korisnik',
            'password' => 'required|string',
            'broj_telefona' => 'required|string',
        ]);
 
        if ($validator->fails()) {
            return response()->json(['Greska pri registraciji:', $validator->errors()]);
        }
 
        $user = korisnik::create([
            'Ime' => $request->Ime,
            'Prezime' => $request->Prezime,
            'Adresa' => $request->Adresa,
            'Email' => $request->Email,
            'password' => Hash::make($request->password),
            'broj_telefona' => $request->broj_telefona
        ]);
 
        $token = $user->createToken('TokenReg')->plainTextToken;
 
        $odgovor = [
            'Poruka' => 'Uspesna registracija korisnika!',
            'Korisnik: ' => $user,
            'Token: ' => $token,
            'Token tip:' => 'Bearer',
        ];
 
        return response()->json($odgovor);
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Email' => 'required|Email',
            'password' => 'required|string',
        ]);
 
        if ($validator->fails()) {
            return response()->json(['Greska:', $validator->errors()]);
        }
 
        if (!Auth::attempt($request->only('Email', 'password'))) {
            return response()->json(['Greska pri logiovanju: ' => 'Pokusajte ponovo da se ulogujete!']);
        }
 
        $user = korisnik::where('Email', $request['Email'])->firstOrFail();
 
        $token = $user->createToken('TokenLogin')->plainTextToken;
 
        $odgovor = [
            'Poruka' => 'Dobar dan!',
            'Korisnik: ' => $user->Ime,
            'Token: ' => $token,
        ];
 
        return response()->json($odgovor);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json('Uspesan logout korisnika.');
    }
}
