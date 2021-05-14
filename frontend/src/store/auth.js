export const authModule = {
    state: {
        authUser: null,
    },
    getters: {
       authUser: (state) => state.authUser
    },
    mutations: {
        setAuthUser: (state, user) => state.authUser = user,
    },
}