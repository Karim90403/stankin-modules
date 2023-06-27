<script setup lang="ts">
import { ref } from 'vue';
const isNeedRegistration = ref<boolean>(true)
</script>

<template>
    <div class="flex justify-center items-center h-screen">
      <div class="w-4/5 p-5 shadow-2xl block rounded bg-white sm:w-1/2 sm:p-16">
        <span class="flex justify-center"><img alt="logo" class="w-52" src="../public/logo.svg"></span>
        <div class="flex justify-between sm:justify-around">
            <h1 class="cursor-pointer text-xl text-center my-4 transition duration-300 sm:text-3xl" :class="isNeedRegistration ? 'text-cyan-600 border-b border-cyan-600' : 'text-slate-400 hover:border-b hover:border-slate-400'" @click="isNeedRegistration = true">Регистрация</h1>
            <h1 class="cursor-pointer text-xl text-center my-4 transition duration-300 sm:text-3xl" :class="!isNeedRegistration ? 'text-cyan-600 border-b border-cyan-600' : 'text-slate-400 hover:border-b hover:border-slate-400'" @click="isNeedRegistration = false">Авторизация</h1>
        </div>
        <TheRegistration v-if="isNeedRegistration" />
        <TheAutorisation v-else />
        </div>
    </div>
</template>