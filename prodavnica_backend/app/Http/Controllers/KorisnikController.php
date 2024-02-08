<?php

namespace App\Http\Controllers;

use App\Models\korisnik;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class KorisnikController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   

    
    
    public function update(Request $request, $id)
    {
         // Validacija zahteva
    $validator = Validator::make($request->all(), [
        
        'Adresa' => 'string|max:255',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400); 
    }
    $korisnik = korisnik::findOrFail($id);
    $korisnik->Adresa = $request->Adresa;
    $korisnik->save();

    return response()->json(['message' => 'Korisnik uspešno ažuriran!', 'korisnik' => $korisnik]);
    }

    
   


    

}
