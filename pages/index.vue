<script setup script lang="ts">
definePageMeta({
    middleware: [
        'auth',
    ],
});
</script>

<template>
    <div class="flex h-screen w-screen bg-red-300 items-center justify-center">
        <h1 class="text-white font-semibold text-2xl">Hello, World</h1>
    </div>
</template>