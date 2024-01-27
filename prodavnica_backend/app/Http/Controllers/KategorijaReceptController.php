<?php

namespace App\Http\Controllers;

use App\Models\kategorija_recept;
use Illuminate\Http\Request;
use App\Models\recept;
use App\Models\namirnica;
use Validator;
use App\Http\Resources\KategorijaReceptResource;

class KategorijaReceptController extends Controller
{
 
    public function index()
    {
        //
        $kategorije = kategorija_recept::all();
        return response()->json($kategorije);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255', 
        ]);

        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400); 
        }

        
        $kategorija = new kategorija_recept();
        $kategorija->naziv = $request->naziv;
       
        $kategorija->save();

       
        return response()->json(['Uspešno kreirana nova kategorija recepta!',
            'kategorija' => $kategorija], 201); 
    }


    public function show(Request $request)
    {
        $id=$request->id;
        $kategorija = kategorija_recept::find($id);
        if (!$kategorija) {
            return response()->json(['message' => 'Kategorija recepta nije pronađena'], 404);
        }
        return response()->json($kategorija);

    }


    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255', 
 
        ]);
       
        if ($validator->fails()) {
           
            return response()->json($validator->errors());
        }
    
        $kategorija = kategorija_recept::findOrFail($id);
    
        $kategorija->naziv = $request->naziv;
      
    
        $kategorija->save();
    
        return response()->json(['Uspešno izmenjena kategorija recepta!', new KategorijaReceptResource($kategorija)]);
    }
    

    public function destroy($id)
    {
        $kat = kategorija_recept::findOrFail($id);
        $kat->delete();
        return response()->json('Uspešno obrisana kategorija recepta!');
    }

    // Pronalaženje kategorije recepta po nazivu
    public function pronadjiPoNazivuKat(Request $request)
    {
        $naziv = $request->naziv;
        $kategorija = kategorija_recept::where('naziv', $naziv)->first();
        if (!$kategorija) {
            return response()->json(['message' => 'Kategorija recepta sa datim nazivom nije pronađena'], 404);
        }
        return response()->json($kategorija);
    }

    // Prikaz svih recepata koji sadrže određenu namirnicu
    public function pronadjiPoNamirnici(Request $request)
    {
        $namirnicanaz=$request->naziv;
        $namirnica = namirnica::where('naziv', 'like', '%' . $namirnicanaz . '%')->first();
        $namirnicaid=$namirnica->id;

        $recepti = recept::whereHas('stavkaRecept', function ($query) use ($namirnicaid) {
            $query->where('namirnica_id', $namirnicaid);
        })->get();
       
 
        return response()->json($recepti);
    }
}
