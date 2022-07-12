import axios from "axios";
import { defineStore } from "pinia";
import axiosClient from "../axios";
import careCenter from "../types/careCenter";

export const useCareCenterStore = defineStore({
    id: "careCenter",
    state: () => {
        return {
            careCenter: [] as careCenter[],
            loading: false as boolean
        };
    },
    actions: {
        fetchCareCenter() {
            axiosClient.get("/care-center").then(res => {
                this.careCenter = res.data;
            });
        },
        async saveCareCenter(data: object) {
            this.loading = true;
            try {
                return await axiosClient
                    .post("/care-center", data)
                    .then(res => {
                        return res;
                    });
            } catch (err) {
                return err;
            } finally {
                this.loading = false;
            }
        }
    },
    getters: {
        getCareCenter(state) {
            return state.careCenter;
        },
        getLoading(state) {
            return state.loading;
        }
    }
});
