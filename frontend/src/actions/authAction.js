import {http} from '@/plugins/http'
import {cookies} from "@/common/cookies";
import {store} from "@/store";

export const authAction = {
    login: async (email, password) => {
        const {data} = await http.post('/auth/login', {
            email,
            password,
        })

        if(data.success) {
            cookies.setToken(data.token);
        }

        return data.success
    }

}