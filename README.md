<h1><strong>PRODAVNICA SA RECEPTIMA </strong></h1>

Pre nego što se počne sa osnovnim koracima neophodno je imati instaliran Node.js i XAMPP.

<h2>Pokretanje projekta na lokalnoj mašini</h2>


1.Postaviti se u željeni direktorijum

2.Klonirati projekat izvršavanjem sledeće komande u terminalu: git clone https://github.com/elab-development/internet-tehnologije-projekat-vebprodavnicasareceptima_2020_0252.git

3.Otvoriti projekat u odgovarajućem okruženju (preporučuje se korišćenje Visual Studio Code-a)

4.Pokrenuti Apache i MySQL unutar XAMPP-a

<h2> <strong>Pokretanje Laravel aplikacije </strong></h2>


1.Postaviti se u odgovarajući direktorijum izvršavanjem sledeće komande u terminalu: cd prodavnica_backend

2.Instalirati composer, kako bi se kreirao vendor folder. To se radi izvršavanjem sledeće komande u terminalu: composer install

3.Kreirati .env fajl izvršenjem sledeće komande u terminalu:cp .env.example .env ili copy .env.example .env

4.Podestiti .env fajl postavljanjem sledećih stvari

DB_DATABASE=naziv baze
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost:3000

5.Pokrenuti aplikaciju komandom: php artisan serve

6.Kreirati bazu sledećom komandom u terminalu: php artisan migrate

7.Popuniti bazu podacima uz pomoć seeder-a izvršavanjem sledeće komande u terminalu: php artisan db:seed


<h2> <strong>Pokretanje React aplikacije </strong></h2>


1.Vratiti se na početni direktorijum izvršavanjem sledeće komande u terminalu: cd ..

2.Postaviti se u odgovarajući direktorijum izvršavanjem sledeće komande u terminalu: cd prodavnica_frontend

3.Instalirati npm da bi se kreirao folder node_modules, sledećom komandom u terminalu: npm install

4.Pokrenuti aplikaciju komandom u terminalu: npm start


Nakon svih ovih koraka aplikacija je spremna za korišćenje.


<h2> <strong>Funkcionalnosti </strong></h2>


U aplikaciji postoji tri vrste uloga korisnika: admin, ulogovani korisnik i neulogovani korisnik. Admini su korisnici koji su već definisani u bazi uz pomoć seeder-a. Ulogovani korisnik je onaj korisnik koji se registruje i zatim uloguje, a neulogovani korisnik je korisnik koji pristupi aplikaciji kllikom na dugme "Nastavi bez registracije".


<h3>Funkcionalnosti korisnika koji je admin:</h3>


1.Logovanje u aplikaciju koriščenjem email-a i password-a

2.Pregled svih namrinica na stanici za prikaz namirnica

3.Dodavanje namirnica u korpu iz stanice za prikaz namirnica

4.Brisanje namirnica koje se ne nalaze ni u jednom receptu iz stranice za prikaz namirnica

5.Pretraga namrinica po nazivu

6.Pristup i pregled stranice za prikaz recepata

7.Pretraga recepata po nazivu

8.Detaljniji prikaz recepta

9.Preuzimanje recepta u PDF formatu na stranici za detaljniji prikaz recepta

10.Dodavanje namrinice u korpu iz stranice za detaljniji prikaz recepta

11.Dodavanje svih namrinica odjednom u korpu iz stranice za detaljniji prikaz recepta

12.Pregled nutritivnih vrednosti za uneti recept ili namrinicu

13.Dodavanje nove namirnice

14.Pregled grafikona prihoda po danu,mesecu ili godini

15.Pregled korpe sa svim unetim namirnicama

16.Menjanje količine namrinica u korpi ili njihovo uklanjanje iz korpe

17.Promena valute na stranici za prikaz korpe

18.Odlazak na stanicu za plaćanje

19.Izmena adrese korisnika na stanici za plaćanje

20.Potvrda transakcije i obrada korpe

21.Logout


<h3>Funkcionalnosti koje ima ulogovani korisnik:</h3>


1.Registracija

2.Logovanje u aplikaciju koriščenjem email-a i password-a

3.Pregled svih namrinica na stanici za prikaz namirnica

4.Dodavanje namirnica u korpu iz stanice za prikaz namirnica

5.Pretraga namrinica po nazivu

6.Pristup i pregled stranice za prikaz recepata

7.Pretraga recepata po nazivu

8.Detaljniji prikaz recepta

9.Preuzimanje recepta u PDF formatu na stranici za detaljniji prikaz recepta

10.Dodavanje namrinice u korpu iz stranice za detaljniji prikaz recepta

11.Dodavanje svih namrinica odjednom u korpu iz stranice za detaljniji prikaz recepta

12.Pregled nutritivnih vrednosti za uneti recept ili namrinicu

13.Pregled korpe sa svim unetim namirnicama

14.Menjanje količine namrinica u korpi ili njihovo uklanjanje iz korpe

15.Promena valute na stranici za prikaz korpe

16.Odlazak na stanicu za plaćanje

17.Izmena adrese korisnika na stanici za plaćanje

18.Potvrda transakcije i obrada korpe

19.Logout


<h3>Funkcionalnosti koje ima korisnik koji nije ulogovan:</h3>


1.Pregled svih namrinica na stanici za prikaz namirnica

2.Pretraga namrinica po nazivu

3.Pristup i pregled stranice za prikaz recepata

4.Pretraga recepata po nazivu

5.Detaljniji prikaz recepta

6.Pregled nutritivnih vrednosti za uneti recept ili namrinicu

7.Prikaz prazne korpe

8.Odlazak na stranicu za Login


