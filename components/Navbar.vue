<template>
    <nav>
        <div v-for="route in routeList" :key="route.path">      
            <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
        </div>
    </nav>
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

<style scoped>

</style>