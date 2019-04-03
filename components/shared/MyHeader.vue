<template>
    <nav class="navbar navbar-default navbar-pixelagil">
        <div class=container>
            <div class=navbar-header> <button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#navbar
                    aria-expanded=false aria-controls=navbar> <span class=sr-only>Toggle navigation</span>
                    <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span>
                    </button> <router-link class="navbar-brand" to="/"><img src="@/assets/img/logo-pixelagil.png" alt=""></router-link> </div>
            <div id=navbar
                class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link :to="{ name: 'web' }"> Diseño Web</router-link></li>
                    <li><router-link :to="{ name: 'integraciones' }">Integraciones</router-link></li>
                    <li><router-link :to="{ name: 'grafico' }">Diseño Gráfico</router-link></li>
                    <li><router-link :to="{ name: 'portafolio' }">Mis Trabajos</router-link></li>
                    <li><router-link :to="{ name: 'contacto' }">Contacto</router-link></li>
                    <li><router-link :to="{ name: 'orden' }">Cotización</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>