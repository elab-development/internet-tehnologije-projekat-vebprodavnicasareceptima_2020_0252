<?php

namespace App\Http\Controllers;

use App\Models\recept;
use App\Models\korpa;
use App\Models\stavka_korpa;
use Illuminate\Http\Request;
use App\Models\kategorija_recept;
use App\Models\namirnica;
use PDF;
use Validator;


class ReceptController extends Controller
{
 
    public function index()
    {
        //
        $recepti = recept::with('stavkaRecept.namirnica')->get();
        return response()->json($recepti);
    }

  
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255',
            'tekst' => 'required|string|max:255',
            'kategorija_recepta_id' => 'required|string|max:255',
        ]);

        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400); 
        }

        
        $recept = new recept();
        $recept->naziv = $request->naziv;
        $recept->tekst = $request->tekst;
        $recept->kategorija_recepta_id = $request->kategorija_recepta_id;
       
        $recept->save();

       
        return response()->json(['Uspešno kreiran novi recept!',
            'recept' => $recept], 201); 
    }

    public function show(Request $request)
    {
        $id = $request->id;
        $recept = recept::find($id);
        if (!$recept) {
            return response()->json(['message' => 'Recept nije pronađen'], 404);
        }
        return response()->json($recept);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'string|max:255', 
            'tekst' => 'string|max:255',
            'kategorija_recepta_id' => 'integer'

        ]);
       
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
    
        $recept = recept::find($id);
        if (!$recept) {
            return response()->json(['message' => 'Recept nije pronađen'], 404);
        }
        $recept->update($request->all());
    
        return response()->json(['message' => 'Uspešno ažuriran recept', 'recept' => $recept], 200);
    }

 
    public function destroy($id)
    {
        $recept = recept::findOrFail($id);
        if (!$recept) {
            return response()->json(['message' => 'Korpa nije pronađena'], 404);
        }
        $recept->stavkaRecept()->delete();
        $recept->delete();
        return response()->json('Uspešno obrisan recept');
    }

    // Prikaz svih recepta koji sadrže određenu namirnicu
    public function pronadjiPoNamirnici(Request $request)
    {
        $namirnicanaz=$request->naziv;
        if(!$namirnicanaz){
            return response()->json(['message' => 'Nije unet naziv namirnice'], 400);
        }
        $namirnica=namirnica::where('naziv', 'like', '%' . $namirnicanaz . '%')->first();
        $namirnicaId=$namirnica->id;
        $recepti = recept::whereHas('stavkaRecept', function ($query) use ($namirnicaId) {
            $query->where('namirnica_id', $namirnicaId);
        })->with('stavkaRecept.namirnica')->get();
 
        if ($recepti->isEmpty()) {
            return response()->json(['message' => 'Nema recepta koji ima namirnicu ' . $namirnicanaz], 404);
        }
        return response()->json($recepti);
    }


    public function dodajNamirniceUKorpu(Request $request)
    {
        $korpaId = $request->korpaId;
        $receptId = $request->receptId;
 
        $recept = recept::with('stavkaRecept.namirnica')->find($receptId);
        if (!$recept) {
            return response()->json(['message' => 'Recept nije pronađen'], 404);
        }
 
        $korpa = korpa::find($korpaId);
        if (!$korpa) {
            return response()->json(['message' => 'Korpa nije pronađena'], 404);
        }
 
        foreach ($recept->stavkaRecept as $stavkaRecepta) {
            $postojecaStavka = stavka_korpa::where('korpa_id', $korpa->id)->where('namirnica_id', $stavkaRecepta->namirnica_id)->first();
 
            if ($postojecaStavka) {
                $postojecaStavka->save();
            } else {
                stavka_korpa::create([
                    'korpa_id' => $korpa->id,
                    'namirnica_id' => $stavkaRecepta->namirnica_id,
            ]);
        }
    }
 
     return response()->json(['message' => 'Namirnice su dodate u korpu']);
    }
    
    public function pronadjiPoNazivu(Request $request)
    {
        $naziv = $request->naziv;
        $recepti = recept::where('naziv', 'like', '%' . $naziv . '%')->get();
        if ($recepti->isEmpty()) {
            return response()->json(['message' => 'Nema recepta sa datim nazivom'], 404);
        }
        return response()->json($recepti);
    }

    


    public function receptiPoKategoriji(Request $request)
    {
        $nazivKategorije = $request->input('naziv');
        if (!$nazivKategorije) {
            return response()->json(['message' => 'Nije unet naziv kategorije'], 400);
        }
        $kategorija = kategorija_recept::where('naziv', 'like', '%' . $nazivKategorije . '%')->first();
    
        $recepti = recept::where('kategorija_recepta_id', $kategorija->id)->get();
        if ($recepti->isEmpty()) {
            return response()->json(['message' => 'Nema recepata u kategoriji ' . $nazivKategorije], 404);
        }

        return response()->json($recepti);
    }


    public function exportToPdf(Request $request)
    {
            $id = $request->id;

        $recept = Recept::findOrFail($id);

        $pdf = PDF::loadView('recept_pdf', ['recept' => $recept]);
        return $pdf->download('recept-' . $recept->id . '.pdf');
    }


}
