<!DOCTYPE html>
<html lang="en">
    <head>
        @include('layouts.partials.head')
    </head>
    <body>
        <div id="app">
            <main class="main">
                @yield('content')
            </main>
        </div>
        @include('layouts.partials.scripts')
    </body>
</html>