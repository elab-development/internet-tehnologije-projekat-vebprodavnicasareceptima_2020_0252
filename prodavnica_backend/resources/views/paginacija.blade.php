<!-- resources/views/users.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista korisnika</title>
</head>
<body>
    <h1>lista korisnika</h1>

    {{-- Prikazivanje imena korisnika iz varijable $namirnice --}}
    @foreach ($namirnice as $namirnica)
        <p>{{ $namirnica->naziv}}</p>
        <p>Cena: {{ $namirnica->cena }}</p>
        <p>Opis: {{ $namirnica->opis }}</p>
        <hr> {{-- Dodajte horizontalnu liniju između svake namirnice za bolju čitljivost --}}
    @endforeach
</body>
</html>