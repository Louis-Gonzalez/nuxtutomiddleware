<script setup lang="ts">
    import type { NuxtError } from '#app'

    const props = defineProps({
    error: Object as () => NuxtError
    })

    const router = useRouter();

    const goHome = () => {
        router.push('/');
    };
</script>

<template>
    <NuxtLayout>
        <div class="error">
            <h2>{{ error?.statusCode }}</h2>
            <h2>{{ error?.statusMessage }}</h2>
            <button class="btn-home" @click="goHome">Go back home</button>
        </div>
    </NuxtLayout>
</template>

<style scoped>
    .error {
        width: 20rem;
        margin: 0 auto;
        padding: 1.25rem;
        background: #ffdede;
        border: 1px solid crimson;
        border-radius: 4px;
        text-align: center;
    }
    .h2 {
        margin-top: 0;
    }
    .btn-home {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background: darkgray;
        color: black;
        border: 1px solid crimson;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn-home:hover {
        background: rgb(59, 58, 58);
        color: whitesmoke;
        border: 1px solid darkgray;
        border-radius: 4px;
        cursor: pointer;
    }
</style>


