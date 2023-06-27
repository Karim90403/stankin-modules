<script setup lang="ts">
import axios from 'axios';

const isUserRegistred = ref<boolean>(false)
const userLogin = ref<string>("")
const userPassword = ref<string>("")

const router = useRouter();

const Verify = async () => {
  try {
    const response = await axios.post("/api/registration", { login: userLogin.value, password: userPassword.value })
    localStorage.setItem("userToken", JSON.stringify(response.data.token))
    router.push('/')
  }catch (error) {
    isUserRegistred.value = true
  }
}

</script>

<template>
  <section>
    <div v-if="isUserRegistred" class="text-sm mx-auto text-center transition duration-300 text-red-400 my-2 sm:text-xl">Неверный логин или пароль</div>
    <form class="w-full h-full mt-8 space-y-6 flex flex-col justify-center items-center" action="#" method="POST" @submit.prevent="Verify()">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-md drop-shadow-xl -space-y-px">
        <label for="Login" class="sr-only">Login</label>
        <input
          id="Login" v-model="userLogin" name="Login" type="text" autocomplete="Login"
          required
          class="appearance-none rounded-none relative block px-3 py-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-900 focus:border-red-900 focus:z-10 sm:text-2xl lg:text-sm"
          placeholder="Логин">
        <label for="password" class="sr-only">Password</label>
        <input 
            id="password" v-model="userPassword" name="password" type="password"
            autocomplete="current-password" required
            class="appearance-none rounded-none relative block px-3 py-2 text-sm border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-900 focus:border-red-800 focus:z-10 sm:text-2xl lg:text-sm"
            placeholder="Пароль">
      </div>
      <button 
          type="submit"
          class="group relative text-center py-2 px-7 shadow-xl drop-shadow-2xl text-sm border border-transparent font-medium rounded-md text-white bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 sm:text-2xl lg:text-sm">
          Зарегестрироваться
      </button>
    </form>
  </section>
</template>