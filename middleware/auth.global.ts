export default defineNuxtRouteMiddleware((to, from) => {
    const authenticated = useCookie('user')
    // Si l'utilisateur n'est pas authentifié et tente d'accéder à une page protégée, on le redirige vers /login
    if(!authenticated.value && to.path !== '/login' && to.path !== '/') {
        return navigateTo('/login')
    }
    // Si l'utilisateur est authentifié et tente d'accéder à /login, on le redirige vers l'accueil
    if (authenticated.value && to.path === '/login') {
        return navigateTo('/')
    }
})