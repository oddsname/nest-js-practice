import axios from "axios";
import {env} from "@/plugins/env";

export const http = axios.create({
    baseURL: env.SERVER_URL,
});