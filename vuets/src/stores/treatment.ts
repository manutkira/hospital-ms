import axios from "axios";
import { defineStore } from "pinia";
import axiosClient from "../axios";
import Treatment from "../types/treatment";

export const useTreatmentStore = defineStore({
    id: "treatment",
    state: () => {
        return {
            treatment: [] as Treatment[],
            loading: false as boolean
        };
    },
    actions: {
        fetchTreatment() {
            axiosClient.get("/treatment").then(res => {
                this.treatment = res.data;
            });
        },
        async saveTreatment(data: object) {
            this.loading = true;
            await axiosClient
                .post("/treatment", data)
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
        getTreatment(state) {
            return state.treatment;
        },
        getLoading(state) {
            return state.loading;
        }
    }
});
