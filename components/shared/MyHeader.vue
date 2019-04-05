<template>
    <nav class="nav-pixelagil">
        <div class="container">
            <div class="nav-content">
                <div class="nav-brand">
                    <router-link :to="{ name: 'index' }">
                        <img src="@/assets/img/logo-pixelagil.png" alt="Pixelagil">
                    </router-link>
                </div>
                <ul class="nav-menu" id="nav-menu">
                    <li><router-link :to="{ name: 'web' }"> Diseño Web</router-link></li>
                    <li><router-link :to="{ name: 'integraciones' }">Integraciones</router-link></li>
                    <li><router-link :to="{ name: 'grafico' }">Diseño Gráfico</router-link></li>
                    <li><router-link :to="{ name: 'portafolio' }">Mis Trabajos</router-link></li>
                    <li><router-link :to="{ name: 'contacto' }">Contacto</router-link></li>
                    <li><router-link :to="{ name: 'orden' }">Cotización</router-link></li>
                </ul>
                <button class="nav-toggle" id="toggleMenu">Menu</button>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    name: 'Navbar'
}
</script>
