<?php

namespace App\Http\Controllers;

use App\Models\korisnik;
use Illuminate\Http\Request;

class KorisnikController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $korisnici = korisnik::all();
        return response()->json($korisnici);
    }



    public function show(Request $request)
    {
        $id = $request->input('id');
        $korisnik = korisnik::find($id);
        if (!$korisnik) {
            return response()->json(['message' => 'Korisnik nije pronađen'], 404);
        }
        return response()->json($korisnik);
    }



    

    
    public function store(Request $request)
    {
        


    }

    
    
    public function update(Request $request, korisnik $korisnik)
    {
         // Validacija zahteva
    $validator = Validator::make($request->all(), [
        'Ime' => 'string|max:255',
        'Prezime' => 'string|max:255',
        'Adresa' => 'string|max:255',
        'broj_telefona' => 'string|max:255',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400); // Vraćanje grešaka u validaciji
    }

    // Pronalaženje postojećeg korisnika
    $korisnik = korisnik::findOrFail($id);

    // Ažuriranje atributa korisnika
    $korisnik->Ime = $request->Ime;
    $korisnik->Prezime = $request->Prezime;
    $korisnik->Adresa = $request->Adresa;
    $korisnik->broj_telefona = $request->broj_telefona;

    // Čuvanje promena
    $korisnik->save();

    return response()->json(['message' => 'Korisnik uspešno ažuriran!', 'korisnik' => $korisnik]);
    }

    
    public function destroy(korisnik $korisnik)
    {
        
    }


    

}
