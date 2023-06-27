import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => (
        { user: null, foo: "bar" }
    ),
    getters: {
    },
    actions: {
        async auth(context: any) {
            let {data, error} = await useFetch("")
        }
    },
})