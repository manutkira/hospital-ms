import axios from "axios";
import { defineStore } from "pinia";
import axiosClient from "../axios";
import Physician from "../types/physician";

export const usePhysicianStore = defineStore({
    id: "physician",
    state: () => {
        return {
            physician: [] as Physician[],
            loading: false as boolean
        };
    },
    actions: {
        fetchPhysician() {
            axiosClient.get("/physician").then(res => {
                this.physician = res.data;
            });
        },
        async savePhysician(data: object) {
            this.loading = true;
            await axiosClient
                .post("/physician", data)
                .then(res => {
                    this.loading = false;
                    return res;
                })
                .catch(err => {
                    this.loading = false;
                });
        }
    },
    getters: {
        getPhysician(state) {
            return state.physician;
        },
        getLoading(state) {
            return state.loading;
        }
    }
});
