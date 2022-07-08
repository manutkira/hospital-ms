import axios from "axios";
import { defineStore } from "pinia";
import Patient from "../types/patient";

const patientType: Patient[] = [];
const CurrentpatientType: Patient[] = [];

export const usePatientStore = defineStore({
    id: "patient",
    state: () => {
        return {
            patient: patientType
        };
    },
    actions: {
        fetchPatient() {
            axios.get("http://localhost:8000/api/patient").then(res => {
                this.patient = res.data;
            });
        },
        fetchOnePatient(id: string) {
            axios.get(`http://localhost:8000/api/patient/${id}`).then(res => {
                this.patient = res.data;
            });
        },
        savePatient(data: object) {
            axios.post("http://localhost:8000/api/patient", data);
        },
        assignItem(data: object) {
            axios.post("http://localhost:8000/api/assign-item", data);
        }
    },
    getters: {
        getPatient(state) {
            return state.patient;
        }
    }
});
