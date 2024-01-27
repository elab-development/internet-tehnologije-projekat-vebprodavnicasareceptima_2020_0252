<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\kategorija_namirnice;
use Validator;
use App\Http\Resources\KategorijaNamirniceRecource;

class KategorijaNamirniceController extends Controller
{
   
    public function index()
    {
       
        $kategorije = kategorija_namirnice::all();
        return response()->json($kategorije);
    }
 
   
  
 
    // DODAJ U BAZU
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv' => 'required|string|max:255', 
        ]);

        
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400); 
        }

        
        $kategorija = new kategorija_namirnice();
        $kategorija->naziv = $request->naziv;
       
        $kategorija->save();

       
        return response()->json(['Uspešno kreirana nova kategorija namirnice!',
            'kategorija' => $kategorija], 201); 
    }
    
 //PRIKAZI PO ID
    public function show($id)
    {
        
        $kategorija = kategorija_namirnice::find($id);
        if (!$kategorija) {
            return response()->json(['message' => 'Kategorija nije pronađena'], 404);
        }
        return response()->json($kategorija);
    }
 


    //IZMENI
    public function update(Request $request, $id)
    {
        
    $validator = Validator::make($request->all(), [
        'naziv' => 'required|string|max:255', 
        
       
    ]);
   
    if ($validator->fails()) {
       
        return response()->json($validator->errors());
    }

    $kategorija = kategorija_namirnice::findOrFail($id);

    $kategorija->naziv = $request->naziv;
  

    $kategorija->save();

    return response()->json(['Uspešno izmenjena kategorija namirnice!', new KategorijaNamirniceRecource($kategorija)]);
}



//OBRISI
public function destroy($id)
{
    $kat = kategorija_namirnice::findOrFail($id);
    $kat->delete();
    return response()->json('Uspešno obrisana kategorija namirnice!');
}



public function pronadjiPoNazivu(Request $request)
    {
        $naziv = $request->input('naziv');
        if(!$naziv){
 
            return response()->json(['message' => 'Naziv kategorije nije unet'], 404);
        }
        $kategorija = kategorija_namirnice::where('naziv', $naziv)->first();
        if (!$kategorija) {
            return response()->json(['message' => 'Kategorija sa datim nazivom nije pronađena'], 404);
        }
        return response()->json($kategorija);
    }



}





