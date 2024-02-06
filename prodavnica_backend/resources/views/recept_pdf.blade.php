{{-- resources/views/recepti_pdf.blade.php --}}
<!DOCTYPE html>
<html  lang="sr">
<head>
    <meta charset="UTF-8">
    <title>Recept</title>
    <style>
        @font-face {
            font-family: 'DejaVu Sans';
            src: url('../../public/fonts/DejaVuSans.ttf') format('truetype');
            /* Dodatne opcije fonta, ako su potrebne */
        }
        body {
            font-family: 'DejaVu Sans', sans-serif; /* Korišćenje fonta */
        }
    </style>
</head>
<body>
    <h1>{{ $naslov }}</h1>
    <p>{{ $tekst }}</p>
</body>
</html>
