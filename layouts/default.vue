<template>
    <header>
        <nav>
            <h1>Nuxt tuto middleware</h1>
            <div v-for="route in routeList" :key="route.path">      
                <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
            </div>
        </nav>
    </header>
    <main>
    <slot>
        
    </slot>
    </main>
</template>

<script setup lang="ts">
    const routeList = [{
        name: 'Home',
        path: '/'},
        {
        name: 'User',
        path: '/user'},
        {
        name: 'Admin',
        path: '/admin'
        },
        {
        name: 'Login',
        path: '/login'
        },
        {
        name: 'Logout',
        path: '/logout'
        }
    ]
</script>

<style>
body {
    margin: 0;
    background: #efefef;
    font-family: 'Rubik';
}
header {
    background: #00dc82;
    padding: 20px;
}
nav {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
}
nav * {
    color: #fff;
    margin: 0;
}
nav h1 {
    margin-right: auto;
}
nav a {
    margin-left: 20px;
    text-decoration: none;
}
main {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
}
</style>