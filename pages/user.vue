<template>
    <h1>User</h1>
    <main>
        <h2>Title Bloc User</h2>
        <div>
            <h3>Description</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non in commodi impedit. A eius veritatis, placeat quas excepturi illo neque?
            </p>
            <p>All users will see this</p>
        </div>
    </main>
</template>

<script setup lang="ts"> 
    const user = useCookie('user')
    // inline middleware
    definePageMeta({ 
        middleware: [] 
    })
    
</script>

<style scoped></style>