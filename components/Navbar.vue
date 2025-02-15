<template>
    <div v-for="route in routeList" :key="route.path">      
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
    </div>
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
    }]
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
    }
</style>