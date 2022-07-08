import axios from "axios";
import { defineStore } from "pinia";
import Treatment from "../types/treatment";

const treatmentType: Treatment[] = [];

export const useTreatmentStore = defineStore({
    id: "treatment",
    state: () => {
        return {
            treatment: treatmentType
        };
    },
    actions: {
        fetchTreatment() {
            axios.get("http://localhost:8000/api/treatment").then(res => {
                this.treatment = res.data;
            });
        },
        saveTreatment(data: object) {
            axios.post("http://localhost:8000/api/treatment", data);
        }
    },
    getters: {
        getTreatment(state) {
            return state.treatment;
        }
    }
});
