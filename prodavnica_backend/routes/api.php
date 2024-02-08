<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KorisnikController;
use App\Http\Controllers\NamirnicaController;
use App\Http\Controllers\KategorijaNamirniceController;
use App\Http\Controllers\KategorijaReceptController;
use App\Http\Controllers\KorpaController;
use App\Http\Controllers\StavkaKorpaController;
use App\Http\Controllers\ReceptController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\StavkaReceptController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



/*

//KORISNIK

Route::get('/korisnici', [KorisnikController::class, 'index']);



Route::put('/namirnice/izmeni/{id}', [NamirnicaController::class, 'update']);


//RECEPT

Route::get('/recept/prikazi',[ReceptController::class,'show']);//radi
Route::get('/recept/kategorija', [ReceptController::class, 'receptiPoKategoriji']);//radi
Route::post('/recept/sacuvaj', [ReceptController::class, 'store']);//radi

Route::put('/recept/izmeni/{id}', [ReceptController::class, 'update']);//radi
Route::delete('/recept/obrisi/{id}', [ReceptController::class, 'destroy']);//radi

Route::get('/recept/dodaj', [ReceptController::class, 'dodajNamirniceUKorpu']);//radi




//AUTH
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




//KORPA
Route::get('/korpa', [KorpaController::class, 'index']);

Route::get('/korpa/id', [KorpaController::class, 'show']);

Route::get('/korpa/cena', [KorpaController::class, 'ukupnaCena']);

Route::post('/korpa/napravi', [KorpaController::class, 'store']);

Route::get('/korpa/prikaziKorpu', [KorpaController::class, 'prikaziKorpu']);

Route::delete('/korpa/obrisi/{id}', [KorpaController::class, 'destroy']);







//REGISTRACIJA


//LOGIN


//LOGOUT
//Route::post('/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);


//EXPORT 


*/


Route::post('/login', [AuthController::class, 'login']);
Route::post('/registracija', [AuthController::class, 'registracija']);
Route::post('/namirnice/dodaj', [NamirnicaController::class, 'store']);
Route::post('/upload-slika', [NamirnicaController::class, 'uploadSlika']);
Route::delete('/namirnice/obrisi/{id}', [NamirnicaController::class, 'destroy']);
Route::get('/prihod_po_dan', [KorpaController::class, 'prihodPoDanu']);
Route::get('/prihod_po_mesec', [KorpaController::class, 'prihodPoMesecu']);
Route::get('/prihod_po_godina', [KorpaController::class, 'prihodPoGodini']);
Route::get('/recepti/pdf', [ReceptController::class, 'exportToPdf']);
Route::post('/korpa/transakcija', [KorpaController::class, 'obradiKorpu']);
Route::put('/korisnici/izmeni/{id}', [KorisnikController::class, 'update']);
Route::get('/namirnice', [NamirnicaController::class, 'index']); //raadi
Route::get('/recept',[ReceptController::class,'index']);//radi
Route::get('/recept/namirnica', [ReceptController::class, 'pronadjiPoNamirnici']);//radi
Route::get('/recept/naziv', [ReceptController::class, 'pronadjiPoNazivu']);//radi
Route::get('/namirnice/naziv', [NamirnicaController::class, 'pronadjiPoNaziv']);//radi