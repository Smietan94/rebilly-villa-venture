<script setup>
</script>

<template>
    <div class="bg-dark">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div class="container-fluid">
                <router-link :to="{ name: 'Casino' }" class="navbar-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-suit-spade me-2" viewBox="0 0 16 16">
                        <path d="M8 0a.5.5 0 0 1 .429.243c1.359 2.265 2.925 3.682 4.25 4.882q.144.128.282.255C14.308 6.604 15.5 7.747 15.5 9.5a4 4 0 0 1-5.406 3.746c.235.39.491.782.722 1.131.434.659-.01 1.623-.856 1.623H6.04c-.845 0-1.29-.964-.856-1.623.263-.397.51-.777.728-1.134A4 4 0 0 1 .5 9.5c0-1.753 1.192-2.896 2.539-4.12l.281-.255c1.326-1.2 2.892-2.617 4.251-4.882A.5.5 0 0 1 8 0M3.711 6.12C2.308 7.396 1.5 8.253 1.5 9.5a3 3 0 0 0 5.275 1.956.5.5 0 0 1 .868.43c-.094.438-.33.932-.611 1.428a29 29 0 0 1-1.013 1.614.03.03 0 0 0-.005.018.07.07 0 0 0 .024.054h3.924a.07.07 0 0 0 .024-.054.03.03 0 0 0-.005-.018c-.3-.455-.658-1.005-.96-1.535-.294-.514-.57-1.064-.664-1.507a.5.5 0 0 1 .868-.43A3 3 0 0 0 14.5 9.5c0-1.247-.808-2.104-2.211-3.38L12 5.86c-1.196-1.084-2.668-2.416-4-4.424-1.332 2.008-2.804 3.34-4 4.422l-.289.261z"/>
                    </svg>
                    Gamble Grove
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Games</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Promotions</a>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Project11' }" class="nav-link">Deposit</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container my-5 vh-100">
            <router-view />
        </div>

        <footer class="bg-dark text-white text-center py-4 footer-shadow">
            <div class="container">
                <p class="mb-2">© 2024 Casino - All Rights Reserved</p>
                <div class="footer-links">
                    <a href="#" class="text-white text-decoration-none mx-2">Terms of Service</a> |
                    <router-link :to="{ name: 'Debriefs' }" class="text-white text-decoration-none mx-2">DEBRIEFS</router-link>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    .navbar {
        padding: 1rem 2rem;
        background-color: #1a1a1a;
        transition: all 0.3s ease;
        font-family: 'Roboto', sans-serif;
    }

    .navbar-brand {
        font-weight: bold;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
    }

    .nav-link {
        font-size: 1.1rem;
        position: relative;
        color: #f8f9fa;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 3px;
        background-color: #f8c471;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
    .nav-link:hover {
        color: #f8c471;
    }
    .nav-link:hover::after {
        transform: scaleX(1);
    }

    footer {
        background-color: #1a1a1a;
        border-top: 2px solid #f8c471;
        font-size: 0.9rem;
    }

    .footer-shadow {
        box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.5);
    }

    footer p {
        margin: 0;
        font-size: 0.95rem;
    }

    .footer-links a {
        font-size: 0.95rem;
    }

    .footer-links a:hover {
        color: #f8c471;
        text-decoration: underline;
    }

    .social-links a {
        font-size: 1.5rem;
        color: #f8c471;
    }

    .text-center {
        text-align: center;
    }
</style>