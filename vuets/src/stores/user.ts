import axios from "axios";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axiosClient from "../axios";

type User = {
    user: {
        id: number;
        name: string;
        email: string;
    };
    token: string;
};

export const useUserStore = defineStore({
    id: "user",
    state: () => {
        return {
            user: {
                user: {},
                token: sessionStorage.getItem("TOKEN")
            } as User,
            loading: false as boolean
        };
    },
    actions: {
        async register(data: object) {
            this.loading = true;
            try {
                return await axiosClient.post("/register", data).then(res => {
                    this.user = res.data;
                    sessionStorage.setItem("TOKEN", this.user.token);
                    return res;
                });
            } catch (err) {
                return err;
            } finally {
                this.loading = false;
            }
        },
        async login(data: object) {
            this.loading = true;
            try {
                return await axiosClient.post("/login", data).then(res => {
                    this.user = res.data;
                    sessionStorage.setItem("TOKEN", this.user.token);
                    return res;
                });
            } catch (err) {
                return err;
            } finally {
                this.loading = false;
            }
        },
        async logout() {
            await axiosClient.post("/logout").then(() => {
                this.user = {
                    user: {},
                    token: ""
                } as User;
                sessionStorage.removeItem("TOKEN");
            });
        }
    },
    getters: {
        getLoading(state) {
            return state.loading;
        }
    }
});
