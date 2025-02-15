<template>
    <h1>Home</h1>
    <main>
        <h2>Title Bloc</h2>
        <div>
            <h3>Description</h3>
            <p><p v-if="user">Logged in as {{ user.username }}</p></p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non in commodi impedit. A eius veritatis, placeat quas excepturi illo neque?
            </p>
            <p>All visiters will see this</p>
        </div>
    </main>
</template>

<script setup lang="ts"> 
    const user = useCookie('user')
</script>

<style scoped></style>
