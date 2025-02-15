import type { User } from '~~/types'

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCookie<User>('user')
    if(user.value.role !== 'admin') {
        throw showError({ 
            statusCode: 403, 
            statusMessage: 'Access denied' 
        })
    }
})
