<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark bg-gray-900 text-white">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        @inertiaHead
        @vite(['resources/scripts/main.ts'])
    </head>
    <body>
        @inertia
    </body>
</html>

