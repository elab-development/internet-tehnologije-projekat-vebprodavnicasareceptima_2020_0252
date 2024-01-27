<?php

namespace App\Http\Controllers;

use App\Models\namirnica;
use Illuminate\Http\Request;
use App\Models\kategorija_namirnice;
use Validator;


class NamirnicaController extends Controller
{


    
    public function index()
    {
        
        $namirnice = namirnica::all();
        //return response()->json($namirnice);
        $namirnice = namirnica::paginate(10); // 10 users per page

        return view('paginacija', ['namirnice' => $namirnice]);
    }

    public function show(Request $request)
    {
        $id = $request->id;
        $namirnica = namirnica::find($id);
        if (!$namirnica) {
            return response()->json(['message' => 'Namirnica nije pronađena'], 404);
        }
        return response()->json($namirnica);
    }   

  
    
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255', 
            'opis' => 'required|string|max:255', 
            'cena' => 'required|numeric', 
            'velicina_pakovanja' => 'required|integer', 
            'kategorija_namirnica_id'=> 'required|integer'

        ]);

        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400); 
        }

        
        $namirnica = new namirnica();
        $namirnica->naziv = $request->naziv;
        $namirnica->opis = $request->opis;
        $namirnica->cena = $request->cena;
        $namirnica->velicina_pakovanja = $request->velicina_pakovanja;
        $namirnica->kategorija_namirnica_id = $request->kategorija_namirnica_id;
       
        $namirnica->save();

       
        return response()->json(['Uspešno kreirana nova namirnica!',
            'namirnica' => $namirnica], 201); 
    }
   




    public function update(Request $request,  $namirnica)
    {
        
        $validator = Validator::make($request->all(), [
            'naziv' => 'string|max:255', 
            'opis' => 'string|max:255', 
            'cena' => 'numeric', 
            'velicina_pakovanja' => 'integer', 
            'kategorija_namirnica_id' => 'integer'
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        $namirnica = namirnica::find($id);
        if (!$namirnica) {
            return response()->json(['message' => 'Namirnica nije pronađena'], 404);
        }
    
        $namirnica->update($request->all());
    
        return response()->json(['message' => 'Uspešno ažurirana namirnica', 'namirnica' => $namirnica], 200);
    




    }

    


    public function destroy($id)
{
    $nam = namirnica::findOrFail($id);
    $nam->delete();
    return response()->json('Uspešno obrisana namirnica!');
}


    


    public function pronadjiPoNaziv(Request $request)
    {
       
        $naziv = $request->naziv;
        $namirnice = namirnica::where('naziv',$naziv )->first();
        if (!$namirnice) {
            return response()->json(['message' => 'Nema namirnica sa datim nazivom'], 404);
        }
        return response()->json($namirnice);
    }





    public function namirnicePoKategoriji(Request $request)
    {
        $nazivKategorije = $request->input('naziv');

        if (!$nazivKategorije) {
            return response()->json(['message' => 'Nije unet naziv kategorije'], 400);
        }

        $kategorija = kategorija_namirnice::where('naziv', 'like', '%' . $nazivKategorije . '%')->first();
        $idKat = $kategorija->id;
        
        $namirnice = namirnica::where('kategorija_namirnica_id', $kategorija->id)->get();
        if ($namirnice->isEmpty()) {
            return response()->json(['message' => 'Nema namirnica u kategoriji ' . $nazivKategorije], 404);
        }

        return response()->json($namirnice);
    }

    public function filtriraj(Request $request)
    {
        $query = namirnica::query();

        // Dodajte uslove filtriranja prema potrebama
        if ($request->has('cena_min')) {
            $query->where('cena', '>=', $request->input('cena_min'));
        }

        if ($request->has('cena_max')) {
            $query->where('cena', '<=', $request->input('cena_max'));
        }

        // Dodajte dodatne uslove prema potrebama

        $filteredNamirnice = $query->get();

        return response()->json(['namirnice' => $filteredNamirnice]);
    }
}
