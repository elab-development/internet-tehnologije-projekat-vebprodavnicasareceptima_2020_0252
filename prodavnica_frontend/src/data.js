import slika1 from './assets/jabuke.jpg';
import slika2 from './assets/krompir.jpg';
import slika3 from './assets/mleko.jpg';
import slika4 from './assets/cokolada.jpg';
import slika5 from './assets/brasno.jpg';
import slika6 from './assets/ulje.jpg';
import slika7 from './assets/cokoladnikrem.jpg';
import slika8 from './assets/piletina.jpg';
import slika9 from './assets/salata.jpg';
import slika10 from './assets/pirinac.jpg';
import slika11 from './assets/paradajz.jpg';
import slika12 from './assets/secer.jpg';
import slika13 from './assets/testenina.jpg';
import slika14 from './assets/luk.jpg';
import slika15 from './assets/jaja.jpg';
import slika16 from './assets/so.jpg';
import slika17 from './assets/sir.jpg';
import slika18 from './assets/kakao.jpg';
import slika19 from './assets/maslac.jpg';
import slika20 from './assets/prasak.jpg';
import slika01 from "./assets/palacinke.jpg";
import slika02 from "./assets/salata1.jpg";
import slika03 from "./assets/hleb.jpg";
import slika04 from "./assets/pilet.jpg";

export const kategorije=[
    {id:1, naziv:'Voće i povrće'},
    {id:2, naziv:'Mlečni proizvodi'},
    {id:3, naziv:'Osnovne namirnice'},
    {id:4, naziv:'Slatki i slani konditori'},
    {id:5, naziv:'Meso'}
]

export const namirnice = [
    { id: 1, naziv: 'Jabuka', opis: 'Jabuka Ajdared domaća', cena: 100, slika: slika1,velicina_pakovanja:"1kg", kategorijaId:kategorije.at(1)},
    { id: 2, naziv: 'Krompir', opis: 'Krompir crveni opran', cena: 130, slika: slika2, velicina_pakovanja:"1kg", kategorijaId:kategorije.at(1) },
    { id: 3, naziv: 'Čokolada', opis: 'Čokolada za kuvanje ', cena: 130, slika: slika4, velicina_pakovanja:"100g", kategorijaId:kategorije.at(4)},
    { id: 4, naziv: 'Brašno', opis: 'Brašno pšenicno T-400 meko', cena: 80, slika: slika5, velicina_pakovanja:"1kg", kategorijaId:kategorije.at(2) },
    { id: 5, naziv: 'Mleko', opis: 'Mleko ster.2.8%mm', cena: 152, slika: slika3,velicina_pakovanja:"1l", kategorijaId:kategorije.at(3)},
    { id: 6, naziv: 'Ulje', opis: 'Ulje suncokretovo', cena: 169, slika: slika6,velicina_pakovanja:"1l", kategorijaId:kategorije.at(3)},
    { id: 7, naziv: 'Čokoladni krem', opis: 'Krem lesnik', cena: 520, slika: slika7,velicina_pakovanja:"400g", kategorijaId:kategorije.at(4)},
    { id: 8, naziv: 'Pileći file', opis: 'Pileći file sveže', cena: 480, slika: slika8,velicina_pakovanja:"500g", kategorijaId:kategorije.at(5)},
    { id: 9, naziv: 'Zelena salata', opis: 'Sveža, oprana', cena: 70, slika: slika9,velicina_pakovanja:"150g", kategorijaId:kategorije.at(1)},
    { id: 10, naziv: 'Pirinač', opis: 'Pirinač dugo zrno', cena: 200, slika: slika10,velicina_pakovanja:"500g", kategorijaId:kategorije.at(3)},
    { id: 11, naziv: 'Paradajz', opis: 'Svež, opran', cena: 250, slika: slika11,velicina_pakovanja:"1kg", kategorijaId:kategorije.at(1)},
    { id: 12, naziv: 'Šećer', opis: 'Šećer kristal beli ', cena: 115, slika: slika12,velicina_pakovanja:"1kg", kategorijaId:kategorije.at(4)},
    { id: 13, naziv: 'Testenina', opis: 'Testenina Fusilli', cena: 200, slika: slika13,velicina_pakovanja:"500g", kategorijaId:kategorije.at(3)},
    { id: 14, naziv: 'Luk crveni', opis: 'Domaći luk', cena: 90, slika: slika14,velicina_pakovanja:"1kg", kategorijaId:kategorije.at(1)},
    { id: 15, naziv: 'Jaja', opis: 'Sveža jaja', cena: 280, slika: slika15,velicina_pakovanja:"10 kom.", kategorijaId:kategorije.at(3)},
    { id: 16, naziv: 'So', opis: 'Morska so', cena: 520, slika: slika16,velicina_pakovanja:"400g", kategorijaId:kategorije.at(4)},
    { id: 17, naziv: 'Sitni sir', opis: 'Šabački sir meki punomasni 45%mm', cena: 400, slika: slika17,velicina_pakovanja:"500g", kategorijaId:kategorije.at(2)},
    { id: 18, naziv: 'Kakao', opis: 'Kakao prah', cena: 250, slika: slika18,velicina_pakovanja:"80g", kategorijaId:kategorije.at(4)},
    { id: 19, naziv: 'Maslac', opis: 'Maslac neslani', cena: 420, slika: slika19,velicina_pakovanja:"200g", kategorijaId:kategorije.at(2)},
    { id: 20, naziv: 'Prašak za pecivo', opis: 'prašak za pecivo', cena: 520, slika: slika20,velicina_pakovanja:"12g", kategorijaId:kategorije.at(3)},
  ];

  export const recepti = [
    {
      id: 1,
      naziv: "Palačinke",
      tekst:
        "Jaja mutiti sa vodom i mljekom Pa dodati Brasno pomjesano sa kakaom i mutiti toliko dok se sve fino ne sjedini. Pustiti da miruje nekih 20 Minuta Pa prziti palacinke. Sluziti po zelji sa cokoladnim sosom i marmeladom od kajsija su najukusnije.",
      slika:  slika01,
      sastojci: [6,5,4,7,15,18]
    },
    {
      id: 2,
      naziv: "Salata sa piletinom",
      tekst:
        "Pileće meso se začini i ispeče..U širok tanjir ili na poslužavnik se kao podloga stavlja zelena salata, a preko toga se ređaju ostale komponente.Stavite seckanu piletinu u sredinu. Oko nje rasporedite nasečeno kuvano jaje, paradajz, i sir.Salata je ukrašena sa pola glavice luka, isečene na kolutove. Neposredno pre serviranja začiniti.",
      slika:
        slika02,
        sastojci: [8,9,11,14,15]
    },
    {
      id: 3,
      naziv: "Domaći hleb",
      tekst:
        "Brasno prosejati i sipati u posudu za mesenje.U sredini brasna izmrviti kvasac dodati so i secer.Sipati mlaku vodu i zamesiti testo.Testo mora da bude meko.Ostaviti da nadodje , pa jos jednom premesiti i ponovo ostaviti da nadodje.Jos jednom premesiti i sipati u dobro modmazan pleh.Po vrhu izbosti testo sa viljuskom na vise mesta.Peci u dobro zagrejanoj rerni na 220c",
      slika:
        slika03 /*sastojci:[namirnice.at(4),namirnice.at(20),namirnice.at(16),namirnice.at(12)]*/,
        sastojci: [4,20,16,12]
    },
    {
      id: 4,
      naziv: "Piletina sa pirinčem",
      tekst:
        "Propržiti piletinu da porumeni, skloniti je sa vatre u tanjir, a u šerpi gde se pržila piletina stavimo iseckani crni luk. Dodati i sve začine, sipati oprani pirinač i naliti čašom (2 dl) vode.Staviti da se peče oko 40 minuta dok se pirinač dobro ne ispeče.",
      slika:
        slika04 /*sastojci:[namirnice.at(10),namirnice.at(14),namirnice.at(8)]*/,
        sastojci: [10,14,8]
    },
  ];
