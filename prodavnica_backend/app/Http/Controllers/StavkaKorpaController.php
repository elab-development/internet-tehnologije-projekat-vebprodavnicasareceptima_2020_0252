<?php

namespace App\Http\Controllers;

use App\Models\stavka_korpa;
use Illuminate\Http\Request;
use App\Models\korpa;
use Validator;

class StavkaKorpaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $stavkeKorpe = stavka_korpa::all();
        return response()->json($stavkeKorpe);
    }

    public function show(Request $request)
    {
        //
        $id = $request->id;
        $stavkaKorpe = stavka_korpa::find($id);
        if (!$stavkaKorpe) {
            return response()->json(['message' => 'Stavka korpe nije pronađena'], 404);
        }
        return response()->json($stavkaKorpe);
    }

    
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'korpa_id' => 'required|integer',
            'namirnica_id' => 'required|integer'
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        $stavka = new stavka_korpa();
        $stavka->korpa_id = $request->korpa_id;
        $stavka->namirnica_id = $request->namirnica_id;
        
        $stavka->save();
    
        return response()->json(['message' => 'Stavka je uspešno dodata u korpu', 'stavka' => $stavka], 201);
    }

    
   

    
    

  
    public function destroy($id)
    {
        
        $id;
        stavka_korpa::destroy($id);
        return response()->json(null, 204);
    }
}
