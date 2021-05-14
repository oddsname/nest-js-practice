import {jsCookies} from "@/plugins/cookies";


export const cookies = {
    getToken: () => jsCookies.get('token'),

    setToken: (value) => jsCookies.set('token', value)
}