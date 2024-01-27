<?php

namespace App\Http\Controllers;

use App\Models\stavka_recept;
use Illuminate\Http\Request;
use Validator;

class StavkaReceptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $stavkeRecepta = stavka_recept::all();
        return response()->json($stavkeRecepta);
    }


    public function store(Request $request)
    {
        //
        $request->validate([
            'recept_id' => 'required|exists:recept,id',
            'namirnica_id' => 'required|exists:namirnica,id',
            'kolicina_namirnice' => 'required',
        ]);
 
        $stavkaRecepta = stavka_recept::create($request->all());
        return response()->json(['message' => 'Uspešno dodata stavka','stavka'=>$stavkaRecepta],201);
    }

    public function show(Request $request)
    {
        $id=$request->id;
        $stavkaRecepta = stavka_recept::find($id);
        if (!$stavkaRecepta) {
            return response()->json(['message' => 'Stavka recepta nije pronađena'], 404);
        }
        return response()->json($stavkaRecepta);
    }


    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'kolicina_namirnice' => 'required|numeric'

        ]);
       
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
    
        $stavka = stavka_recept::findOrFail($id);
        $stavka->kolicina_namirnice=$request->kolicina_namirnice;
        
        $stavka->save();
        return response()->json(['message' => 'Uspešno ažurirana stavka', 'recept' => $stavka], 200);
    }


    public function destroy($id)
    {
        stavka_recept::destroy($id);
        return response()->json('Uspešno obrisana stavka recepta');
    }
}
