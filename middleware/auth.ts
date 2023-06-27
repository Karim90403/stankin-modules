import {useUserStore} from '@/store/user'

export default defineNuxtRouteMiddleware((to, from) => {
    //smth
    // if(!useUserStore().user) {
    //     return navigateTo('/register')
    // }
})