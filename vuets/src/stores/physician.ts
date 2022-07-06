import axios from "axios";
import { defineStore } from "pinia";
import Physician from "../types/physician";

const physicianType: Physician[] = [];
export const usePhysicianStore = defineStore({
    id: "physician",
    state: () => {
        return {
            physician: physicianType
        };
    },
    actions: {
        fetchPhysician() {
            axios.get("http://localhost:8000/api/physician").then(res => {
                this.physician = res.data;
            });
        },
        savePhysician(data: object) {
            axios.post("http://localhost:8000/api/physician", data);
        }
    },
    getters: {
        getPhysician(state) {
            return state.physician;
        }
    }
});
