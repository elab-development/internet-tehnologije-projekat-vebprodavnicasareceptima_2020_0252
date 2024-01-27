<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReceptSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('recept')->insert([
            [
                'naziv' => 'Palačinke',
                'tekst' => 'Uzmite dublju plastičnu posudu i u nju sipajte brašno, dodajte jaja i oko 2 dl mleka. Probajte da umutite i ako ne ide dodajte još malo mleka.
                Savet: testo možete napraviti samo sa vodom ili samo sa mlekom. Najbolje je kada stavite pola mineralne vode i pola mleka.
                Važno je da testo bude gusto i da ga mutite dok ne postane glatko, bez grudvica, potom dodajte još mleka, pa malo kisele vode i tako dok ne dobijete testo koje liči na čorbu. U umućeno testo dodajte oko 1 dl ulja i dobro promešajte.
                Savet: testo će biti bolje ako ga pustite da odstoji 20-30 minuta.
                U tiganj sipajte ulje pa kad se zagreje izručite ulje, tako da tiganj ostane samo masan. Vratite ga na ringlu i onda sipajte kutlačom testo, koje treba da bude ravnomerno raspoređeno po tiganju. Temperatura na kojoj se palačinke peku mora biti visoka. Ostavite nekoliko trenutaka na ringli, a onda prevrnite nožem ili bacite u vis.
                Savet: koristite samo teflonske tiganje jer ćete tako izbeći da Vam se palačinke zalepe za dno, tj. neće morati stalno da "podmazujete" tiganj.
                Čim se ispeče jedna strana palačinke, okrenite je na drugu stranu i pecite isto koliko i prvu (otprilike oko 1 minut). Gotove palačinke izbacite na plitak tanjir i filujte.',
               
                'kategorija_recepta_id' => 3
            ],
            [
                'naziv' => 'Krofne',
                'tekst' => 'U mlako mleko (600 ml) izdrobiti kvasac, staviti 2 kašičice šećera i ostaviti da nadođe. Za to vreme, u većoj vanglici, umutiti 2 žumanca, dodati mast (ili ulje), šećer, so pa na kraju dodati i nadošli kvasac. Sve umešati pa postepeno dodavati brašno i mutiti. Zamesti testo srednje mekoće (važno da se ne lepi za ruke i radnu površinu). Tako umešeno testo ostaviti da odmori 20-30 minuta.
                Posle 30-ak minuta testo ponovo malo premesiti bez dodavanja brašna i rastanjiti na debljinu manju od 1 cm (od prilike 7-8 mm).,
                Čašom vaditi krofne, pa ostaviti da odstoje sa svake strane po 5 minuta. Za to vreme zagrejati ulje na umerenoj temperaturi. Pre prženja krofne još malo blago rastanjiti oklagijom i ostaviti da malo odmore.,
                Kada se krofne stavljaju u ulje bitno je da ona strana koja je bila na stolu sada bude gore.,
                Gotove krofne uvaljati u prah šećer i poslužiti tople :)',
                'kategorija_recepta_id' => 3

            ]
           
        ]);
    }
}
