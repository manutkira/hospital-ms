import axios from "axios";
import { defineStore } from "pinia";
import careCenter from "../types/careCenter";

const careCenterType: careCenter[] = [];

export const useCareCenterStore = defineStore({
    id: "careCenter",
    state: () => {
        return {
            careCenter: careCenterType
        };
    },
    actions: {
        fetchCareCenter() {
            axios.get("http://localhost:8000/api/care-center").then(res => {
                this.careCenter = res.data;
            });
        },
        saveCareCenter(data: object) {
            axios
                .post("http://localhost:8000/api/care-center", data)
                .then(res => {
                    return res;
                });
        }
    },
    getters: {
        getCareCenter(state) {
            return state.careCenter;
        }
    }
});
