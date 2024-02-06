<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\korpa;
use App\Models\stavka_korpa;
use Illuminate\Http\Request;
use Validator;

class KorpaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $korpe = korpa::all();
        return response()->json($korpe);
    }

    public function show(Request $request)
    {
        //
        $id=$request->id;
        $korpa = korpa::find($id);
        if (!$korpa) {
            return response()->json(['message' => 'Korpa nije pronađena'], 404);
        }
        return response()->json($korpa);
    }


   
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'korisnik_id' => 'required|integer',
            'ukupna_cena' => 'required|numeric'
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400); 
        }
    
        $korpa = new korpa();
        $korpa->korisnik_id = $request->korisnik_id;
        $korpa->ukupna_cena = $request->ukupna_cena;
    
        $korpa->save();
    
        return response()->json(['Uspešno kreirana nova korpa', 'korpa' => $korpa], 201);
    }

    
    
    
   
    public function destroy($id)
    {
        $korpa = korpa::find($id);
    
        if (!$korpa) {
            return response()->json(['message' => 'Korpa nije pronađena'], 404);
        }
    
        
        $korpa->stavkaKorpa()->delete();
    
        $korpa->delete();
    
        return response()->json(['message' => 'Korpa je uspešno obrisana']);
    }

    // Ažuriranje ukupne cene korpe
    public function ukupnaCena(Request $request)
    {
        $id = $request->id;
        $korpa = korpa::with('stavkaKorpa.namirnica')->find($id);
        if (!$korpa) {
            return response()->json(['message' => 'Korpa nije pronađena'], 404);
        }
 
        $ukupnaCena = $korpa->stavkaKorpa->sum(function ($stavka) {
            return $stavka->namirnica->cena;
        });
 
        $korpa->ukupna_cena = $ukupnaCena;
        $korpa->save();
 
        return response()->json($korpa);
    }


    public function prikaziKorpu(Request $request)
    {
            $korpaId=$request->id;

        $korpa = korpa::with('stavkaKorpa')->find($korpaId);
    
        if (!$korpa) {
            return response()->json(['message' => 'Korpa nije pronađena'], 404);
        }
    
        $ukupnaCena = 0;
    foreach ($korpa->stavkaKorpa as $stavka) {
        if ($stavka->namirnica) {
            $ukupnaCena += $stavka->namirnica->cena; 
        }
    }
    
        return response()->json([
            'stavkeKorpe' => $korpa->stavkaKorpa,
            'ukupnaCena' => $ukupnaCena
        ]);
    }


    
    public function obradiKorpu(Request $request) {
        DB::beginTransaction();
        
        try {
            // Pretpostavljamo da $request->korisnikId i $request->ukupnaCena sadrže potrebne podatke
            $korisnikId = $request->korisnikId;
            $ukupnaCena = $request->ukupnaCena;
            $stavkeNiz = $request->stavkeNiz; // Očekuje se niz ID-eva namirnica
            
            // Kreiranje nove korpe
            $korpa = korpa::create([
                'korisnik_id' => $korisnikId,
                'ukupna_cena' => $ukupnaCena
            ]);
            
            // Kreiranje stavki korpe za svaki ID namirnice iz niza
            foreach ($stavkeNiz as $namirnicaId) {
                stavka_korpa::create([
                    'korpa_id' => $korpa->id, // Koristi ID novo-kreirane korpe
                    'namirnica_id' => $namirnicaId,
                ]);
            }
            
            DB::commit();
            
            // Vraća se odgovor sa porukom o uspehu i ID-om korpe
            return response()->json([
                'message' => 'Plaćanje uspešno procesirano',
                'korpa_id' => $korpa->id
            ]);
        } catch (\Exception $e) {
            DB::rollback();
            // Vraća se odgovor sa porukom o grešci
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    


}
