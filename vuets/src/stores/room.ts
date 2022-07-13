import axios from "axios";
import { defineStore } from "pinia";
import { async } from "q";
import axiosClient from "../axios";
import Bed from "../types/bed";
import Room from "../types/room";

export const useRoomStore = defineStore({
    id: "room",
    state: () => {
        return {
            room: [] as Room[],
            loading: false as boolean,
            bed: {} as Bed
        };
    },
    actions: {
        fetchRoom() {
            axiosClient.get("/room").then(res => {
                this.room = res.data;
            });
        },
        fetchOneRoom(roomID: string) {
            axiosClient.get(`/room/${roomID}`).then(res => {
                this.room = res.data;
                return res;
            });
        },
        fetchOneBed(bedId: number) {
            axiosClient.get(`/bed/${bedId}`).then(res => {
                this.bed = res.data;
                return res;
            });
        },
        updateBed(data: any) {
            this.loading = true;
            axiosClient.put(`/bed/${data.id}`, data).then(res => {
                this.loading = false;
                return res;
            });
        },
        async deleteBed(bedId: number) {
            return await axiosClient.delete(`/bed/${bedId}`).then(res => {
                return res;
            });
        },
        updateRoom(data: any) {
            this.loading = true;
            axiosClient.put(`/room/${data.id}`, data).then(res => {
                this.room = res.data;
                this.loading = false;
                return res;
            });
        },
        async saveRoom(data: object) {
            this.loading = true;
            await axiosClient
                .post("/room", data)
                .then(res => {
                    this.loading = false;
                    return res;
                })
                .catch(err => {
                    this.loading = false;
                });
        },
        async saveBed(data: object) {
            this.loading = true;

            await axiosClient
                .post("/bed", data)
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
        getRoom(state) {
            return state.room;
        },
        getLoading(state) {
            return state.loading;
        }
    }
});
