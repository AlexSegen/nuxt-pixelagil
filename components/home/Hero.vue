<template>
    <div class="ui-hero">
        <div class="hero-padding">
            <div class="container">
                <div class="col-sm-6 col-xs-12">
                    <div class="hero-content">
                        <h1 class="header-1">Frontend</h1>
                        <h2 class="header-2">Developer</h2>
                        <p>Puedo crear un espacio digital para tu organización y lo mejor de todo, optimizado para cualquier plataforma.</p>
                        <div class="cta-group">
                            <router-link :to="{ name: 'web'}" class="btn btn-theme border round">Saber Más</router-link>
                            <router-link :to="{ name: 'contacto'}" class="btn btn-theme round btn-cta">Contáctame</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 hidden-xs">
                    <div class="hero-figure">
                        <img src="@/assets/img/fig-astroman.png" class="fig02" alt="">
                    </div>
                </div>
            </div>
        </div>
        <img src="@/assets/img/fig-galaxy.png" class="fig01" alt="">
    </div>
</template>
