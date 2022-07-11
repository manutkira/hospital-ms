import axios from "axios";
import { defineStore } from "pinia";
import axiosClient from "../axios";
import Patient from "../types/patient";

const CurrentpatientType: Patient[] = [];

export const usePatientStore = defineStore({
    id: "patient",
    state: () => {
        return {
            patient: [] as Patient[],
            loading: false as boolean
        };
    },
    actions: {
        fetchPatient() {
            axiosClient.get("/patient").then(res => {
                this.patient = res.data;
            });
        },
        fetchOnePatient(id: string) {
            axiosClient.get(`/patient/${id}`).then(res => {
                this.patient = res.data;
            });
        },
        async savePatient(data: object) {
            this.loading = true;
            await axiosClient
                .post("/patient", data)
                .then(res => {
                    this.loading = false;
                    return res;
                })
                .catch(err => {
                    this.loading = false;
                });
        },
        async assignItem(data: object) {
            this.loading = true;
            await axiosClient
                .post("/assign-item", data)
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
        getPatient(state) {
            return state.patient;
        },
        getLoading(state) {
            return state.loading;
        }
    }
});
