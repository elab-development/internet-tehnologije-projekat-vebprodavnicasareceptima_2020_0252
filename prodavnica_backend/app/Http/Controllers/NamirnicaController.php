<?php

namespace App\Http\Controllers;

use App\Models\namirnica;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;

use Validator;


class NamirnicaController extends Controller
{


    
    public function index()
    {
        
        $namirnice = namirnica::all();
        return response()->json($namirnice);
      //  $namirnice = namirnica::paginate(10); // 10 users per page

        //return view('paginacija', ['namirnice' => $namirnice]);
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
            'velicina_pakovanja' => 'required|string', 
            'slika_path' => 'required|string'
        

        ]);

        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400); 
        }

        
        $namirnica = new namirnica();
        $namirnica->naziv = $request->naziv;
        $namirnica->opis = $request->opis;
        $namirnica->cena = $request->cena;
        $namirnica->velicina_pakovanja = $request->velicina_pakovanja;
        $namirnica->slika_path = $request->slika_path;
      
       
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



    public function uploadSlika(Request $request)
{
    $this->validate($request, [
        'slika' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    if ($request->hasFile('slika')) {
        $slika = $request->file('slika');
        $destinacija = base_path('../prodavnica_frontend/src/assets');
        $imeSlike = $slika->getClientOriginalName();

        $slika->move($destinacija, $imeSlike);

        return response()->json(['message' => 'Slika uspešno uploadovana', 'ime_slike' => $imeSlike], 200);
    }

    return response()->json(['message' => 'Greška prilikom uploada slike'], 500);
}
}
