<script setup lang="ts">
import axios from 'axios';

const router = useRouter();
const route = useRoute()

onMounted(async () => {
    try {
        let response = await axios.post("/api/getToken", {
            code: route.query.code
        })
        localStorage.setItem("accessToken", JSON.stringify(response.data.access_token))
        router.push("/modules")
    } catch (error) {
        console.log(error);
    }
}

)
</script>

<template>
    <div class="flex justify-center">
        <div class="mt-3 absolute xl:w-96">
            <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                <option value="---">---</option>
            </select>
        </div>
    </div>
    <div class="flex justify-center items-center h-screen">
        <table class="w-4/5 shadow-2xl table-auto rounded bg-white sm:w-1/2">
            <thead class="text-sm sm:text-base">
                <tr class="border-b-2 border-gray-500">
                    <td>Предмет</td>
                    <td class=" text-center">М1</td>
                    <td class=" text-center">М2</td>
                    <td class=" text-center">Зач</td>
                    <td>Экз</td>
                </tr>
            </thead>
            <tbody>
                <TheModule v-for="subject in 11" :key="subject"></TheModule>
                <tr v-for="subject in 11" :key="subject" class="border-b text-sm border-gray-500 sm:text-base">
                    <td>-------------</td>
                    <td class="text-center">--</td>
                    <td class="text-center">--</td>
                    <td class="text-center">--</td>
                    <td class="text-center">--</td>
                </tr>
                <tr>
                    <td class="text-sm sm:text-base">
                        Ожидаемый рейтинг: --
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
td {
    padding: .5em;
}

@media (min-width: 640px) {
    td {
        padding: .5em 1em .5em 1em;
    }
}
</style>