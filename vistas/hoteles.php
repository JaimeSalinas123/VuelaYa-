<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VuelaYa!</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
<link rel="stylesheet" href="../css/hoteles.css">
<script defer src="./scripts/index.js"></script>
</head>

<body>
    <nav class="cabeza">
        <div class="div-header">
        <div class="nav-1">
            <a href="../index.php" class="var-icon">
            <img src="../recursos/vuelayaa.png" alt="Logo" class="logo">
            </a>

        <div class="nav-izquierda">
        <a href="../index.php" class="var-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
        </svg>
        <span class="texto">Inicio</span></a>
        <a href="pasaporte.php" class="var-icon"><span class="texto">Pasaporte Online</span></a>
        <a href="contacto.php" class="var-icon"><span class="texto">Contactanos</span></a>
        </div>

        <div class="nav-derecha">
        <a href="#" class="var-icon"><span class="texto">Buscar Vuelos</span></a>
        <a href="hoteles.php" class="var-icon"><span class="texto">Hoteles</span></a>
        <a href="#" class="var-icon"><span class="texto">Recomendaciones</span></a>
        <a href="#" class="var-icon"><span class="texto">GoldCard</span></a>
        <a href="#" class="var-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <span class="texto">Iniciar Sesion</span></a>
    </div>
    </div>
    </nav>

        <header class="hoteles">
            <div class="hoteles caja">
                <h2 class="hotelesh2">
                Hoteles por el mundo con<p>VuelaYa!</p>
                </h2>
<form class="max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-sm">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>
        <h2 class="busquedarapida">Busqueda Rapida</h2>
<div class="continents-list">
    <ul class="continents-container">
        <li class="continent-item"><a href="#">Europa</a></li>
        <li class="continent-item"><a href="#">NorteAmerica</a></li>
        <li class="continent-item"><a href="#">Oceania</a></li>
        <li class="continent-item"><a href="#">SurAmerica</a></li>
        <li class="continent-item"><a href="#">Africa</a></li>
        <li class="continent-item"><a href="#">CentroAmerica</a></li>
        <li class="continent-item"><a href="#">Asia</a></li>
    </ul>
</div>

            </div>
        </header>

<footer class="footer">
    <div class="footer-container">
        <div class="footer-section enlaces">
            <h3>Contactanos</h3>
            <div class="contacto-info">
                <p>Si quieres contactar con nosotros llama al número +261 191 0232</p>
                <p>o si no haz click en el botón y podrás contactarnos directamente desde la página web.</p>
            </div>
            <button class="contacto-btn">
                Contactanos
            </button>
        </div>

        <div class="footer-section enlaces">
            <h3>Enlaces rápidos</h3>
            <ul>
                <li><a href="#">Tu Viaje</a></li>
                <li><a href="#">Pasaporte Online</a></li>
                <li><a href="#">Contactanos</a></li>
                <li><a href="#">Hoteles</a></li>
                <li><a href="#">Recomendaciones</a></li>
                <li><a href="#">GoldCard</a></li>
                <li><a href="#">Iniciar Sesión</a></li>
            </ul>
        </div>

        <div class="footer-section redes">
            <h3>Síguenos en</h3>
            <div class="redes-sociales">
                <a href="#" class="red-social">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="social-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    <span>Instagram</span>
                </a>
                <a href="#" class="red-social">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="social-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span>Facebook</span>
                </a>
                <a href="#" class="red-social">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="social-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    <span>X</span>
                </a>
                <a href="#" class="red-social">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="social-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                    <span>TikTok</span>
                </a>
                <a href="#" class="red-social">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="social-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                    <span>YouTube</span>
                </a>
            </div>
        </div>
    </div>
</footer>

</body>
</html>