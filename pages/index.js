import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orbit OS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="login.html">Log in</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="features.html">Features</a></li>
                <li><a href="Downloads.html">Downloads</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                
          </ul>
        </nav>
    </header>
    <main>
        <section class="hero">
            <h1>Welcome to Orbit OS</h1>
            <p>A fast, modern and beautiful, and it just works</p>
            <a href="#" class="btn">Get Started</a>
        </section>
        <section class="features">
            <h2>Key Features</h2>
            <ul>
                <li>frost theme </li>
                <li>Max compatibility</li>
                <li>Standard version is free</li>
            </ul>
        </section>
        <section class="download">
            <h2>Download Now</h2>
            <a href="#" class="btn">Download</a>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
